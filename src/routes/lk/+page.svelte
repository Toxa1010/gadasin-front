<script>
  import { userId } from "../stores/modalStore";
  import { onMount } from "svelte";

  let data = [];

  let surname = "";
  let name = "";
  let telNumber = "";
  let email = "";
  let birthdate = "";
  let password = "";
  let discount = "25%";

  let isDisabled = true;

  onMount(async () => {
    const res = await fetch("./api/read");

    data = await res.json();

    surname = data["user"][$userId - 1]["Surname"];
    name = data["user"][$userId - 1]["Name"];
    telNumber = data["user"][$userId - 1]["Number_Phone"];
    email = data["user"][$userId - 1]["Email"];
    birthdate = data["user"][$userId - 1]["Birthday"].slice(0, 10);
    password = data["user"][$userId - 1]["Password"];
  });
</script>

<svelte:head>
  <title>Личный кабинет</title>
  <meta name="description" content="Личный кабинет" />
</svelte:head>

<main class="container2">
  <section class="reg">
    <h2>Личный кабинет</h2>
    <p class="reg-description">
      Статус прграммы лояльности: огромное спасибо (наивысший)
    </p>
    <form class="reg-form">
      <p>
        <label class="visually-hidden" for="user-lastname">Фамилия</label>
        <input
          bind:value={surname}
          id="user-lastname"
          type="text"
          name="lastname"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-name">Имя</label>
        <input
          bind:value={name}
          id="user-name"
          type="text"
          name="name"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-number">Номер телефона</label>
        <input
          bind:value={telNumber}
          id="user-number"
          type="tel"
          name="number"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-email">Электронная почта</label
        >
        <input
          bind:value={email}
          class="input"
          id="user-email"
          type="text"
          name="email"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-birthdate">Дата рождения</label
        >
        <input
          bind:value={birthdate}
          id="user-birthdate"
          type="date"
          name="birthdate"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-password">Пароль</label>
        <input
          bind:value={password}
          id="user-password"
          type="password"
          name="password"
          disabled={isDisabled}
        />
      </p>
      <p>
        <label class="visually-hidden" for="user-password">Скидка</label>
        <input
          bind:value={discount}
          id="user-discount"
          type="text"
          name="text"
          disabled={true}
        />
      </p>
    </form>
    <div class="flex-buttons">
      {#if isDisabled}
        <button
          on:click={() => {
            isDisabled = false;
          }}
          class="button button-order"
          type="submit">Редактировать</button
        >
      {:else}
        <button
          on:click={() => {
            isDisabled = true;
          }}
          class="button button-order"
          type="submit">Сохранить</button
        >
      {/if}
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

  .reg-form {
    text-align: right;
  }

  .reg h2 {
    text-align: center;
  }

  .reg-description {
    text-align: center;
  }

  .reg-form input[type="text"],
  .reg-form input[type="password"],
  .reg-form input[type="date"],
  .reg-form input[type="tel"] {
    box-sizing: border-box;
    width: 200px;
    padding: 0;
    padding-right: 0;

    text-transform: none;
    font: inherit;
    color: #000000;

    background-color: #ffffff;
    border: 2px solid #7d8383;
  }

  .reg-form {
    margin-right: 347px;
  }

  .button-order {
    width: 220px;
    background-color: #84ff84;
  }

  input:disabled {
    cursor: default;
    opacity: 0.8;
  }
</style>
