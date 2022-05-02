// 스크롤라
$('.animate').scrolla();

let pager=$(".pager ul li");
let cont=$("#wrap>section");

$(window).scroll(function(){
    let sct=$(window).scrollTop();
    cont.each(function(){
        let tg=$(this);
        let i=tg.index();
        if(tg.offset().top<=sct){
            pager.removeClass("on");
            pager.eq(i).addClass("on");
           };
    });
});

pager.click(function(){
    let active=$(this).index();
    let top=$("html , body").scrollTop();
    let tt=cont.eq(active).offset().top;
    if(top==0) top=$("body").scrollTop();
    $("html , body").stop().animate({
        scrollTop:tt
    },400);
    return false;
});

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });


// 햄버거 메뉴 클릭시 메뉴보이게
$('.menu-toggle-btn').click(function(){
    $('nav.pager-mo').stop().slideToggle();
})

// 메뉴 클릭시 메뉴창 닫기
 $('nav ul li a').click(function() {
    $('nav.pager-mo').stop().slideUp();
});

new Swiper('.slider .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    navigation : {
        prevEl : ".slider .button-prev",
        nextEl : ".slider .button-next"
    }
});


//클래스 명을 추출해서 같은 클래스명이 붙은 팝업창을 불러옴
$('.img_box').on('click',function(){
    let popName = $(this).parent('li').attr('class');
    $('.popup_list .'+popName).fadeIn(300,'swing');
});

$('.close_btn').on('click',function(e){
    e.preventDefault();
    popClose();
});

function popClose() {
    $('.popup_wrap').fadeOut(300,'swing');
};


AOS.init();


