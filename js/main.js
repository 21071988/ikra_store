$(document).ready(function(){
    // main page slider
        $('.most__popular__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });

      $('.mprm').on('click', function() {
        $('.most__popular__slider').slick('slickNext');
      });
      $('.mplm').on('click', function() {
        $('.most__popular__slider').slick('slickPrev');
      });


    //   slider item card interesting
        $('.interesting__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        }); 
    
      $('.mpri').on('click', function() {
        $('.interesting__slider').slick('slickNext');
      });
      $('.mpli').on('click', function() {
        $('.interesting__slider').slick('slickPrev');
      });


      //   slider item card you checked
 
        $('.earlier__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });

    
      $('.mpre').on('click', function() {
        $('.earlier__slider').slick('slickNext');
      });
      $('.mple').on('click', function() {
        $('.earlier__slider').slick('slickPrev');
      });

      //маленький двойной слайдер на главной
      $('.double__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
    
    $('.arml').on('click', function() {
      $('.double__slider').slick('slickNext');
    });
    $('.armr').on('click', function() {
      $('.double__slider').slick('slickPrev');
    });



  $('.mpre').on('click', function() {
    $('.earlier__slider').slick('slickNext');
  });
  $('.mple').on('click', function() {
    $('.earlier__slider').slick('slickPrev');
  });


});

document.querySelectorAll('.js-price').forEach(node => {
        node.textContent = new Intl.NumberFormat('ru-RU', {
          currency: 'rub',
          style: 'currency'
        }).format(node.textContent)
      })


let promoValue = document.getElementById('promocodeValue');
let promoBtn = document.getElementById('insert__promocode');

// promoValue.addEventListener('keydown', showBtn);
// function showBtn(){
//     if(promoValue.value.length>=5){
//         promoBtn.style.opacity = '1';
//     }else{
//         promoBtn.style.opacity = '0';
//     }
// }

// отрисовка линии у любой кнопки внизу страницы
// window.onload = function(){

//     const btnBottom = document.querySelectorAll('.button__bottom button');
//     const line = document.querySelector('.button__bottom div');
//     console.log(btnBottom.clientWidth);
//     let lineWidth = btnBottom.clientWidth;
//     console.log(lineWidth * 0.7 +'px');
//     line.style.width = lineWidth * 0.7 +'px';

//     btnBottom.addEventListener('mouseover', fullLine);
//     btnBottom.addEventListener('mouseleave', notFullLine);
//     function fullLine(){
//         line.style.width = lineWidth+'px';
//     }
//     function notFullLine(){
//         line.style.width = lineWidth * 0.7 +'px';
//     }    
// }
// конец отрисовки линии


//выбор размера в карточке товара

let label = document.querySelectorAll('.size__choosing__label');
labelArray = Array.from(label);
for(let i = 0; i< labelArray.length; i++){
    labelArray[i].addEventListener('click',function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


//изменение количества добавляемых в корзину товаров

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let item__quantity = document.getElementById('item__quantity');
let item__quantity__input = document.getElementById('item__quantity__input');
let bQuantity = document.getElementById('bQuantity');

if(minus != null){
  minus.addEventListener('click',minusOne);
}
if(plus != null){
  plus.addEventListener('click',plusOne);
}


function minusOne(){
    let iq = Number(item__quantity.innerText);
    if(iq>1){
      item__quantity.innerText = iq-1;  
      item__quantity__input.value = item__quantity.innerText;
    } 
};
function plusOne(){
        let iq = Number(item__quantity.innerText);
        item__quantity.innerText = iq+1;
        item__quantity__input.value = item__quantity.innerText;
        // console.log(item__quantity__input.value);
};


//добавление товаров в корзину
let toBasket = document.getElementById('to__basket');
if(toBasket !=null){
  toBasket.addEventListener('click',addToBasket);
}

function addToBasket(e){
    // console.log(bQuantity.innerText);
    bQuantity.innerText = Number(bQuantity.innerText)+1;
    


    e.preventDefault();
}


//удаление непонравившихся товаров в корзине

let itemDel = document.querySelectorAll('.delete__item');



itemToDelete = Array.from(itemDel);
for(let i = 0; i< itemToDelete.length; i++){
  itemToDelete[i].addEventListener('click',function(){
    
    let yourSum = document.getElementById('currentSum');
    let needToMinus = Number(itemToDelete[i].parentNode.childNodes[5].dataset.price);
    itemToDelete[i].parentNode.remove(); 
    
    let currentSum = Number(document.getElementById('currentSum').dataset.currentsum);
    let currentSumValue = document.getElementById('currentSum');
    // console.log(currentSum);
    // console.log(needToMinus);
    currentSum = currentSum - needToMinus;
    // console.log(currentSum);
    currentSumValue.setAttribute('data-currentsum', currentSum);
    // console.log(currentSumValue.dataset.currentsum);
    yourSum.innerText = currentSum + ' Р';

  });
}

//info block
let tabs = document.querySelectorAll('.nav-link');
let texts = document.querySelectorAll('.info__text p');

tabsArray = Array.from(tabs);
textsArray = Array.from(texts);
for(let i = 0; i< tabsArray.length; i++){
  tabsArray[i].addEventListener('click',function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
     
      for(let j = 0; j< textsArray.length; j++){
        if (j == i){
          textsArray[j].style.opacity = '1';
        }else{
          textsArray[j].style.opacity = '0';
        }
      }
      
      
      console.log(this.className);
  });
}












