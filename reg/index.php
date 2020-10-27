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
          <input type="text" name='reg__login' id='lk__prop__email'>
          <p id='error__validation'>Введите корректный email</p>

          <label for="reg__pswrd">Пароль</label>
          <input type="password" name='reg__pswrd'>
          <p id='error__validation_pas'>Введите больше 4 символов</p>

          <button id='reg__btn'>начать</button>
        </form>

        <form action="" id="auth__form" class='reg__form order__wrapper'>
          <label for="auth__login">email</label>
          <input type="text" name='auth__login' id='lk__prop__email'>
          <p class='auth__error__validation'>Введите правильный логин</p>

          <label for="auth__pswrd">Пароль</label>
          <input type="password" name='auth__pswrd'>
          <p class='auth__error__validation'>Введите правильный пароль</p>
          <button>войти</button>
        </form>
      </div>
    </div>
  </div>


<?php require($_SERVER["DOCUMENT_ROOT"]."/footer.php");?>