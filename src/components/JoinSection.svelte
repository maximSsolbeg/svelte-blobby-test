<script>
  import {ThreeDScene2} from "../components";
  import {useScreenWidth} from "../utils/useScreenWidth";

  const screenWidth = useScreenWidth();
  const description = `Provide computational power to the Blobby AI infrastructure and earn rewards in $Blobby`;
</script>

<section class="join-section">
    <div class="join-section__content">
        <div>
            <h1>Join the <br/> AI revolution</h1>
            <p class="join-section__description">{description}</p>
        </div>

        <div>
            <div class="join-section__steps">
                <div class="join-section__step">
                    <h4>Step 01</h4>
                    <p>Buy a node</p>
                </div>
                <div class="join-section__step">
                    <h4>Step 02</h4>
                    <p>Install node</p>
                </div>
                <div class="join-section__step no-border">
                    <h4>Step 03</h4>
                    <p>Get rewards</p>
                </div>
            </div>
            <div class="join-section__cta-buttons">
                <button class="button button-filled join-section__cta-btn-white">Buy Node License</button>
                <button class="button button-filled">
                    {#if $screenWidth > 1359}
                        Learn more about Nodes
                    {:else}
                        Get started
                    {/if}
                </button>
            </div>
        </div>
    </div>

    {#if $screenWidth > 767}
        <div class="join-section__madel-wrapper">
            <ThreeDScene2/>
        </div>
    {/if}
</section>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .join-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 110px 100px 100px;
    height: 507px;
    @include desktopSmall {
      padding: 96px 89px 100px;
      height: 451px;
    }
    @include tablet {
      position: relative;
      padding: 73px 52px 100px;
      height: 377px;
    }
    @include mobile {
      padding: 43px 16px 66px;
      height: 377px;
    }
  }

  .join-section__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .join-section__step {
    border-right: solid 1px var(--white-opacity-15);
    padding: 0 78px 0 5px;
    @include desktopSmall {
      padding-right: 80px;
      line-height: 22px;
    }
    @include tablet {
      padding-right: 80px;
      line-height: 22px;
    }
    @include mobile {
      padding: 0 10px 0 0;
    }
  }

  .join-section__step.no-border {
    border-right: none;
  }

  .join-section__steps {
    display: flex;
    gap: 17px;
    justify-content: flex-start;
    @include desktopSmall {
      gap: 15px;
    }

    h4 {
      @include spaceGrotesk(400);
      font-size: 17px;
      color: var(--white-opacity-60);
      margin-bottom: 2px;
      @include desktopSmall {
        font-size: 14px;
      }
      @include tablet {
        font-size: 14px;
      }
      @include tablet {
        font-size: 13px;
      }
    }

    p {
      @include instrumentSans(400);
      font-size: 18px;
      color: var(--white-primary);
      margin: 0;
      @include desktopSmall {
        font-size: 16px;
      }
      @include tablet {
        font-size: 16px;
      }
      @include tablet {
        font-size: 15px;
      }
    }

  }

  .join-section__cta-buttons {
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    margin-top: 44px;
    @include desktopSmall {
      margin-top: 48px;
    }
    @include tablet {
      margin-top: 48px;
    }
  }

  h1 {
    @include spaceGrotesk(500);
    font-size: 52px;
    line-height: 62px;
    color: var(--white-primary);
    margin-bottom: 24px;
    @include desktopSmall {
      font-size: 36px;
      line-height: 43.2px;
      margin-bottom: 11px;
    }
    @include tablet {
      font-size: 36px;
      line-height: 43.2px;
      margin-bottom: 11px;
    }
    @include mobile {
      font-size: 36px;
      line-height: 43.2px;
      margin-bottom: 11px;
    }
  }

  .join-section__description {
    @include instrumentSans(400);
    font-size: 17px;
    line-height: 26px;
    width: 400px;
    color: var(--white-opacity-60);
    @include desktopSmall {
      font-size: 16px;
      line-height: 24.8px;
      margin-top: 0;
      width: 334px;
    }
    @include tablet {
      font-size: 16px;
      line-height: 24.8px;
      margin-top: 0;
      width: 300px;
    }
    @include mobile {
      font-size: 16px;
      line-height: 24.8px;
      margin-top: 0;
      width: 300px;
    }
  }

  .join-section__cta-btn-white {
    color: var(--dark);
    background-color: var(--white-opacity-90);

    &:hover {
      background-color: var(--white-opacity-60);
    }
  }

  .join-section__madel-wrapper {
    @include tablet {
      position: absolute;
      left: 66%;
    }
  }
</style>