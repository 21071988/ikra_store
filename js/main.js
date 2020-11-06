$(document).ready(function(){
    // main page slider
        $('.most__popular__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              } 
            ]
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

//  brands slider
 $('.brands__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows:2,
            arrows:false
        });

      
      $('.bar').on('click', function() {
        $('.brands__slider').slick('slickNext');
      });
      $('.bal').on('click', function() {
        $('.brands__slider').slick('slickPrev');
      }); 
      

      // order check slider

      $('.checking__order').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      });


      $('.oar').on('click', function() {
      $('.checking__order').slick('slickNext');
      });

      $('.oal').on('click', function() {
      $('.checking__order').slick('slickPrev');
      });
      
      $('#submit__lk__form').click(function(){
        $('#submit__lk__form').text("Данные обновлены");
        $.post(
              '/post.php', 
              $("#lk__form").serialize(), // отправляемые данные          
          );
          return false;
        });

        $('#showMore').click(function(){
          const page = $('#showMore').data('page');
          const url = '/ajax/items.php?page='+page;
          $.ajax({
            url: url,
          }).then(function(result){
            $('#showMore').remove();
            $('.catalog__pages').append(result);
            // $('.catalog__pages').append('#showMore');         
          })
        });


      });


      



document.querySelectorAll('.js-price').forEach(node => {
        node.textContent = new Intl.NumberFormat('ru-RU', {
          currency: 'rub',
          style: 'currency'
        }).format(node.textContent)
      })


// Появление кнопки "ввести промокод"

let promoValue = document.getElementById('promocodeValue');
let promoBtn = document.getElementById('insert__promocode');

if(promoValue !=null){
  promoValue.addEventListener('keydown', showBtn);
function showBtn(){
    if(promoValue.value.length>=5){
        promoBtn.style.opacity = '1';
    }else{
        promoBtn.style.opacity = '0';
    }
}
}


// отрисовка линии у любой кнопки внизу страницы

    




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

//choosing size in catalog
let labelC = document.querySelectorAll('.possibly__active');
let catalogShowBtn = document.getElementById('show__items__button');
labelCArray = Array.from(labelC);
for(let i = 0; i< labelCArray.length; i++){
  labelCArray[i].addEventListener('click',function(){
        var currentС = document.getElementsByClassName("active");
        this.className += " active";
        catalogShowBtn.style.opacity = '1';


    });
}


//изменение количества добавляемых в корзину товаров

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let item__quantity = document.getElementById('item__quantity');
let item__quantity__input = document.getElementById('item__quantity__input');

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

    currentSum = currentSum - needToMinus;
    currentSumValue.setAttribute('data-currentsum', currentSum);
    yourSum.innerText = currentSum + ' Р';

  });
}

//reg block
let regAr = document.querySelectorAll('.reg__window__menu a');
let regFormAr = document.querySelectorAll('.reg__widnow__form form');

reg = Array.from(regAr);
regForm = Array.from(regFormAr);
for(let i = 0; i< regAr.length; i++){
  regAr[i].addEventListener('click',function(){
      for(let j = 0; j< regForm.length; j++){
        if (j == i){
          regForm[j].style.opacity = '1';
          setTimeout(
            ()=>regForm[j].style.display = 'flex'
          ,500);
        }else{
          regForm[j].style.opacity = '0';
          setTimeout(
            ()=>regForm[j].style.display = 'none'
          ,500);
        }
      }
  });
}

//info block
let tabs = document.querySelectorAll('.nav-link');
let textsDiv = document.querySelectorAll('.info');
let texts = document.querySelectorAll('.info__text p');
tabsArray = Array.from(tabs);
textsArray = Array.from(texts);
for(let i = 0; i< tabsArray.length; i++){
  let textsHeight = textsArray[3].clientHeight;
  console.log(textsHeight);
  textsDiv[0].style.height = textsHeight +'px';
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
  });
}

