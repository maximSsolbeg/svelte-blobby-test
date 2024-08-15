<script>
  import { ThreeDScene } from "../components";
</script>

<div class="chat-message">
    <ThreeDScene
            rotate={false}
            diameter="124"
            className="chat-message__model"
    />

    <div class="chat-message__bubble">
        <div class="chat-message__name">Hi! I'm Blobby</div>
        <div class="chat-message__text">How can I help you?</div>
    </div>
</div>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .chat-message {
    display: flex;
    align-items: center;
    line-height: 34px;
    max-width: calc(100% - 200px);
    margin-bottom: 82px;
  }

  .chat-message__icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 12px;
    border: solid 1px red;
  }

  .chat-message__bubble {
    @include spaceGrotesk(500);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 74px 74px 74px 18px;
    padding: 26px 40px;
  }

  .chat-message__name {
    font-size: 28px;
    color: var(--white-opacity-40);
    margin-bottom: 4px;
  }

  .chat-message__text {
    font-size: 28px;
    color: var(--white);
  }

  :global(.chat-message__model) {
    margin-right: 20px;
  }

</style>