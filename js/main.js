// $(document).ready(function(){
  
//     $('.slider-recommend').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows:false,
//     dots:true
//     });
//     $('.slider-recommend-mobile').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows:false,
//     dots:true
//     });
// });


let promoValue = document.getElementById('promocodeValue');
let promoBtn = document.getElementById('insert__promocode');

promoValue.addEventListener('keydown', showBtn);
function showBtn(){
    if(promoValue.value.length>=5){
        promoBtn.style.opacity = '1';
    }
}

// отрисовка линии у любой кнопки внизу страницы
window.onload = function(){

    const btnBottom = document.querySelector('.button__bottom button');
    const line = document.querySelector('.button__bottom div');
    console.log(btnBottom.clientWidth);
    let lineWidth = btnBottom.clientWidth;
    console.log(lineWidth * 0.7 +'px');
    line.style.width = lineWidth * 0.7 +'px';

    btnBottom.addEventListener('mouseover', fullLine);
    btnBottom.addEventListener('mouseleave', notFullLine);
    function fullLine(){
        line.style.width = lineWidth+'px';
    }
    function notFullLine(){
        line.style.width = lineWidth * 0.7 +'px';
    }    
}
// конец отрисовки линии






