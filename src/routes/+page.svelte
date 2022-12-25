<script>
  import { page } from "$app/stores";
  import Modal from "./Modal.svelte";
  import { isModalOpen } from "./stores/modalStore.js";
</script>

<svelte:head>
  <title>Полет ласточки</title>
  <meta name="description" content="Ресторан Полет Ласточки" />
</svelte:head>

<main class="container">
  {#if !$isModalOpen}
    <h1 class="main-title">Ресторан "Полет ласточки"</h1>
  {:else}
    <h1 class="main-title">&#8203;</h1>
  {/if}

  <ul class="menu-list">
    <li
      class="menu-item"
      aria-current={$page.url.pathname === "/menu" ? "page" : undefined}
    >
      <a class="button menu-button" href="/menu">Меню</a>
    </li>
    <li
      class="menu-item"
      aria-current={$page.url.pathname === "/bar" ? "page" : undefined}
    >
      <a class="button menu-button" href="/bar">Барная карта</a>
    </li>
    <li
      class="menu-item"
      aria-current={$page.url.pathname === "/orders" ? "page" : undefined}
    >
      <a class="button menu-button" href="/orders">Заказы</a>
    </li>
    <li
      class="menu-item"
      aria-current={$page.url.pathname === "/booking" ? "page" : undefined}
    >
      <a class="button menu-button" href="/booking">Бронь стола</a>
    </li>
    <li
      class="menu-item"
      aria-current={$page.url.pathname === "/lk" ? "page" : undefined}
    >
      <a class="button menu-button" href="/lk">Личный кабинет</a>
    </li>
  </ul>

  {#if $isModalOpen}
    <Modal />
  {/if}
</main>

<style>
  a {
    text-decoration: none;
  }

  .main-title {
    margin: 0;
    padding: 0;
    margin-top: 15px;
    margin-bottom: 70px;

    text-align: center;
  }

  .menu-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  .button {
    display: inline-block;
    margin-bottom: 50px;
    padding: 5px 30px;

    font: inherit;
    text-align: center;
    color: #000000;
    vertical-align: middle;

    background-color: #ffe7c6;
    border: 2px solid #adb6b6;
  }

  .menu-item:last-child {
    margin-left: 115px;
  }

  .menu-button {
    width: 120px;
  }

  .container {
    width: 400px;
    margin: 0 auto;
    padding: 0 10px;
  }
</style>
