<script>
  export let orderNumber;
  export let orderDate;
  export let orderMenu;
  export let orderPrice;
  export let newOrder = false;
</script>

<li class="order-li">
  <p class="order-number">№{orderNumber}</p>
  <p class="order-date">{orderDate}</p>
  <p class="order-menu">{orderMenu}</p>
  <p class="order-price">{orderPrice} руб.</p>
  {#if !newOrder}
    <button class="button button-checkout">Повторить</button>
  {:else}
    <button
      on:click={() => {
        newOrder = false;
      }}
      class="button button-checkout">Оформить заказ</button
    >
  {/if}
</li>

<style>
  .order-li {
    margin-bottom: 0;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
  }

  .order-li:last-child {
    margin-bottom: 40px;
  }

  .order-li .button-checkout {
    width: 130px;
    padding: 0;
    margin-top: 5px;
    margin-bottom: 0;
    height: 35px;
  }

  .order-li p {
    background-color: #83ffff;
    height: 20px;
    margin: 0;
    margin-top: 20px;
    margin-right: 10px;
  }

  .order-number {
    width: 100px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .order-date {
    width: 66px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .order-menu {
    width: 300px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .order-price {
    width: 100px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .button-checkout {
    width: 156px;
    background-color: #84ff84;
  }
</style>
