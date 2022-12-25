<script>
  import OrderLine from "../OrderLine.svelte";
  import { orders, fullPrice } from "../stores/modalStore";

  async function getOrders() {
    const res = await fetch("./api/read");
    const data = await res.json();

    if (res.ok) {
      return data["order"];
    } else {
      throw new Error(data["order"]);
    }
  }

  let promise = getOrders();

  let menuArray = [
    "Рамен с говядиной, Сангрия",
    "Бигфиш, Голубая лагуна",
    "Лакса, Текила санрайз",
    "Дзосуй, Дерби",
    "Ассорти от шефа, Matsu, El Picaro",
  ];

  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "." +
    String(date.getMonth() + 1).padStart(2, "0") +
    "." +
    date.getFullYear();
</script>

<svelte:head>
  <title>Заказы</title>
  <meta name="description" content="Заказы" />
</svelte:head>

<main class="container3">
  <section class="order">
    <div class="for-order-info">
      <p class="p-number">Номер заказа</p>
      <p class="p-date">Дата</p>
      <p class="p-order">Заказ</p>
      <p class="p-price">Стоимость</p>
    </div>

    <ul class="order-list">
      <OrderLine
        orderNumber="19547"
        orderDate={output}
        orderMenu={$orders.join(", ")}
        orderPrice={$fullPrice}
        newOrder={true}
      />

      {#await promise}
        &#8203;
      {:then orders}
        {#each orders as order}
          <OrderLine
            orderNumber={order["Code_Order"]}
            orderDate={`${order["Data"].slice(8, 10)}.${order["Data"].slice(
              5,
              7
            )}.${order["Data"].slice(0, 4)}`}
            orderMenu={menuArray[order["Code_Order"] - 19542]}
            orderPrice={order["Price"]}
          />
        {/each}
      {/await}
    </ul>

    <div class="for-button-back-order">
      <a class="button button-back" href="/">На главную</a>
    </div>
  </section>
</main>

<style>
  .container3 {
    width: 750px;
    margin: 0 auto;
    padding: 0;
  }

  .order-list {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-direction: column;
  }

  .for-order-info {
    display: flex;
    justify-content: flex-start;
  }

  .for-order-info p {
    height: 20px;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 10px;
  }

  .p-number {
    width: 100px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .p-date {
    width: 66px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .p-order {
    width: 300px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .p-price {
    width: 100px;
    padding-left: 4px;
    margin-right: 10px;
  }

  .for-button-back-order {
    width: 750px;
    display: flex;
    justify-content: center;
  }
</style>
