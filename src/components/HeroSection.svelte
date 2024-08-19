<script>
  import {Icon, Chat, ThreeDScene} from "../components";
  import {useScreenWidth} from "../utils/useScreenWidth";

  const screenWidth = useScreenWidth();
  const description = `The first uncensored, bias-free conversational AI agent
            based on a decentralized framework and owned by the people.`;
</script>

<section class="hero-section">
    <div class="hero-section__header">
        <div class="hero-section__header-left">
            <div>
                <h1>The first AI owned by the people</h1>
                {#if $screenWidth < 1360}
                    <div class="hero-section__header-right">
                        <p>{description}</p>
                    </div>
                {/if}
            </div>
            <button class="button button-text button-icon">
                <Icon name="arrow-down-btn" width="24" height="24" class="hero-section__logo-icon"/>
                Try now
            </button>
        </div>

        <ThreeDScene className="hero-section__model" diameter={$screenWidth > 1359 ? 380 : 316}/>

        {#if $screenWidth > 1359}
            <div class="hero-section__header-right">
                <p>{description}</p>
            </div>
        {/if}
    </div>

    <Chat/>
</section>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .hero-section {
    border-radius: 36px;
    padding: 20px;
    overflow: hidden;
    background: linear-gradient(
                    45deg,
                    rgba(255, 255, 255, 0.04),
                    rgba(125, 66, 236, 0.04)
    ),
    url('/assets/highlight.png');

    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    @include tablet {
      padding: 12px;
    }
    @include mobile {
      padding: 12px;
    }

    h1 {
      font-size: 54.17px;
      line-height: 65px;
      width: 500px;
      color: var(--white-primary);
      @include desktopSmall {
        font-size: 40px;
        line-height: 48px;
        width: 360px;
      }
    ;
      @include tablet {
        font-size: 40px;
        line-height: 48px;
        width: 336px;
      }
    ;
      @include mobile {
        font-size: 40px;
        line-height: 48px;
        width: 336px;
      }
    }
  }

  .hero-section__header {
    position: relative;
    height: 474px;
    padding: 104px 80px 84px;
    display: flex;
    justify-content: space-between;
    @include desktopSmall {
      flex-direction: column;
      align-items: flex-start;
      height: 316px;
      padding: 76px 68px 72px;
    }
    @include tablet {
      padding: 61px 40px 72px;
      height: 355px;
    }
    @include mobile {
      padding: 50px 20px 61px;
      height: 768px;
    }

    p {
      width: 491px;
      opacity: 0.6;
      font-size: 20px;
      line-height: 31px;
      margin-bottom: 0;
      @include desktopSmall {
        width: 510px;
      }
      @include tablet {
        margin-top: 25px;
        width: 300px;
      }
      @include mobile {
        margin-top: 25px;
        width: 300px;
        font-size: 17px;
        line-height: 26px;
      }
    }
  }

  .hero-section__header-left {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @include desktopSmall {
      height: 100%;
    }
    @include mobile {
      width: 100%;
    }
  }

  .hero-section__header-right {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @include desktopSmall {
      display: flex;
      margin-top: 4px;
      width: 150px;
    }
  }

  .button.button-text.button-icon {
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 0;
    height: auto;
    @include mobile {
      flex-direction: column-reverse;
      align-self: center;
    }

    &:hover {
      color: var(--white);
      transition: color 0.6s;
      text-decoration: underline;
      background-color: transparent;
    }

    &:focus {
      border: none;
      text-decoration: underline;
    }
  }

  :global(.hero-section__logo-icon) {
    color: var(--white-opacity-60);
  }

  :global(.button.button-text.button-icon:hover .hero-section__logo-icon) {
    color: var(--white);
    transition: color 0.6s;
  }

  :global(.button.button-text.button-icon:focus .hero-section__logo-icon) {
    color: var(--white);
  }

  :global(.hero-section__model) {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include desktopSmall {
      left: 73%;
    }
    @include tablet {
      left: 73%;
    }
    @include mobile {
      top: 61%;
    }
  }
</style>