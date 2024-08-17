<script lang="ts">
    import { base } from '$app/paths';

    export let width: string | number = 16;
    export let height: string | number = 16;
    export let name: string;
</script>

<svg {...$$restProps} {width} {height}>
    <use xlink:href={`${base}/assets/sprite.svg#${name}`} />
</svg>
