<script>
  import { ChatMessage, MessageCard, Input } from "../components";

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
  ]
</script>

<div class="chat__container">
    <div class="chat__container-header">
        <ChatMessage />
        <button class="button button-filled">Full-screen version</button>
    </div>

    <div class="chat__cards-container">
        {#each cards as card}
            <MessageCard text={card.text} iconName={card.iconName}/>
        {/each}
    </div>

    <Input placeholder="Send a message"/>
</div>

<style lang="scss">
    .chat__container{
      padding: 100px 80px;
      border-radius: 28px;
      background-color: var(--purple-thin);
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