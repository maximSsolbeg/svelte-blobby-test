<script>
  import * as THREE from 'three';
  import {onMount} from 'svelte';
  import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

  export let rotate = true;
  export let diameter = 380;
  export let className = '';

  let container;
  let model;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    scene.background = null;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load('public/assets/Airless.glb', (gltf) => {
      model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.sub(center);

      model.scale.set(0.81, 0.81, 0.81);
      scene.add(model);

      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)));

      camera.position.set(center.x, center.y, cameraZ);
      camera.lookAt(center);
    });

    function animate() {
      requestAnimationFrame(animate);

      if (model && rotate) {
        model.rotation.y += 0.003;
        model.rotation.x += 0.002;
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
  });
</script>

<div bind:this={container}
     class={`three-container ${className}`}
     style={`width: ${diameter}px; height: ${diameter}px;`}>
</div>

<style>
    .three-container {
        border-radius: 50%;
        overflow: hidden;
        background: transparent;
    }
</style>
