<script>
  import {ThreeDScene} from "../components";
  import {onMount} from "svelte";

  let text = "How can I help you?";
  let displayedText = "";
  let typingSpeed = 100;

  onMount(() => {
    let index = 0;

    const typeWriter = setInterval(() => {
      if (index < text.length) {
        displayedText += text[index];
        index++;
      } else {
        clearInterval(typeWriter);
      }
    }, typingSpeed);
  });
</script>

<div class="chat-message">
    <ThreeDScene
            rotate={false}
            diameter="124"
            className="chat-message__model"
    />

    <div class="chat-message__bubble">
        <div class="chat-message__name">Hi! I'm Blobby</div>
        <div class="chat-message__text">{displayedText}</div>
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
    @include desktopSmall {
      margin-bottom: 60px;
    }
    @include tablet {
      max-width: 100%;
      margin-bottom: 59px;
    }
    @include mobile {
      max-width: 100%;
      margin-bottom: 59px;
    }
  }

  .chat-message__bubble {
    @include spaceGrotesk(500);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 92px 74px 74px 18px;
    padding: 24px 53px;
    min-width: 332px;
    line-height: 35.7px;
  }

  .chat-message__name {
    font-size: 28px;
    color: var(--white-opacity-40);
  }

  .chat-message__text {
    font-size: 28px;
    color: var(--white);
  }

  :global(.chat-message__model) {
    margin-right: 24px;
  }
</style>