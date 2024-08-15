<script lang="ts">
    export let width: string | number = 16;
    export let height: string | number = 16;
    export let name: string;
</script>

<svg {...$$restProps} {width} {height}>
    <use xlink:href={`public/assets/sprite.svg#${name}`} />
</svg>
