<script>
  export let tableNumber;
  export let guestNumber;
</script>

<li class="booking-li-lock">
  <p>Стол №{tableNumber}<br />{guestNumber} Персоны<br />Занят</p>
  <button class="button batton-booking-lock" type="sabmit" disabled>
    <span class="inner-button">Б<br />р<br />о<br />н<br />ь</span>
  </button>
</li>

<style>
  .booking-li-lock p {
    padding-left: 5px;
    width: 100px;
    height: 75px;
    margin-right: 10px;
  }

  .booking-li-lock p {
    background-color: #ff8484;
  }

  .booking-li-lock {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-left: 75px;
    margin-right: 75px;
  }

  .batton-booking-lock {
    line-height: 18px;
    height: 100px;
    margin-bottom: 0;
    padding: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .batton-booking-lock {
    background-color: #ff8484;
  }

  .button:disabled {
    cursor: default;
    opacity: 0.5;
  }
</style>
