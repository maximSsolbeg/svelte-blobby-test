<script>
  import { ThreeDScene2 } from "../components";

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
                <div class="join-section__step">
                    <h4>Step 03</h4>
                    <p>Get rewards</p>
                </div>
            </div>
            <div class="join-section__cta-buttons">
                <button class="button button-filled join-section__cta-btn-white">Buy Node License</button>
                <button class="button button-filled">Learn more about Nodes</button>
            </div>
        </div>
    </div>

    <ThreeDScene2 />
</section>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .join-section {
    display: flex;
    justify-content: space-between;
    padding: 110px 100px 100px;
    height: 507px;
  }

  .join-section__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .join-section__step {
    border-right: solid 1px var(--white-opacity-15);
    padding: 0 78px 0 5px;
  }

  .join-section__steps {
    display: flex;
    gap: 20px;
    justify-content: flex-start;
  }

  .join-section__cta-buttons {
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    margin-top: 46px;
  }

  .join-section__step {
    h4 {
      @include spaceGrotesk(400);
      font-size: 17px;
      color: var(--white-opacity-60);
      margin-bottom: 2px;
    }

    p {
      @include instrumentSans(400);
      font-size: 18px;
      color: var(--white-primary);
      margin: 0;
    }
  }

  h1 {
    @include spaceGrotesk(500);
    font-size: 52px;
    line-height: 62px;
    color: var(--white-primary);
    margin-bottom: 24px;
  }

  .join-section__description {
    @include instrumentSans(400);
    font-size: 17px;
    line-height: 26px;
    width: 400px;
    color: var(--white-opacity-60);
  }

  .join-section__cta-btn-white {
    color: var(--dark);
    background-color: var(--white-opacity-90);

    &:hover {
      background-color: var(--white-opacity-60);
    }
  }

  .join-section__image {
    height: 400px;
    width: 400px;
    border: dashed 2px purple;
  }
</style>