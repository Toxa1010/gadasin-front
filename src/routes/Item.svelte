<script>
  export let itemName;
  export let itemImage;
  export let itemPrice;

  import { orders, fullPrice } from "./stores/modalStore";

  let added = false;
</script>

<li class="menu-item">
  <h3>
    <a href="/">
      <span class="menu-category">{itemName}</span>
    </a>
  </h3>
  <a href="/"
    ><img src={itemImage} width="220" height="165" alt="Фото товара" /></a
  >
  <button
    class="button button-order"
    on:click={() => {
      added = true;

      $fullPrice += itemPrice;

      orders.update((n) => [...n, itemName]);
    }}>В заказ ({itemPrice}руб.)</button
  >
  {#if added}
    <div class="was-added">Товар добавлен к общему заказу</div>
  {:else}
    <div class="was-added">&#8203;</div>
  {/if}
</li>

<style>
  .menu-item {
    display: flex;
    margin-left: 40px;
    flex-direction: column;
    align-items: center;
  }

  .menu-item:last-child {
    margin-right: 40px;
  }

  .menu-item img {
    width: 220px;
    height: 175px;
    margin: 0;
  }

  .button-order {
    width: 220px;
    background-color: #84ff84;
  }

  .menu-item a {
    color: #000000;
  }

  button:hover {
    border-color: black;
  }

  .was-added {
    margin-top: -10px;
  }
</style>
