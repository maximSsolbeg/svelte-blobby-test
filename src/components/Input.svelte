<script>
  import { Icon } from "../components";

  export let placeholder = "Send a message";

  let message = "";
</script>

<div class="input-container">
    <input type="text"
           {placeholder}
           class="message-input"
           bind:value={message}
    />
    <button class="message-input__send-button">
        <Icon name="arrow-up" width="32" height="32" class="message-input__icon"/>
    </button>
</div>


<style lang="scss">
    @import '../styles/_mixins.scss';

    .input-container {
        min-height: 80px;
        max-height: 240px;
        display: flex;
        align-items: center;
        background-color: var(--white-opacity-3);
        border-radius: 60px;
        border: 1px solid var(--white-opacity-15);
        padding: 0 20px 0 37px;

        &:focus-within {
            background-color: var(--white-opacity-5);
            border: 1px solid var(--white-opacity-40);
        }
    }

    .message-input  {
        @include instrumentSans(400);
        flex-grow: 1;
        border: none;
        background-color: transparent;
        color: white;
        font-size: 20px;
        line-height: 24px;
        outline: none;


        &::placeholder {
            color: var(--white-opacity-80);
        }
    }

    .message-input:focus .input-container{
      background-color: var(--white-opacity-15);
    }

    .message-input__send-button {
        background-color: var(--white);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        outline: none;

      &:hover {
        transition: background-color 0.6s;
        background-color: var(--white-opacity-60);
      }
    }


    :global(.message-input__icon) {
      color: var(--black-primary);
    }
</style>