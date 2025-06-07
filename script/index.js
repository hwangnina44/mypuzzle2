//index.js


// 기본형 헤더로 바꾸는 함수
function setTransparentGNB() {
    $('header').addClass('transparent');
    $('header').removeClass('bar-active');
    $('.logo img').attr('src', 'img/Logo_w.png');
    $('.login .icon-login img').attr('src', 'img/icon/icon_login_w.png');
    $('.login .icon-cart img').attr('src', 'img/icon/icon_cart_w.png');

}

// 실행형 헤더로 바꾸는 함수
function setDefaultGNB() {
    $('header').addClass('bar-active');
    $('header').removeClass('transparent');

    $('.logo img').attr('src', 'img/Logo.png');
    $('.login .icon-login img').attr('src', 'img/icon/icon_login.png');
    $('.login .icon-cart img').attr('src', 'img/icon/icon_cart.png');
}

$(document).ready(function () {

    setTransparentGNB();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            setDefaultGNB();
        } else {
            setTransparentGNB();
        }
    });

    /////////////////////////////////////////////////슬라이드/////////////////////////////////////////

    var slidW = $('.banner-box').width();
    var stat = 0;
    var pageCount=0;
    var totalPage= $('.banner-box').length;
    console.log(totalPage);
    auto();
    //1.슬라이드 이동시키기

    function auto(){

        $('banner-box').animate({
            marginLeft : -(slidw*pageCount)
        });
    }

    // 슬라이드 초기화: 마지막 슬라이드를 앞에 붙이고 margin-left 조정
   /*  $('.banner .banner-box:last').prependTo('.banner');
    $('.banner').css('margin-left', -slidW);


    var timer = setInterval(slideNext, 3000);



    function slideNext() {

        $('.banner').animate({
            marginLeft: '-=' + slidW
        }, 800, function () {
            $('.banner-box:first').appendTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
    }

    function slidePrev() {
        $('.banner').animate({
            marginLeft: '+=' + slidW
        }, 800, function () {
            $('.banner-box:last').prependTo('.banner');
            $('.banner').css('margin-left', -slidW);
        });
    }

      $('.btn-next a').click(function (e) {
         e.preventDefault();
         clearInterval(timer);
         slideNext();
         timer = setInterval(slideNext, 3000);
     });
 
     $('.btn-prev a').click(function (e) {
         e.preventDefault();
         clearInterval(timer);
         slidePrev();
         timer = setInterval(slideNext, 3000);
     }); 
 */
});



$(document).ready(function () {

    ////////////////////리뷰///////////////////////////////////
    //넓이
    var reviewW = ($(".review .slider .box-wrap").width());
    var box = $(".review .slider .box-wrap .box").width();
    console.log(reviewW, box);
    //실행
    //a 복사
    var content = $('.review .slider .box-wrap').clone().appendTo('.review .slider').css({
        float: 'left'
    });

    //console.log(content);
    // setInterval(move,3000)
    move();

    function move() {

        $('.review .slider .box-wrap').animate({
            marginLeft: "-=" + reviewW
        }, 50000, function () {
            $('.review .slider .box-wrap').css({
                marginLeft: 0
            });
        });
        $('.review .slider .box-wrap box').clone().appendTo('.review .slider .box-wrap').css({
            float: 'left'
        });
    }

    /////영양제에 호버했을때///////////////////////////////////////////////
    $('.pill .product').hover(
        function () {

            $(this).find('.des').show().css({
                backgroundColor: 'rgba(60,17,82, 0.6)'
            });
            $(this).find('.info').hide();
            $(this).find('.pill-img').css({
                width: '100%',
                float: 'none'
            });
        },
        function () {
            console.log("off")
            $(this).find('.des').hide();
            $(this).find('.info').show();
            $(this).find('.pill-img').css({
                width: '50%',
                float: 'left'
            });
        }
    );

});














