$(document).ready(function() {
	
	
	$('.js-add2cart').on('submit', function(){
		$.ajax({
	        url: '/catalog/',
	        type: "POST", 
	        dataType: "html", 
	        data: $(this).serialize(),  
	        success: function() { 
	        	//alert('ok');
	    	},
	    	error: function() { 
	            //alert('false');
	    	}
	 	});
	 	
	 	return false;
	});




    // main page slider
    setTimeout(function () {
        $('.most__popular__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  rows:1
                }
              } 
            ]
        });
	},500);
      $('.mprm').on('click', function() {
        $('.most__popular__slider').slick('slickNext');
      });
      $('.mplm').on('click', function() {
        $('.most__popular__slider').slick('slickPrev');
      });


    //   slider item card interesting
    setTimeout(function () {
        $('.interesting__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
          
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              } 
            ]
        }); 
    },500);
      $('.mpri').on('click', function() {
        $('.interesting__slider').slick('slickNext');
      });
      $('.mpli').on('click', function() {
        $('.interesting__slider').slick('slickPrev');
      });


      //   slider item card you checked
	  setTimeout(function () {
        $('.earlier__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              } 
            ]
        });
	},500);
    
      $('.mpre').on('click', function() {
        $('.earlier__slider').slick('slickNext');
      });
      $('.mple').on('click', function() {
        $('.earlier__slider').slick('slickPrev');
      });

      //маленький двойной слайдер на главной
setTimeout(function () {
      $('.double__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
    },500);
    
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
setTimeout(function () {
 $('.brands__slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows:2,
            arrows:false,
            responsive:[
              {
                breakpoint: 768,
                slidesToShow: 2,
                rows:1
              } 
            ]

        });
},500);
      
      $('.bar').on('click', function() {
        $('.brands__slider').slick('slickNext');
      });
      $('.bal').on('click', function() {
        $('.brands__slider').slick('slickPrev');
      }); 
      
      // order check slider
      setTimeout(function () {
		   $('.checking__order').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        responsive:[
          {
            breakpoint: 768,
            settings: "unslick"
          } 
        ]
      }); 
	},500);



      $('.oar').on('click', function() {
      $('.checking__order').slick('slickNext');
      });

      $('.oal').on('click', function() {
      $('.checking__order').slick('slickPrev');
      });
      
      $('#submit__lk__form').click(function(){
        $('#submit__lk__form').text("Данные обновлены");
        $.post(
              '/personal/', 
              $("#lk__form").serialize(), // отправляемые данные          
          );
          return false;
        });

        $(document).on('click', '#showMore', function(){
          const page = $('#showMore').data('page');
          const sectionid = $('#showMore').data('sectionid');
          const type = $('#showMore').data('type');
          const color = $('#showMore').data('color');
          const size = $('#showMore').data('size');
          const sort = $('#showMore').data('sort');
          const url = '/ajax/items.php?PAGEN_1='+page+'&SECTION_ID='+sectionid+'&type='+type+'&color='+color+'&size='+size+'&sort='+sort;
          $('#showMore').remove();
          $.ajax({
            url: url,
          }).then(function(result){
            
            $('.catalog__pages:last').after(result);      
          })
        });
        
          //item card mobile slider
          setTimeout(function () {
          $('.item__mobile__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true
        });
       },500);

      });


      
