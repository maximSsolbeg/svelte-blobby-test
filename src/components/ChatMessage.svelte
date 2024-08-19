<script>
  import {ThreeDScene} from "../components";
  import {onMount} from "svelte";
  import {useScreenWidth} from "../utils/useScreenWidth";

  const screenWidth = useScreenWidth();

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
    <div class="chat-message__model-wrapper">
        <ThreeDScene
                rotate={false}
                diameter={$screenWidth < 769 ? 70 : 124}
                className="chat-message__model"
        />
    </div>

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
    @include mobile {
      min-width: initial;
      padding: 12px 32px;
      width: 100%;
    }
  }

  .chat-message__name {
    font-size: 28px;
    color: var(--white-opacity-40);
    @include mobile {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .chat-message__text {
    font-size: 28px;
    color: var(--white);
    @include mobile {
      font-size: 16px;
      line-height: 20px;
    }
  }

  :global(.chat-message__model) {
    margin-right: 24px;
  }
</style>