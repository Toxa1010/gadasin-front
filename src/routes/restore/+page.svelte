<script>
</script>

<svelte:head>
  <title>Восстановление пароля</title>
  <meta name="description" content="Восстановление пароля" />
</svelte:head>

<main class="container2">
  <section class="reg">
    <h2>Ресторан "Полёт ласточки"</h2>
    <p class="reg-description">Восстановление пароля</p>
    <form class="reg-form">
      <p>
        <label class="visually-hidden" for="user-lastname">Фамилия</label>
        <input id="user-lastname" type="text" name="lastname" />
      </p>
      <p>
        <label class="visually-hidden" for="user-name">Имя</label>
        <input id="user-name" type="text" name="name" />
      </p>
      <p>
        <label class="visually-hidden" for="user-number">Номер телефона</label>
        <input id="user-number" type="tel" name="number" />
      </p>
      <p>
        <label class="visually-hidden" for="user-email">Электронная почта</label
        >
        <input id="user-email" type="text" name="email" />
      </p>
      <p>
        <label class="visually-hidden" for="user-birthdate">Дата рождения</label
        >
        <input id="user-birthdate" type="date" name="birthdate" />
      </p>
      <p>
        <label class="visually-hidden" for="user-password">Новый пароль</label>
        <input id="user-password" type="password" name="password" />
      </p>
    </form>
    <button class="button button-reg2" type="submit">Восстановить</button>
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
</style>
