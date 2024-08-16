import { onMount } from "svelte";
import { writable } from "svelte/store";

export function useScreenWidth() {
    const screenWidth = writable<number>(typeof window !== "undefined" ? window.innerWidth : 0);

    onMount(() => {
        const updateWidth = () => {
            screenWidth.set(window.innerWidth);
        };

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    });

    return screenWidth;
}
