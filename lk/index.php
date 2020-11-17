<?php require($_SERVER["DOCUMENT_ROOT"]."/header.php");?>
  <div class="wrapper lk">
  <h1>Личный кабинет</h1>
    <div class="personal__data" >
    <form action="" id='lk__form'>
      <div>
        <p class="lk__prop">Фамилия</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='Иванова' name='lk__prop__lastname' >

        <p class="lk__prop">имя</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='' name='lk__prop__name'>

        <p class="lk__prop">телефон</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='' name='lk__prop__phone' id='lk__phone'>

        <p class="lk__prop">email</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='someemail@gmail.com' name='lk__prop__email' id='lk__prop__email'>
        <p id='error__validation'>Введите корректный email</p>
      </div>
      <div>
        <p class="lk__prop">размер вашей скидки</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='5%' name='lk__prop__sale'>

        <p class="lk__prop">до следующего уровня </p>
        <p class="lk__prop__amount">27 287Р</p>

        <p class="lk__prop">адрес доставки</p>
        <input accept="text/rtf,text/html,text/plain,application/pdf" value='Иванова' placeholder='заполните это поле' name='lk__prop__adress'>
      <br>
      <button id='submit__lk__form' type="submit">Обновить данные</button>
      <div id="answer__message"></div>
      </div>
    </div>
    </form>
    <div class="offers">
      <h2>Спецпредложения</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sint vitae excepturi adipisci est recusandae necessitatibus illo consectetur iure officia, ut culpa, ipsam veniam ducimus? Quod provident laborum exercitationem et ut totam voluptates dolore, ducimus asperiores inventore necessitatibus enim, culpa repellat! Nobis quis porro soluta blanditiis libero fuga veritatis dolorum?</p>
    </div>

      <div class="interesting__slider__full u__liked__full">
      <div class="liked">
        <h2>Вам понравились</h2>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.68 46" id='heart'><defs><style>.cls-hart{fill:#90d7d2;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><path class="cls-hart" d="M23.43,46C6.93,36.07-1.86,21.32.33,11.56,1.64,5.72,7.47-.91,13.78.19c4.41.76,8.2,4.9,9.89,10.64Z"/><path class="cls-hart" d="M23.25,45.93C39.75,36,48.54,21.25,46.35,11.49,45,5.65,39.22-1,32.9.12,28.5.88,24.7,5,23,10.76Z"/></g></g></svg>
        </div>
            <svg class='mpl mpli heart__arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>

            <div class="interesting__slider">
            <a href="/catalog/item.php">
                <div class="catalog__item">
                  <div class='img__wrap'>
                    <img src="/images/catalog/1.jpg" alt="">
                  </div>
                  <p>Название товара номер один</p>
                  <span class='sale__price'>9&nbsp;185Р</span>
                </div>
                </a>

                <a href="/catalog/item.php">
                <div class="catalog__item">
                  <div class='img__wrap'>
                    <img src="/images/catalog/1.jpg" alt="">
                  </div>
                  <p>Название товара номер один</p>
                  <span class='sale__price'>9&nbsp;185Р</span>
                </div>
                </a>

                <a href="/catalog/item.php">
                <div class="catalog__item">
                  <div class='img__wrap'>
                    <img src="/images/catalog/1.jpg" alt="">
                  </div>
                  <p>Название товара номер один</p>
                  <span class='sale__price'>9&nbsp;185Р</span>
                </div>
                </a>

                <a href="/catalog/item.php">
                <div class="catalog__item">
                  <div class='img__wrap'>
                    <img src="/images/catalog/1.jpg" alt="">
                  </div>
                  <p>Название товара номер один</p>
                  <span class='sale__price'>9&nbsp;185Р</span>
                </div>
                </a>

                <a href="/catalog/item.php">
                <div class="catalog__item">
                  <div class='img__wrap'>
                    <img src="/images/catalog/1.jpg" alt="">
                  </div>
                  <p>Название товара номер один</p>
                  <span class='sale__price'>9&nbsp;185Р</span>
                </div>
                </a>    
              </div>    
              <svg class='mpr mpri heart__arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>
          </div>

      <div class="earlier__slider__full orders__history__full">
              <h2>история заказов</h2>
            <svg class='mpl mple' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>

            <div class="earlier__slider">
                  <a href="/catalog/item.php">
                    <div class="catalog__item">
                      <div class='img__wrap'>
                        <img src="/images/catalog/1.jpg" alt="">
                      </div>
                      <p>Название товара номер один</p>
                      <span class='sale__price'>9&nbsp;185Р</span>
                    </div>
                  </a>

                  <a href="/catalog/item.php">
                    <div class="catalog__item">
                      <div class='img__wrap'>
                        <img src="/images/catalog/1.jpg" alt="">
                      </div>
                      <p>Название товара номер один</p>
                      <span class='sale__price'>9&nbsp;185Р</span>
                    </div>
                  </a>

                  <a href="/catalog/item.php">
                    <div class="catalog__item">
                      <div class='img__wrap'>
                        <img src="/images/catalog/1.jpg" alt="">
                      </div>
                      <p>Название товара номер один</p>
                      <span class='sale__price'>9&nbsp;185Р</span>
                    </div>
                  </a>

                  <a href="/catalog/item.php">
                    <div class="catalog__item">
                      <div class='img__wrap'>
                        <img src="/images/catalog/1.jpg" alt="">
                      </div>
                      <p>Название товара номер один</p>
                      <span class='sale__price'>9&nbsp;185Р</span>
                    </div>
                  </a>

                  <a href="/catalog/item.php">
                    <div class="catalog__item">
                      <div class='img__wrap'>
                        <img src="/images/catalog/1.jpg" alt="">
                      </div>
                      <p>Название товара номер один</p>
                      <span class='sale__price'>9&nbsp;185Р</span>
                    </div>
                    </a>
              </div>
              
              <svg class='mpr mpre' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>
          </div>
      </div>
</div>


<?php require($_SERVER["DOCUMENT_ROOT"]."/footer.php");?>








