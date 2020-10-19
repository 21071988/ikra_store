<?php require($_SERVER["DOCUMENT_ROOT"]."/header.php");?>
<div class="wrapper__catalog">
  <div class="left__part">

  </div>
  <div class="right__part">
    <h1>Корзина</h1>
    <div class="catalog__pages">
        
        <div class="catalog__item">
            <div class='img__wrap'>
              <img src="/images/catalog/1.jpg" alt="">
              <div class="sale__sign">25%</div>
            </div>
            <p>Название товара номер один</p>
            <span data-price='50' class='old__price'>12&nbsp;384Р</span>
            <span data-price='50' class='sale__price'>9&nbsp;185Р</span>
            <br>
            <svg class='delete__item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><defs><style>.minus{fill:none;stroke:#13100D;stroke-miterlimit:10;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><circle class="minus" cx="22" cy="22" r="21.5"/><line class="minus" x1="5.79" y1="22" x2="37.51" y2="22"/></g></g></svg>
        </div>

        <div class="catalog__item">
          <div class='img__wrap'>
            <img src="/images/catalog/1.jpg" alt="">
          </div>
          <p>Название товара номер один</p>
          <span data-price='100'>&nbsp;100Р</span>
          <br>
          <svg class='delete__item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><defs><style>.minus{fill:none;stroke:#13100D;stroke-miterlimit:10;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><circle class="minus" cx="22" cy="22" r="21.5"/><line class="minus" x1="5.79" y1="22" x2="37.51" y2="22"/></g></g></svg>
        </div>

        <div class="catalog__item">
          <div class='img__wrap'>
            <img src="/images/catalog/2.jpg" alt="">
          </div>
          <p>Название товара номер один</p>
          <span data-price='200'>&nbsp;200Р</span>
          <br>
          <svg class='delete__item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><defs><style>.minus{fill:none;stroke:#13100D;stroke-miterlimit:10;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><circle class="minus" cx="22" cy="22" r="21.5"/><line class="minus" x1="5.79" y1="22" x2="37.51" y2="22"/></g></g></svg>
        </div>

        <div class="catalog__item">
          <div class='img__wrap'>
            <img src="/images/catalog/3.jpg" alt="">
          </div>
          <p>Название товара номер один</p>
          <span data-price='300'>&nbsp;300Р</span>
          <br>
          <svg class='delete__item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><defs><style>.minus{fill:none;stroke:#13100D;stroke-miterlimit:10;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><circle class="minus" cx="22" cy="22" r="21.5"/><line class="minus" x1="5.79" y1="22" x2="37.51" y2="22"/></g></g></svg>
        </div>

    </div>
    <div class="basket__total">
      <span>Итого:&nbsp;</span><span data-currentsum= '1000' id='currentSum'>1&nbsp;000Р</span> 
    </div> 

    <div class="promocode">
      <form action="">
        <div class='promo__div'>
          <input type="text" name='promocodeValue' id='promocodeValue' >
          <label for="promocodeValue">У вас есть промокод? Можете ввести его сюда</label>
        </div>
        <button id='insert__promocode' type='submit'>
          ввести промокод
        </button>
      </form>
    </div>
    <div class='button__bottom'>
      <div class="some"><button>Продолжить</button></div>
      <div class="bottom__line"></div>
    </div>
    
  </div>
  
</div>




<?php require($_SERVER["DOCUMENT_ROOT"]."/footer.php");?>