window.onload = function(){
function changeClass(id,className){
	(id.classList.contains(className) ? id.classList.remove(className) : id.classList.add(className));
}
//hiding show more button

/*
let c1 = Array.from(document.querySelectorAll('.c1'));	
let showMore = document.getElementById('showMore');
(c1.length>0 ? (c1.length<30 ? showMore.style.display = 'none' : 1 ): 1 )
*/


//hiding arrows
let orderSlider = Array.from(document.querySelectorAll('.checking__order__wrapper'));
let sliderArrows = Array.from(document.querySelectorAll('.checking__order__wrapper svg'));
orderSliderItems = Array.from(document.querySelectorAll('.checking__order__wrapper catalog__item'));
if(orderSlider.length>0){
	if(orderSliderItems<5){
	sliderArrows.forEach(arrow =>{
		arrow.style.display = 'none'
	})
}
}




//info block
let fullUrl =  Array.from(document.location.href.split('text='));
let infoUrl = fullUrl[1];
let tabs = document.querySelectorAll('.nav-link');
let textsDiv = document.querySelectorAll('.info');
let texts = document.querySelectorAll('.info__text p');
tabsArray = Array.from(tabs);
textsArray = Array.from(texts);
if(infoUrl=='delivery'){
			  tabsArray[0].classList.remove('active');
			  tabsArray[1].classList.add('active');
			  textsArray[0].style.opacity = '0';
			  textsArray[2].style.opacity = '0';
			  textsArray[1].style.opacity = '1';
}
if(infoUrl=='refund'){
			  tabsArray[0].classList.remove('active');
  			  tabsArray[1].classList.remove('active');
			  tabsArray[2].classList.add('active');
			   textsArray[0].style.opacity = '0';
			  textsArray[1].style.opacity = '0';
			  textsArray[2].style.opacity = '1';
}
if(textsArray.length>1){
	for(let i = 0; i< tabsArray.length; i++){
	  let textsHeight = textsArray[3].clientHeight;
	  textsDiv[0].style.height = textsHeight +'px';
	  tabsArray[i].addEventListener('click',function(){
		  
	      var current = document.getElementsByClassName("active");
	      current[0].className = current[0].className.replace("active", "");
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
}


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






//выбор размера в карточке товара
labelArray = Array.from(document.querySelectorAll('.size__choosing__label'));
for(let i = 0; i< labelArray.length; i++){
    labelArray[i].addEventListener('click',function(){
	    var chosen = '1';
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
//choosing size in catalog
let catalogShowBtn = document.getElementById('show__items__button__mobile');
let catalogShownBtnMobile = document.getElementById('show__items__button__mobile');
let labelCArray = Array.from(document.querySelectorAll('.possibly__active'));
for(let i = 0; i< labelCArray.length; i++){
  labelCArray[i].addEventListener('change',function(){
//         var currentС = document.getElementsByClassName("active");
        changeClass(this,'active__filter');
        catalogShowBtn.style.opacity = '1';
        (window.innerWidth < 768 ? catalogShownBtnMobile.style.opacity = '1': 1);


    });
}
	
 //hearts
let littleHeart = Array.from(document.querySelectorAll('.item-heart'));
let heartsFlow = Array.from(document.querySelectorAll('.cls-heart-2'));
for(let i=0;i<littleHeart.length;i++){
  littleHeart[i].addEventListener('click',(e)=>{
   changeClass(littleHeart[i],'black__Heart');
   changeClass(heartsFlow[1],'beating__heart__c');
   
   (littleHeart[i].classList.contains('header__heart') ? 1 : e.preventDefault());
   const http = new EasyHTTP;
   let heartId = littleHeart[i].parentNode.parentNode.parentNode.dataset.id;
   const url = 'http://ikra.slim.technology/ajax/like.php?id='+`${heartId}`;
    http.get(url);
  });
}

//изменение количества добавляемых в корзину товаров

let minusAr = document.querySelectorAll('.minus__btn');
let minus = Array.from(minusAr);
let plusAr = document.querySelectorAll('.plus');
let plus = Array.from(plusAr);
let yourSum = document.getElementById('currentSum');
if(yourSum){
	var currentSum = Number(yourSum.dataset.currentsum);
}

class EasyHTTP {
  async get(url, data) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
 }


	
if(minus.length>0){


	for(let i=0;i<minus.length;i++){
		  minus[i].addEventListener('click',()=>{
			  if(Number(minus[i].nextSibling.nextSibling.innerText)>1){
				  let current__item__number = Number(minus[i].nextSibling.nextSibling.innerText);
				  minus[i].nextSibling.nextSibling.innerText = current__item__number - 1;
				  minus[i].parentNode.childNodes[7].value =  minus[i].nextSibling.nextSibling.innerText;
				  
				  let needToMinus = Number(minus[i].parentNode.previousSibling.previousSibling.childNodes[5].dataset.price);
				  currentSum = currentSum - needToMinus;
				  yourSum.setAttribute('data-currentsum', currentSum);
				  yourSum.innerText = currentSum + ' Р';
				  
				  var minusId = minus[i].dataset.id;
				  var quant = minus[i].parentNode.childNodes[7].value;
				  const http = new EasyHTTP;
				  const url = 'http://ikra.slim.technology/ajax/countBasket.php?id='+`${minusId}`+'&q='+`${quant}`;
				  http.get(url);
				  
				  

			  }
			
		  });
		  
		  plus[i].addEventListener('click',()=>{
			  let current__item__number = Number(minus[i].nextSibling.nextSibling.innerText);
			  minus[i].nextSibling.nextSibling.innerText = current__item__number + 1;
			  minus[i].parentNode.childNodes[7].value =  minus[i].nextSibling.nextSibling.innerText;
			  
			  let needToMinus = Number(minus[i].parentNode.previousSibling.previousSibling.childNodes[5].dataset.price);
			  currentSum = currentSum +	 needToMinus;
			  yourSum.setAttribute('data-currentsum', currentSum);
			  yourSum.innerText = currentSum + ' Р';

			  var minusId = minus[i].dataset.id;
			  var quant = minus[i].parentNode.childNodes[7].value;
			  const http = new EasyHTTP;
				  const url = 'http://ikra.slim.technology/ajax/countBasket.php?id='+`${minusId}`+'&q='+`${quant}`;
				  http.get(url);
		  });
		  
		  
	}
}



  
  
  
//удаление непонравившихся товаров в корзине

let itemDel = document.querySelectorAll('.delete__item');
let itemToDelete = Array.from(itemDel);

for(let i = 0; i< itemToDelete.length; i++){
  itemToDelete[i].addEventListener('click',function(){
    let needToMinus = Number(itemToDelete[i].parentNode.childNodes[5].dataset.price) * Number(minus[i].parentNode.childNodes[7].value);
    itemToDelete[i].parentNode.remove();  
 
    currentSum = currentSum - needToMinus;
    yourSum.setAttribute('data-currentsum', currentSum);
    yourSum.innerText = currentSum + ' Р';
    
    
   				  var minusId = itemToDelete[i].dataset.id;
				  const http = new EasyHTTP;
				  const url = 'http://ikra.slim.technology/ajax/deleteBasket.php?id='+`${minusId}`;
				  http.get(url);
				
  });
				  
				 
}

//reg block
let regAr = document.querySelectorAll('.reg__window__menu a');
let regFormAr = document.querySelectorAll('.reg__widnow__form form');

reg = Array.from(regAr);
regForm = Array.from(regFormAr);
for(let i = 0; i< regAr.length; i++){
  regAr[i].addEventListener('click',function(){
	  var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
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



// locations block
cityName = Array.from(document.querySelectorAll('.cities a'));
city = Array.from(document.querySelectorAll('.map'));
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

//order label movement
let orderInputs = Array.from(document.querySelectorAll('.order__wrapper input'));

if(orderInputs.length>0){
	for(let i = 0; i< 10; i++){
		(orderInputs[i].value ?  orderInputs[i].previousSibling.previousSibling.style.transform = "translateY(0px)" : 1)
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
		
		  orderInputs[i].addEventListener('keyup',function(){
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
}






	
// 	show brands
	let showBrandsBtn = document.getElementById('show__more__brands');
	let brandsDiv = document.getElementById('hiding__brands');
	if(showBrandsBtn){
		showBrandsBtn.addEventListener('click', ()=>{
			brandsDiv.classList.add('show__hidden__brands')
			showBrandsBtn.style.display='none'
		})
	}


// subscribtion	
	
	let subscr = document.getElementById('subscribe');
	let subscrModal = document.getElementById('email__modal');
	const emailError = document.getElementById('error__validation');
	let subsrcBtn = document.getElementById('subscribe__meail__btn');
	let subscrClosingBtn = document.getElementById('email__closing__btn');
	subscr.addEventListener('click',()=>{
		subscrModal.classList.add('show__subscribe')
		setTimeout(()=>subscrModal.classList.remove('hide__subscribe'),1000)
	})
	
	 subscrClosingBtn.addEventListener('click',()=>{
			subscrModal.classList.add('hide__subscribe')		 
		 	setTimeout(()=>{
			 	subscrModal.classList.remove('show__subscribe')
			 	subscrModal.classList.remove('hide__subscribe')
			 	},1000)
	 		}
	 )
	 
	 if(subsrcBtn){
	 	subsrcBtn.addEventListener('click', function(e){
		    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		    var address = document.getElementById('lk__prop__email');
		        if(reg.test(address.value) == false) {
		          emailError.style.opacity = '1';
		          address.style.borderBottom = '1px solid #EA2C32';
				  e.preventDefault();
		        }else{
					1
		          }
		});
	 }
	
// liked hearts

likedHeart = Array.from(document.querySelectorAll('.liked__hearts'));
likedItem = Array.from(document.querySelectorAll('.liked__item'));
if(likedHeart.length>0){
	for(let i=0;i<likedHeart.length;i++){
	  likedHeart[i].addEventListener('click',(e)=>{
	   
	   const http = new EasyHTTP;
	   let heartId = likedHeart[i].dataset.id;
	   const url = 'http://ikra.slim.technology/ajax/like.php?id='+`${heartId}`;
	   http.get(url);
	   likedItem[i].remove();
	   
	  });
    }
}

  
  

  
  

//hiding mobile catalog menu
let hideMenuBtn = document.getElementById('mobile__catalog__hide__btn');
let menuMobileCatalog = document.getElementById('mobile__catalog__menu');

let fA = document.querySelectorAll('.cls-ma');
let faAr = Array.from(fA);

let hideMenuBtnBrands = document.getElementById('mobile__catalog__brands__btn');
let menuMobileBrands = document.getElementById('mobile__catalog__brands');
let backBtn = document.getElementById('back__btn');
let backBrandsBtn = document.getElementById('back__brands__btn');

hideMenuBtn.addEventListener('click',()=>{
  faAr[0].classList.add('move__mobile__arrow')
  faAr[1].classList.add('move__mobile__arrow')
  setTimeout(()=>faAr[1].nextSibling.classList.add('move__mobile__arrow'),150)
  setTimeout(()=>(menuMobileCatalog.classList.contains('hide__mobile__catalog__menu') ? menuMobileCatalog.classList.remove('hide__mobile__catalog__menu') : menuMobileCatalog.classList.add('hide__mobile__catalog__menu')),700)  
})

hideMenuBtnBrands.addEventListener('click',()=>{
faAr[2].classList.add('move__mobile__arrow')
faAr[3].classList.add('move__mobile__arrow')
setTimeout(()=>faAr[3].nextSibling.classList.add('move__mobile__arrow'),150)
setTimeout(()=>(menuMobileBrands.classList.contains('hide__mobile__catalog__menu') ? menuMobileBrands.classList.remove('hide__mobile__catalog__menu') : menuMobileBrands.classList.add('hide__mobile__catalog__menu')),700)
})

backBtn.addEventListener('click',()=>{
  faAr[0].classList.remove('move__mobile__arrow')
  faAr[1].classList.remove('move__mobile__arrow')
  faAr[1].nextSibling.classList.remove('move__mobile__arrow');
  (menuMobileCatalog.classList.contains('hide__mobile__catalog__menu') ? menuMobileCatalog.classList.remove('hide__mobile__catalog__menu') : menuMobileCatalog.classList.add('hide__mobile__catalog__menu'))
})

backBrandsBtn.addEventListener('click',()=>{
  faAr[2].classList.remove('move__mobile__arrow')
  faAr[3].classList.remove('move__mobile__arrow')
  faAr[3].nextSibling.classList.remove('move__mobile__arrow')
  (menuMobileBrands.classList.contains('hide__mobile__catalog__menu') ? menuMobileBrands.classList.remove('hide__mobile__catalog__menu') : menuMobileBrands.classList.add('hide__mobile__catalog__menu'))
})


//mobile menu animation
let myBtn = document.getElementById('menu__burger');
let mobileLogo = document.getElementById('mobile__logo');
let leftHr = document.getElementById('left__closing');
let rightHr = document.getElementById('right__closing');
let closingDiv = document.getElementById('burger');

myBtn.addEventListener('click', ()=>{
  setTimeout(()=>{
    mobileLogo.classList.add('show__mobile__logo')
    leftHr.classList.add('closing__animation__left')
    rightHr.classList.add('closing__animation__right')
    closingDiv.classList.add('rotate__closing__button')
  },500);
});
closingDiv.addEventListener('click',()=>{

})
  // mobile menu showing

let menuBtn = document.getElementById('menu__burger');
let mobileMenu = document.getElementById('mobile__menu');
let b = document.querySelector('body');
let mobileMenuHeight = window.innerHeight;
  

menuBtn.addEventListener('click', ()=>{
   mobileMenu.classList.add('show__menu')
   b.classList.add('hide__overflow')
   mobileMenu.style.minHeight = `${mobileMenuHeight}px`;
  }
);

closingDiv.addEventListener('click', ()=>{
  mobileMenu.classList.add('hide__menu');
  b.classList.remove('hide__overflow');
  (faAr[0].classList.contains('move__mobile__arrow') ? faAr[0].classList.remove('move__mobile__arrow') : 1);
  (faAr[1].classList.contains('move__mobile__arrow') ? faAr[1].classList.remove('move__mobile__arrow') : 1);
  (faAr[1].nextSibling.classList.contains('move__mobile__arrow') ? faAr[1].nextSibling.classList.remove('move__mobile__arrow') : 1);
  (faAr[2].classList.contains('move__mobile__arrow') ? faAr[2].classList.remove('move__mobile__arrow') : 1);
  (faAr[3].classList.contains('move__mobile__arrow') ? faAr[3].classList.remove('move__mobile__arrow') : 1);
  (faAr[3].nextSibling.classList.contains('move__mobile__arrow') ? faAr[3].nextSibling.classList.remove('move__mobile__arrow') : 1);
  setTimeout(()=>(menuMobileCatalog.classList.contains('hide__mobile__catalog__menu') ? menuMobileCatalog.classList.remove('hide__mobile__catalog__menu') : 1),800);
  setTimeout(()=>(menuMobileBrands.classList.contains('hide__mobile__catalog__menu') ? menuMobileBrands.classList.remove('hide__mobile__catalog__menu') : 1),800);
  setTimeout(()=>mobileMenu.classList.remove('show__menu'),400)
});


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
let errorSign = Array.from(document.querySelectorAll('.error__sign'));

if(orderBtn){
  orderBtn.addEventListener('click', function(e){
    let orderInputsReq = Array.from(document.querySelectorAll('.required'));
    for(let i=0;i<orderInputsReq.length;i++){
      if(!orderInputsReq[i].value){
        
        orderInputsReq[i].style.borderBottom = '1px solid #EA2C32';
        errorSign[i].style.opacity = '1';
        window.scrollTo(0, orderInputsReq[0].offsetTop-80);
        
        e.preventDefault();
      }
      orderInputsReq[i].onblur = function(){
        if(orderInputsReq[i].value){
          orderInputsReq[i].style.borderBottom = '1px solid #13100D';
          orderInputsReq[i].nextSibling.nextSibling.style.display = 'none';
          
        }
      }
    }
    
  });
}

//order payment method block

orderTabs = Array.from(document.querySelectorAll('.delivery__type__menu a'));
orderBlock = Array.from(document.querySelectorAll('.delivery__type__data'));
orderId = document.getElementById('deliveryId');
deliveryRuqiresAdress = Array.from(document.querySelectorAll('.delivery__delivery input'));
let payInshop = document.querySelector('.payment__type div:last-child');
(payInshop ? payInshop.style.display='none' : 1);
let inlinePay = document.querySelector('.payment__type div input');
if(payInshop){
	orderTabs[1].addEventListener('click', ()=> {
		payInshop.style.display='block'
		orderId.value=3
		for(let i = 0; i< deliveryRuqiresAdress.length; i++){
			deliveryRuqiresAdress[i].classList.remove('required')			
		}
		let orderInputsReq = Array.from(document.querySelectorAll('.required'))
	} );

	orderTabs[0].addEventListener('click', ()=> {
			payInshop.style.display='none';
			inlinePay.checked='checked';
			orderId.value=2
		} 
	);
	
}

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






//email validation

let sbmBtn = document.getElementById('submit__lk__form');
if(sbmBtn){
  sbmBtn.addEventListener('click', function(){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.getElementById('lk__prop__email');
        if(reg.test(address.value) == false) {
          emailError.style.opacity = '1';
          address.style.borderBottom = '1px solid #EA2C32';
           return false;
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
        }
});
}


//input form lk styles
let lkFormInputs = Array.from(document.querySelectorAll('#lk__form input'));

for(let i=0; i< lkFormInputs.length; i++){ 
  if(lkFormInputs[i].value){
    lkFormInputs[i].style.width = `${lkFormInputs[i].value.length*11+20}px`;
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

// changingClass(catalogItems,'catalog__goes__down');
//catalog top menu turning on
let blockTrigger = Array.from(document.querySelectorAll('.top__menu__links span'));
let block = Array.from(document.querySelectorAll('.its__block'));
let hideFilter= document.getElementById('hide__filter');
catalogItems = document.querySelector('.catalog__pages');

for(let i=0; i< blockTrigger.length; i++){
  blockTrigger[i].addEventListener('click',function(){
	  catalogItems.classList.add('catalog__goes__down');
	  (catalogItems.classList.contains('catalog__goes__up') ? catalogItems.classList.remove('catalog__goes__up') : 1 );
	hideFilter.style.display = 'block';
    if(block[i].classList.contains('rel')){
      block[i].classList.remove('rel');
      block[i].style.top = '1000px';  
    }else{
      block[i].classList.add('rel');
      block[i].style.top = '0'; 
    }
    
  })
}
if(hideFilter){
	hideFilter.addEventListener('click',()=>{
		catalogItems.classList.add('catalog__goes__up')
		setTimeout(()=>catalogItems.classList.remove('catalog__goes__down'),500)
		hideFilter.style.display = 'none'
		for(let i=0; i< blockTrigger.length; i++){
	      block[i].classList.remove('rel');
	      block[i].style.top = '1000px';  
		}
	});
}
//arrows animating heart
let ar = Array.from(document.querySelectorAll('.heart__arrow'));
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
let itemQuantity = document.getElementById('item__quantity');
if(toBasketBtn != null){
  	toBasketBtn.addEventListener('click',function(){
  	let choosingLabels = Array.from(document.querySelectorAll('.size__choosing__label'));
  	for(let i=0; i< choosingLabels.length; i++){
	  	if(choosingLabels[i].classList.contains('active')){
		  	let bQuantity = document.getElementById('bQuantity');
		    let newAmount = parseInt(bQuantity.innerText) + parseInt(itemQuantity.innerText);
		    bQuantity.innerText = newAmount;
		    bQuantity.classList.add('bquantity__animation');
		    setTimeout(function(){
		      bQuantity.classList.remove('bquantity__animation');
		    },1100);
		    itemQuantity.innerText = 1;
		    toBasketBtn.innerText = "товар в корзине";
		    setTimeout(()=>{
		      toBasketBtn.innerText = "В корзину";
		    },3000);
			break;
	  	}
	  	else{
	  			toBasketBtn.innerText = "выберите свой размер";
			    setTimeout(()=>{
			      toBasketBtn.innerText = "В корзину";
			    },3000);
	  	}

  	}  
})
  
  
}


//item card quantity
let plusItem = document.getElementById('plus');
let minusItem = document.getElementById('minus');
if(plusItem){
	plusItem.addEventListener('click',()=>{
		itemQuantity.innerText = parseInt(itemQuantity.innerText) + 1
	})
	minusItem.addEventListener('click',()=>{
		itemQuantity.innerText = parseInt(itemQuantity.innerText) - 1
	})
}

//every link with bottom line animation
	const btnBottom = Array.from(document.querySelectorAll('.button__bottom .some'));
    
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
// brands search


var obj;
 fetch('/ajax/JSONbrands.php')
  .then(res => res.json())
  .then(data => obj = data)
  .then(()=>{
	  var options = {
		  valueNames: [ 'name', { attr: 'href', name: 'link'} ],
		  // Since there are no elements in the list, this will be used as template.
		  item: '<li><a class="link"><p class="name"></p></a></li>'
		};
		 var bUrl = 'http://ikra.slim.technology';
		 var values = new Array();
		 for(let i = 0;i<obj.length;i++){
			values.push({name: `${obj[i].name}`, link: `${bUrl}${obj[i].link}`});
			}
 var userList = new List('users', options, values);
  });

var brandsInput = document.getElementById('brands__search__input');			
(brandsInput ? brandsInput.addEventListener('input', ()=>showBrandsBtn.style.display = 'none') : 1);






//brands directory work
  let activeSlide = Array.from(document.querySelectorAll('.brands__slider .brand__name'));
  let brandTopSign = Array.from(document.querySelectorAll('.brands__slider .brand__top__sign'));
  let brandBottomSign = Array.from(document.querySelectorAll('.brands__slider .brand__description'));
  let brandArrow = Array.from(document.getElementsByClassName('brand__arrow'));
  const brandsWrapper = document.getElementById('brands__back');

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

