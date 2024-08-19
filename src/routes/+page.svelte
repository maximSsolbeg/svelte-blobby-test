<script lang="ts">
import { Header, HeroSection, JoinSection } from "../components";
</script>

<script context="module">
  export const prerender = true;
</script>

<div class="global-container" >
    <Header/>
    <main>
        <HeroSection/>
        <JoinSection/>
    </main>
</div>


<style lang="scss">
  @import '../styles/_mixins.scss';

  .global-container {
    min-height: calc(100vh - 24px);
    overflow: hidden;
    @include mobile {
      min-height: 100vh;
    }
  }

  :global(body) {
    @include mobile {
      padding: 0;
    }
  }
</style>
