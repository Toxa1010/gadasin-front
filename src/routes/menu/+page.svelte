<script>
  import Item from "../Item.svelte";

  import img1 from "$lib/images/1.png";
  import img2 from "$lib/images/2.png";
  import img3 from "$lib/images/3.png";
  import img4 from "$lib/images/4.png";
  import img5 from "$lib/images/5.png";
  import img17 from "$lib/images/17.jpg";
  import img18 from "$lib/images/18.jpg";
  import img19 from "$lib/images/19.jpg";
  import img20 from "$lib/images/20.jpg";
  import img21 from "$lib/images/21.jpg";

  let images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  async function getMenu() {
    const res = await fetch("./api/read");
    const data = await res.json();

    if (res.ok) {
      return data["menu"];
    } else {
      throw new Error(data["menu"]);
    }
  }

  let promise = getMenu();
  let foodCategory = "Роллы";
</script>

<svelte:head>
  <title>Меню</title>
  <meta name="description" content="Меню" />
</svelte:head>

<header class="main-header">
  <nav class="menu-navigation-container">
    <ul class="menu-navigation">
      <li><button class="button-nav">Плато морепродуктов</button></li>
      <li><button class="button-nav">Устрицы</button></li>
      <li>
        <button
          on:click={() => {
            foodCategory = "Роллы";
          }}
          class="button-nav">Роллы</button
        >
      </li>
      <li>
        <button
          on:click={() => {
            foodCategory = "Супы";
          }}
          class="button-nav">Супы</button
        >
      </li>
      <li><button class="button-nav">Салаты и закуски</button></li>
      <li><button class="button-nav">Фирменное тако</button></li>
      <li><button class="button-nav">Поке</button></li>
      <li><button class="button-nav">Блюда на воке</button></li>
      <li><button class="button-nav">Детское меню</button></li>
      <li><button class="button-nav">Десерты</button></li>
      <li><button class="button-nav">Безалкогольные напитки</button></li>
    </ul>
  </nav>
</header>

<main>
  {#await promise}
    &#8203;
  {:then food}
    <h1 class="page-title">{foodCategory}</h1>

    <section class="menu-items">
      <ul class="menu-items-list">
        {#each food as dish (dish["Code_Dish"])}
          {#if dish["Category_Dish"] === foodCategory}
            <Item
              itemName={dish["Name_Dish"]}
              itemImage={images[dish["Code_Dish"] - 1]}
              itemPrice={dish["Price"]}
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
