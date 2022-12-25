<script>
  import { isModalOpen, userId } from "./stores/modalStore.js";
  import { onMount } from "svelte";

  let data = [];
  let login;
  let password;
  let wrongPass = "";

  onMount(async () => {
    const res = await fetch("./api/read");

    data = await res.json();
  });

  function closeModal() {
    $isModalOpen = false;
  }

  function auth() {
    for (const user of data["user"]) {
      if (user["Email"] === login && user["Password"] === password) {
        $userId = user["Code_User"];
        closeModal();
      } else {
        wrongPass = "Неверный ввод!";
      }
    }
  }
</script>

<section class="modal modal-login">
  <h2>Ресторан "Полет ласточки"</h2>
  <p class="modal-description">Авторизация</p>
  <form class="login-form">
    <p>
      <label class="visually-hidden" for="user-login">Логин</label>
      <input
        bind:value={login}
        class="login-icon-user"
        id="user-login"
        type="text"
        name="login"
      />
    </p>
    <p>
      <label class="visually-hidden" for="user-password">Пароль</label>
      <input
        bind:value={password}
        class="login-icon-password"
        id="user-password"
        type="password"
        name="password"
      />
    </p>
    <p class="wrong-password">{wrongPass}</p>
    <button class="button button-login" on:click={auth}>Войти</button>

    <a class="button button-reg" href="/registration">Регистрация</a>
    <a class="button button-restore" href="/restore">Не помню пароль</a>
  </form>
</section>

<style>
  .modal {
    position: fixed;

    color: #000000;

    background-color: #9dd9d2;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.7);
  }

  .modal-login {
    top: 105px;
    left: 46%;

    width: 400px;
    margin-left: -230px;
    padding: 50px 80px;
  }

  .modal-login h2 {
    text-align: center;
    margin: 0;
    margin-bottom: 50px;

    font-size: 30px;
    line-height: 32px;
  }

  .modal-description {
    text-align: center;
    margin: 0;
    margin-bottom: 50px;
  }

  .login-form p {
    margin: 0;
    margin-bottom: 10px;
  }

  .login-form input[type="text"],
  .login-form input[type="password"] {
    margin-left: 60px;
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

  .login-form input[type="password"] {
    margin-left: 53px;
  }

  .button-login {
    margin-top: 30px;
    margin-bottom: 5px;
    background-color: #84ff84;
  }

  .button-login:hover {
    cursor: pointer;
  }

  .button-reg {
    width: 136px;
    margin-top: 30px;
    margin-bottom: 5px;
    background-color: #84ff84;
  }

  .button-restore {
    margin-bottom: 0;
    width: 243px;
    background-color: #ff8484;
  }

  .wrong-password {
    color: #a54949;
    text-align: center;
  }
</style>