// locations block
let cityN = document.querySelectorAll('.cities a');
let cityA = document.querySelectorAll('.map');

cityName = Array.from(cityN);
city = Array.from(cityA);
for(let i = 0; i< cityName.length; i++){
  cityName[i].addEventListener('click',function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
     
      for(let j = 0; j< city.length; j++){
        if (j == i){
          city[j].style.opacity = '1';
        }else{
          city[j].style.opacity = '0';
        }
      }
  });
}

//order payment method block

let orderTabsAr = document.querySelectorAll('.delivery__type__menu a');
let orderBlockAr = document.querySelectorAll('.delivery__type__data');

orderTabs = Array.from(orderTabsAr);
orderBlock = Array.from(orderBlockAr);

for(let i = 0; i< orderTabs.length; i++){
  orderTabs[i].addEventListener('click',function(){
      var currentOrder = document.getElementsByClassName("active");
      currentOrder[0].className = currentOrder[0].className.replace("active", "");
      this.className += " active";
     
      for(let j = 0; j< orderBlock.length; j++){
        if (j == i){
          orderBlock[j].style.opacity = '1';
          setTimeout(function(){
            orderBlock[j].style.display = 'flex';
          },500);
        }else{
          orderBlock[j].style.opacity = '0';
          setTimeout(function(){
            orderBlock[j].style.display = 'none';
          },500);
        }
      }
  });
}
//order label movement
let orderInputsAr = document.querySelectorAll('.order__wrapper input');
let orderInputs = Array.from(orderInputsAr);
for(let i = 0; i< orderInputs.length; i++){
  
  orderInputs[i].onfocus = function(){
    orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(0px)";
  }

  orderInputs[i].onblur = function(){
     if(!orderInputs[i].value){
        orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(22px)";
      }  else{
        orderInputs[i].classList.add('green__input');
      }
  }

  orderInputs[i].addEventListener('keydown',function(){
    if(!orderInputs[i].value){
      orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(22px)";
    }  else{
      orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(0px)";
    }
  })

  
  orderInputs[i].addEventListener('mouseover',function(){
    orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(0px)";
  });

  orderInputs[i].addEventListener('mouseleave',function(){
    if(!orderInputs[i].value){
      orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(22px)";
    }  else{
      orderInputs[i].classList.add('green__input');
    }
  });
}










