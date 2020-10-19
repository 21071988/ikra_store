<?php require($_SERVER["DOCUMENT_ROOT"]."/header.php");?>
<div class="order__wrapper">
  
  <form action="/sendorder.php" method='post'>

  <div class="order__data order__block">
    <h1>оформление заказа</h1>
    <h2>общие данные</h2>
    <label for="order__data__lastname">Фамилия</label>
    <input type="text" name='order__data__lastname'>
    
    <label for="order__data__name">имя</label>
    <input type="text" name='order__data__name'>

    <label for="order__data__phone">телефон</label>
    <input type="text" name='order__data__phone'>

    <label for="order__data__email">email</label>
    <input type="text" name='order__data__email'>
  </div>



  <div class="delivery__type order__block">
    <h2>Способ доставки</h2>
    <div class="delivery__type__menu">
      <a class='active'>Доставка</a>
      <a >Самовывоз</a>
    </div>
    <div class="delivery__data">
      <div class="delivery__delivery order__block delivery__type__data">
        <label for="order__data__lastname">Фамилия</label>
        <input type="text" name='order__data__lastname'>
        
        <label for="order__data__name">имя</label>
        <input type="text" name='order__data__name'>

        <label for="order__data__phone">телефон</label>
        <input type="text" name='order__data__phone'>

        <label for="order__data__email">email</label>
        <input type="text" name='order__data__email'>
      </div>
      <div class="delivery__pickup order__block delivery__type__data">
        <p class='order__block__bold'>
          вы можете примерить и купить
          понравившиеся вам вещи в магазине:
        </p>
        <a href="">
          <p>Ikra владивосток</p>
          <p>светланская 5,</p>
          <p>11.00 -  20.00</p>
          <p>8 (908) 997-19-03</p>
        </a>
      </div>
    </div>
  </div>
    <div class="payment__type order__block">
        <h2>способ оплаты</h2>
        <div>
          <input type='radio' name='payment__method' value='payment__method__online'>онлайн на сайте</input> 
        </div>
        <div>
          <input type='radio'id='paymentInShop' name='payment__method' value="payment__method__shop">при получении в магазине</input>
        </div>
    </div>

    <div class="checking__order__block">
      <h2>Проверяем заказ</h2>
      <div class="checking__order__wrapper">
      
      <svg class='oal' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>
        
        <div class="checking__order">
          <div class="catalog__item">
                <div class='img__wrap'>
                  <img src="/images/catalog/1.jpg" alt="">
                  <div class="sale__sign">25%</div>
                </div>
                <p>Название товара номер один</p>
                <span class='old__price'>12&nbsp;384Р</span>
                <span class='sale__price'>9&nbsp;185Р</span>
          </div>

          <div class="catalog__item">
                <div class='img__wrap'>
                  <img src="/images/catalog/1.jpg" alt="">
                  <div class="sale__sign">25%</div>
                </div>
                <p>Название товара номер один</p>
                <span class='old__price'>12&nbsp;384Р</span>
                <span class='sale__price'>9&nbsp;185Р</span>
          </div>

          <div class="catalog__item">
                <div class='img__wrap'>
                  <img src="/images/catalog/1.jpg" alt="">
                  <div class="sale__sign">25%</div>
                </div>
                <p>Название товара номер один</p>
                <span class='old__price'>12&nbsp;384Р</span>
                <span class='sale__price'>9&nbsp;185Р</span>
          </div>

          <div class="catalog__item">
                <div class='img__wrap'>
                  <img src="/images/catalog/1.jpg" alt="">
                  <div class="sale__sign">25%</div>
                </div>
                <p>Название товара номер один</p>
                <span class='old__price'>12&nbsp;384Р</span>
                <span class='sale__price'>9&nbsp;185Р</span>
          </div>
        </div>

        <svg class='oar' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.09 49.41"><defs><style>.cls-1{fill:none;stroke:#13100d;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><polyline class="cls-1" points="0.95 1.16 30.67 25.45 0.95 48.22"/></g></g></svg>
      </div>
    </div>

  </div>

  <button class='order__button'type='submit'>Оформить заказ</button>
  </form>
</div>
<?php require($_SERVER["DOCUMENT_ROOT"]."/footer.php");?>