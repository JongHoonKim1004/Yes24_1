/* 화제의 책 영역 화면 전환 */
$(function(){
    var index = 1;
    var num = $(".wadai-book-num > h6");
    var book = $(".wadai-book");

    book.hide();
    book.eq(0).show();

    var interval = setInterval(function(){
        book.hide();
        book.eq(index).show();
        num.text((index+1)+"/3");
        index++;
        if(index >= 3){index = 0;}
    },5000);
});

/* 화제의 책 크레마 광고 영역 화면전환 */
$(function(){
    var index = 1;
    var num = $(".secondary-page-num-in-crema > h6");
    var ad = $(".secondary-ad-crema");

    ad.hide();
    ad.eq(0).show();
    var interval = setInterval(function(){
        ad.hide();
        ad.eq(index).show();
        num.text((index+1)+"/3");
        index++;
        if(index >= 3){index = 0;}
    },2000);
});