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



});




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






