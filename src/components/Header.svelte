<script>
    import { Icon } from "../components";
    import { useScreenWidth } from "../utils/useScreenWidth";
    import { desktopSmall } from "../utils/screenSize";

    const screenWidth = useScreenWidth();
    let isMenuOpen = false;

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
</script>

<div class="header">
    <div class="header__logo">
        <a href="#">
            <Icon name="logo" width="32" height="32" />
        </a>
    </div>

    <div class="header__flex-buttons">
        {#if $screenWidth <= desktopSmall}
            <div class="header__dropdown-wrapper">
                <button class="button button-text button-burger" on:click={toggleMenu}>
                    <Icon name="burger" width="24" height="24" />
                </button>
                {#if isMenuOpen}
                    <div class="header__dropdown">
                        <button class="button button-text">Nodes</button>
                        <button class="button button-text">Token</button>
                        <button class="button button-text">About</button>
                        <button class="button button-text">Connect wallet</button>
                        <button class="button button-text">Dashboard</button>
                        <button class="button button-filled-pink">Try Chat</button>
                    </div>
                {/if}
            </div>
        {:else}
            <div class="header__left">
                <button class="button button-text">Nodes</button>
                <button class="button button-text">Token</button>
                <button class="button button-text">About</button>
            </div>
            <div class="header__right">
                <button class="button button-text">Connect wallet</button>
                <button class="button button-text">Dashboard</button>
                <button class="button button-filled-pink">Try Chat</button>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 36px 20px;
    @include tablet {
      padding: 4px 7px 16px 16px;
    }
  }

  .header__logo {
    margin-right: 116px;
    padding-top: 8px;
  }

  .header__left {
    display: flex;
    gap: 24px;
  }

  .header__right {
    display: flex;
    gap: 26px;
  }

  .header__flex-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @include tablet {
      justify-content: flex-end;
      width: auto;
    }
    @include mobile {
      justify-content: flex-end;
      width: auto;
    }
  }

  .button-filled-pink {
    margin-left: 22px;
  }

  .button.button-text.button-burger {
    padding: 8px;
    border-right: 8px;
    @include tablet {
      padding: 12px 9px;
    }
  }

  .header__dropdown-wrapper {
    position: relative;
  }

  .header__dropdown {
    position: absolute;
    top: 56px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 180px;
    z-index: 3;
    padding: 10px;
    align-items: flex-start;
    background: $black-primary;
    border-radius: 14px;
    border: solid 1px #f0f0f05c;
  }
</style>