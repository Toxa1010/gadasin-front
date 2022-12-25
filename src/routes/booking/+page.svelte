<script>
  import BookedTable from "../BookedTable.svelte";

  async function getBooking() {
    const res = await fetch("./api/read");
    const data = await res.json();

    if (res.ok) {
      return data["booking"];
    } else {
      throw new Error(data["booking"]);
    }
  }

  let promise = getBooking();

  let tableClass1 = "booking-li-free";
  let tableClass2 = "booking-li-free";
  let tableClass3 = "booking-li-free";
  let tableClass4 = "booking-li-free";

  let tableStatus1 = "Свободен";
  let tableStatus2 = "Свободен";
  let tableStatus3 = "Свободен";
  let tableStatus4 = "Свободен";

  let buttonClass1 = "button batton-booking-free";
  let buttonClass2 = "button batton-booking-free";
  let buttonClass3 = "button batton-booking-free";
  let buttonClass4 = "button batton-booking-free";

  let disabled1 = false;
  let disabled2 = false;
  let disabled3 = false;
  let disabled4 = false;

  function tableToggle1() {
    tableClass1 = "booking-li-lock";
    tableStatus1 = "Занят";
    buttonClass1 = "button batton-booking-lock";
    disabled1 = true;
  }
  function tableToggle2() {
    tableClass2 = "booking-li-lock";
    tableStatus2 = "Занят";
    buttonClass2 = "button batton-booking-lock";
    disabled2 = true;
  }
  function tableToggle3() {
    tableClass3 = "booking-li-lock";
    tableStatus3 = "Занят";
    buttonClass3 = "button batton-booking-lock";
    disabled3 = true;
  }
  function tableToggle4() {
    tableClass4 = "booking-li-lock";
    tableStatus4 = "Занят";
    buttonClass4 = "button batton-booking-lock";
    disabled4 = true;
  }
</script>

<svelte:head>
  <title>Бронь стола</title>
  <meta name="description" content="Бронь стола" />
</svelte:head>

<main class="container2">
  <section class="booking">
    <ul class="booking-list">
      {#await promise}
        <li class="booking-li-free">
          <p>Стол №1<br />0 Персоны<br />Свободный</p>
          <button class="button batton-booking-free">
            <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
          </button>
        </li>

        <li class="booking-li-free">
          <p>Стол №2<br />0 Персоны<br />Свободный</p>
          <button class="button batton-booking-free">
            <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
          </button>
        </li>

        <li class="booking-li-free">
          <p>Стол №3<br />0 Персоны<br />Свободный</p>
          <button class="button batton-booking-free">
            <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
          </button>
        </li>

        <li class="booking-li-free">
          <p>Стол №4<br />0 Персоны<br />Свободный</p>
          <button class="button batton-booking-free">
            <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
          </button>
        </li>
      {:then booking}
        {#each booking as table (table["Code_Table"])}
          <BookedTable
            tableNumber={table["Code_Table"]}
            guestNumber={table["Guests"]}
          />
        {/each}
      {/await}

      <li class={tableClass1}>
        <p>Стол №5<br />8 Персоны<br />{tableStatus1}</p>
        <button
          on:click={tableToggle1}
          class={buttonClass1}
          disabled={disabled1}
        >
          <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
        </button>
      </li>

      <li class={tableClass2}>
        <p>Стол №6<br />4 Персоны<br />{tableStatus2}</p>
        <button
          on:click={tableToggle2}
          class={buttonClass2}
          disabled={disabled2}
        >
          <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
        </button>
      </li>

      <li class={tableClass3}>
        <p>Стол №7<br />6 Персоны<br />{tableStatus3}</p>
        <button
          on:click={tableToggle3}
          class={buttonClass3}
          disabled={disabled3}
        >
          <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
        </button>
      </li>

      <li class={tableClass4}>
        <p>Стол №8<br />6 Персоны<br />{tableStatus4}</p>
        <button
          on:click={tableToggle4}
          class={buttonClass4}
          disabled={disabled4}
        >
          <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
        </button>
      </li>
    </ul>
    <div class="for-button-back-booking">
      <a class="button button-back" href="/">На главную</a>
    </div>
  </section>
</main>

<style>
  .container2 {
    width: 900px;
    margin: 0 auto;
    padding: 0;
  }
  .booking-list {
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 50px;
  }

  .booking-li-free p,
  .booking-li-lock p {
    padding-left: 5px;
    width: 100px;
    height: 75px;
    margin-right: 10px;
  }

  .booking-li-free p {
    background-color: #83ffff;
  }

  .booking-li-lock p {
    background-color: #ff8484;
  }

  .booking-li-free,
  .booking-li-lock {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-left: 75px;
    margin-right: 75px;
  }

  .batton-booking-free,
  .batton-booking-lock {
    line-height: 18px;
    height: 100px;
    margin-bottom: 0;
    padding: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .batton-booking-free {
    background-color: #84ff84;
  }

  .batton-booking-lock {
    background-color: #ff8484;
  }

  .button.disabled,
  .button:disabled {
    cursor: default;
    opacity: 0.5;
  }

  .for-button-back-booking {
    width: 900px;
    display: flex;
    justify-content: center;
  }
</style>
