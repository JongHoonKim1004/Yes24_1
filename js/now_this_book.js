/* 지금, 이 책 영역 화면 전환 */
$(function(){
    var index = 0;
    var num = $(".now-this-book-num > h6");
    var book = $(".now-this-book");

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