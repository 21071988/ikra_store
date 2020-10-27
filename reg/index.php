<?php require($_SERVER["DOCUMENT_ROOT"]."/header.php");?>
  <div class="reg__wrapper">
    <div class="reg__window">
      <div class="reg__window__menu">
        <a  class="form__type">Регистрация</a>
        <hr>
        <a  class="form__type">вход</a>
      </div>
      <div class="reg__widnow__form">
        <form action="" id="reg__form" class='reg__form order__wrapper'>
          <label for="reg__login">email</label>
          <input type="text" name='reg__login'>

          <label for="reg__pswrd">Пароль</label>
          <input type="password" name='reg__pswrd'>

          <button>начать</button>
        </form>

        <form action="" id="auth__form" class='reg__form order__wrapper'>
          <label for="auth__login">email</label>
          <input type="text" name='auth__login'>

          <label for="auth__pswrd">Пароль</label>
          <input type="password" name='auth__pswrd'>

          <button>войти</button>
        </form>
      </div>
    </div>
  </div>


<?php require($_SERVER["DOCUMENT_ROOT"]."/footer.php");?>