window.onload = function(){
// changing color of item
let brotherColorAr = document.querySelectorAll('.color__trigger');
let brotherColor = Array.from(brotherColorAr);

const sizeChoosingDiv = document.getElementById('size__choosing');
const picsDiv = document.getElementById('item__imgs');
const itemNameDiv = document.getElementById('item__color');

let colorSize = {
     red:{
      size : ['XS','S'],
      img : ['1','2']
     },
     green:{
      size : ['S','M'],
      img : ['2','3']
     },

}
if(brotherColor){
  for(let i=0; i< brotherColor.length; i++){
    brotherColor[i].addEventListener('click', function(){
      colorKey = brotherColor[i].dataset.color;

      sizeChoosingDiv.innerHTML="";
      picsDiv.innerHTML="";
      itemNameDiv.innerHTML="";    

      itemNameDiv.innerHTML= `${colorKey}`;
      for(let j=0; j< colorSize[colorKey].size.length; j++){
        sizeChoosingDiv.innerHTML+=`<span>${colorSize[colorKey].size[j]}</span>`;    
      }
      for(let s=0; s< colorSize[colorKey].img.length; s++){
        picsDiv.innerHTML+=`<a data-fancybox="gallery" href="/images/catalog/1.jpg"><img src="/images/catalog/${colorSize[colorKey].img[s]}.jpg"></a>`;      
      } 
    });
  }
}


//search block appearance
let searchBtn = document.getElementById('search__icon');
let searchWindow = document.getElementById('search');
let searchWindowClosingBtn = document.getElementById('closing__search__button');

(searchBtn ? searchBtn.addEventListener('click', ()=> searchWindow.classList.add('top0') ) : 1);
(searchWindowClosingBtn ? searchWindowClosingBtn.addEventListener('click', ()=> searchWindow.classList.remove('top0') ) : 1);


//checking errors in order form

let orderBtn = document.getElementById('order__button');

let orderInputsReqAr = document.querySelectorAll('.required');
let orderInputsReq = Array.from(orderInputsReqAr);

let errorSignAr = document.querySelectorAll('.error__sign');
let errorSign = Array.from(errorSignAr);
if(orderBtn){
  orderBtn.addEventListener('click', function(e){
    for(let i=0;i<orderInputsReq.length;i++){
      if(!orderInputsReq[i].value){
        
        orderInputsReq[i].style.borderBottom = '1px solid #EA2C32';
        errorSign[i].style.opacity = '1';
        console.log(orderInputsReq[0].offsetTop + 100);
        window.scrollTo(0, orderInputsReq[0].offsetTop-80);
      }
      orderInputsReq[i].onblur = function(){
        if(orderInputsReq[i].value){
          orderInputsReq[i].style.borderBottom = '1px solid #13100D';
          orderInputsReq[i].style.display = 'none';
          console.log('done');
        }
      }
    }
    e.preventDefault();
  });
}






//email validation

let sbmBtn = document.getElementById('submit__lk__form');
const emailError = document.getElementById('error__validation');
if(sbmBtn){
  sbmBtn.addEventListener('click', function(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById('lk__prop__email');
        if(reg.test(address.value) == false) {
          emailError.style.opacity = '1';
          address.style.borderBottom = '1px solid #EA2C32';
           return false;
        }else{
          console.log('yeeee');
          }
});
}

//reg email validation

let regSbmBtn = document.getElementById('reg__btn');
const regEmailError = document.getElementById('error__validation');
if(regSbmBtn){
  regSbmBtn.addEventListener('click', function(e){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById('lk__prop__email');
        if(reg.test(address.value) == false) {
          regEmailError.style.opacity = '1';
          address.classList.remove('green__input');
          address.classList.add('red__input');
          e.preventDefault();
          return false;
        }else{
          console.log('yeeee');
          }
    
});
}


//input form lk styles
let lkFormInputsAr = document.querySelectorAll('#lk__form input');
let lkFormInputs = Array.from(lkFormInputsAr);

for(let i=0; i< lkFormInputs.length; i++){ 
  if(lkFormInputs[i].value){
    lkFormInputs[i].style.width = `${lkFormInputs[i].value.length*11}px`;
  }
  else{
    lkFormInputs[i].style.width = `70%`;
  }
  lkFormInputs[i].addEventListener('mouseover',function(){
    lkFormInputs[i].style.borderBottom = `1px solid black`;
  });
  
  lkFormInputs[i].addEventListener('mouseleave',function(){
    lkFormInputs[i].style.borderBottom = `none`;
  });
  
  lkFormInputs[i].addEventListener('onfocus',function(){
   lkFormInputs[i].style.borderBottom = `1px solid black`;  
  });
  
  lkFormInputs[i].addEventListener('click',function(){
    if(sbmBtn.innerText = "Данные обновлены"){
      sbmBtn.innerText = "Обновить данные";
    }
      lkFormInputs[i].style.borderBottom = `1px solid black`;        
  });
}


//phone mask
var element = document.getElementById('lk__phone');
if(element){
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
  
}


//catalog top menu turning on
let blockTriggerAr = document.querySelectorAll('.top__menu__links span');
let blockTrigger = Array.from(blockTriggerAr);

let blockAr = document.querySelectorAll('.its__block');
let block = Array.from(blockAr);

for(let i=0; i< blockTrigger.length; i++){
  blockTrigger[i].addEventListener('click',function(){
    if(block[i].classList.contains('rel')){
      block[i].classList.remove('rel');
      block[i].style.top = '1000px';  
    }else{
      block[i].classList.add('rel');
      block[i].style.top = '0'; 
    }
    
  })
}

//arrows animating heart
let arAr = document.querySelectorAll('.heart__arrow');
let ar = Array.from(arAr);
const heart = document.getElementById('heart')
for(let i=0; i< ar.length; i++){
  ar[i].addEventListener('click',function(){
    heart.classList.add('beating__heart');  
    setTimeout(function(){
      heart.classList.remove('beating__heart');  
    },600);
  })
}


//to Basket animation
const toBasketBtn = document.getElementById('to__basket');
if(toBasketBtn != null){
  toBasketBtn.addEventListener('click',function(){
  
    let bQuantity = document.getElementById('bQuantity');
    let itemQuantity = document.getElementById('item__quantity');
    let newAmount = parseInt(bQuantity.innerText) + parseInt(itemQuantity.innerText);
    bQuantity.innerText = newAmount;
    bQuantity.classList.add('bquantity__animation');
    setTimeout(function(){
      bQuantity.classList.remove('bquantity__animation');
    },1100);
    itemQuantity.innerText = 1;
    toBasketBtn.innerText = "товар в корзине";
    setTimeout(function(){
      toBasketBtn.innerText = "В корзину";
    },3000);
  })
}


//every link with bottom line animation
const btnBottomAr = document.querySelectorAll('.button__bottom .some');
    btnBottom = Array.from(btnBottomAr);
    
    for(let i = 0; i< btnBottom.length; i++){
      
      let line = btnBottom[i].nextSibling.nextSibling;
      
      
      let lineWidth = btnBottom[i].clientWidth;
      line.style.width = lineWidth * 0.7 +'px';

      btnBottom[i].addEventListener('mouseover', fullLine);
      btnBottom[i].addEventListener('mouseleave', notFullLine);
      function fullLine(){
          line.style.width = lineWidth+'px';
      }
      function notFullLine(){
          line.style.width = lineWidth * 0.7 +'px';
      }
    }
    

//brands directory work
  let actveSlideAr = document.querySelectorAll('.brands__slider .brand__name');
  let activeSlide = Array.from(actveSlideAr);

  let brandTopSignAr = document.querySelectorAll('.brands__slider .brand__top__sign');
  let brandTopSign = Array.from(brandTopSignAr);

  let brandBottomSignAr = document.querySelectorAll('.brands__slider .brand__description');
  let brandBottomSign = Array.from(brandBottomSignAr);

  const brandsWrapper = document.getElementById('brands__back');

  let brandArrowAr = document.getElementsByClassName('brand__arrow');
  let brandArrow = Array.from(brandArrowAr);

    for(let i = 0; i< activeSlide.length; i++){
        activeSlide[i].addEventListener('mouseover',function(){
          brandTopSign[i].classList.add('shown__text');
          brandBottomSign[i].classList.add('shown__text');
          let img1 = brandsWrapper.firstElementChild.src;
          let img2 = activeSlide[i].dataset.img;

          if(img1.indexOf(activeSlide[i].dataset.img) == -1){
              brandsWrapper.firstElementChild.classList.add('hide__text');
              setTimeout(function(){
                brandsWrapper.innerHTML = `<img src='${activeSlide[i].dataset.img}' class='show__nice__text'></img>`;
              },500);
          }
        });
          activeSlide[i].addEventListener('mouseleave',function(){
            brandTopSign[i].classList.remove('shown__text');
            brandBottomSign[i].classList.remove('shown__text');
          });
         
    }
    for(let j = 0; j<= brandArrow.length; j++){
      if(brandArrow!=''){
        brandArrow[j].addEventListener('click',function(){
          var current = document.getElementsByClassName('slick-active');
          var currentImage = current[0].childNodes[1].childNodes[0].childNodes[3].dataset.img;
          brandsWrapper.innerHTML = `<img src='${currentImage}' class='show__nice__text'></img>`;
        })
      }
    }
  }


