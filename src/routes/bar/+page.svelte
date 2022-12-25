<script>
  import Item from "../Item.svelte";

  import img7 from "$lib/images/7.jpg";
  import img8 from "$lib/images/8.jpg";
  import img9 from "$lib/images/9.jpg";
  import img10 from "$lib/images/10.jpg";
  import img11 from "$lib/images/11.jpg";
  import img12 from "$lib/images/12.jpg";
  import img13 from "$lib/images/13.jpg";
  import img14 from "$lib/images/14.jpg";
  import img15 from "$lib/images/15.jpg";
  import img16 from "$lib/images/16.jpg";

  let images = [
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  async function getBar() {
    const res = await fetch("./api/read");
    const data = await res.json();

    if (res.ok) {
      return data["bar_card"];
    } else {
      throw new Error(data["bar_card"]);
    }
  }

  let promise = getBar();

  let drinkCategory = "Коктейли";
</script>

<svelte:head>
  <title>Барная карта</title>
  <meta name="description" content="Барная карта" />
</svelte:head>

<header class="main-header">
  <nav class="menu-navigation-container">
    <ul class="menu-navigation">
      <li>
        <button
          on:click={() => {
            drinkCategory = "Вино";
          }}
          class="button-nav">Вино</button
        >
      </li>
      <li><button class="button-nav">Виски</button></li>
      <li><button class="button-nav">Водка</button></li>
      <li><button class="button-nav">Шампанское</button></li>
      <li><button class="button-nav">Текила</button></li>
      <li><button class="button-nav">Ликеры</button></li>
      <li>
        <button
          on:click={() => {
            drinkCategory = "Коктейли";
          }}
          class="button-nav">Коктейли</button
        >
      </li>
      <li><button class="button-nav">Вермут</button></li>
      <li><button class="button-nav">Пивные напитки</button></li>
      <li><button class="button-nav">Коньяк</button></li>
      <li><button class="button-nav">Джин</button></li>
    </ul>
  </nav>
</header>

<main>
  {#await promise}
    &#8203;
  {:then bar}
    <h1 class="page-title">{drinkCategory}</h1>

    <section class="menu-items">
      <ul class="menu-items-list">
        {#each bar as drink (drink["Code_Drink"])}
          {#if drink["Kind_Drink"] === drinkCategory}
            <Item
              itemName={drink["Name_Drink"]}
              itemImage={images[drink["Code_Drink"] - 1]}
              itemPrice={drink["Price"]}
            />
          {/if}
        {/each}
      </ul>

      <div class="flex-buttons">
        <a class="button button-checkout" href="/orders">Оформить заказ</a>
        <a class="button button-back" href="/">На главную</a>
      </div>
    </section>
  {/await}
</main>

<style>
  .menu-navigation {
    padding: 0;
    margin: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    background-color: #f0f0f0;
  }

  .menu-navigation button {
    border: 2px solid #f0f0f0;
  }

  .menu-items-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .button-back {
    width: 156px;
    background-color: #ffe7c6;
  }

  .button-checkout {
    width: 156px;
    background-color: #84ff84;
  }

  .menu-items .button-back {
    margin-left: 10px;
  }

  .flex-buttons {
    display: flex;
    justify-content: end;
    margin-right: 40px;
  }
</style>
