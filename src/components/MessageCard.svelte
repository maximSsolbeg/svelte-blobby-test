<script>
  import {Icon} from "../components";

  export let text = '';
  export let iconName = '';
</script>

<div class="message-card" aria-label="Message Card Button">
    <p>{text}</p>

    <div class="message-card__icon-wrapper">
        <Icon name={iconName} width="22" height="22" class="message-card__icon"/>
    </div>
</div>

<style lang="scss">
  @import '../styles/_mixins.scss';

  .message-card {
    cursor: pointer;
    @include instrumentSans(400);
    height: 197px;
    flex: 1;
    border-radius: 28px;
    padding: 27px 36px 45px;
    line-height: 23px;
    font-size: 16px;
    background-color: var(--white-opacity-5);
    color: var(--white-opacity-60);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    p {
      @include desktopSmall {
        margin-bottom: 0;
      }
    }
  }


  .message-card:hover {
    background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0.1),
                    rgba(125, 66, 236, 0.1)
    );
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .message-card:focus {
    outline: solid 1px #f0f0f05c;
  }

  .message-card__icon-wrapper {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    border-radius: 50%;
    background-color: var(--white-opacity-10);
  }

  :global(.message-card__icon) {
    color: var(--white-primary);
  }

</style>