<script>
    import { Icon } from "../components";
</script>

<div class="header">
    <div class="header__logo">
        <a href="#">
            <Icon name="logo" width="32" height="32" />
        </a>
    </div>

    <div class="header__flex-buttons">
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
    </div>
</div>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding: 12px 36px 20px;
  }

  .header__logo {
    margin-right: 116px;
    padding-top: 6px;
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
  }

  .button-filled-pink {
    margin-left: 22px;
  }
</style>