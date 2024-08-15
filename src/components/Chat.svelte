<script>
  import { ChatMessage, MessageCard, Input } from "../components";
  import { onMount } from 'svelte';

  const cards = [
    {
      text: 'Does Blobby AI have restrictions or censorship?',
      iconName: 'chat-lock'
    },
    {
      text: 'Write me a poem about the president',
      iconName: 'payment-success'
    },
    {
      text: 'Invent a new Olympic Sport. Describe the rules, equipment, and creative challenges for participants',
      iconName: 'user-group'
    },
    {
      text: 'Write me a humorous story about being on a spaceship exploring a new solar system with quirky alien crew members',
      iconName: 'flag'
    }
  ];

  let showChatMessage = false;
  let showCardsAndInput = false;
  let showBackgroundAndButton = false;

  onMount(() => {
    const baseDelay = 1000;

    const startSequence = () => {
      showChatMessage = false;
      showCardsAndInput = false;
      showBackgroundAndButton = false;

      setTimeout(() => {
        showChatMessage = true;
      }, baseDelay);

      setTimeout(() => {
        showCardsAndInput = true;
      }, baseDelay * 3);

      setTimeout(() => {
        showBackgroundAndButton = true;
      }, baseDelay * 5);

      setTimeout(() => {
        showChatMessage = false;
        showCardsAndInput = false;
        showBackgroundAndButton = false;

        setTimeout(startSequence, baseDelay * 2);
      }, baseDelay * 6);
    };

    startSequence();
  });
</script>

<div class:chat__container-bg={showBackgroundAndButton}
     class={`chat__container ${showChatMessage || showCardsAndInput ? 'show' : ''}`}>
    <div class={`chat__container-header ${showChatMessage ? 'show' : ''}`}>
        <ChatMessage />

        <button class:disabled={!showBackgroundAndButton}
                class="button button-filled">
            Full-screen version
        </button>
    </div>

    <div class={`chat__cards-container ${showCardsAndInput ? 'show' : ''}`}>
        {#each cards as card}
            <MessageCard text={card.text} iconName={card.iconName} />
        {/each}
    </div>


    <div class="chat__input" class:show={showCardsAndInput}>
        <Input placeholder="Send a message" />
    </div>
</div>

<style lang="scss">
    @import '../styles/_mixins.scss';

    .chat__container{
      padding: 100px 80px;
      border-radius: 28px;
      background-color: transparent;
      transition: opacity 1s;
      @include desktopSmall {
        padding: 61px 69px;
      }
    }

    .disabled {
      display: none;
    }

    .chat__container-bg {
      background-color: var(--purple-thin);
    }

    .chat__container-header,
    .chat__cards-container,
    .chat__input {
      transition: opacity 1s;
      opacity: 0;
    }

    .chat__container-header.show {
      opacity: 1;
    }

    .chat__cards-container.show,
    .chat__input.show {
      opacity: 1;
    }

    .chat__container-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .chat__cards-container {
      width: 100%;
      display: flex;
      gap: 20px;
      margin-bottom: 42px;
    }
</style>