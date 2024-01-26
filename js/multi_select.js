/* 멀티셀렉트 메뉴 누르면 화면변경 */
$(function(){
    var index = 0;
    var menuImg = $(".ms-menu-img");
    var menuBox = $(".ms-menu");
    
    menuImg.css({backgroundColor:"#f8f8f8",borderBottom:"1px solid #666"});
    menuBox.hide();
    menuImg.eq(0).css({backgroundColor:"",borderBottom:"0"});
    menuBox.eq(0).show();

    menuImg.click(function(){
        menuImg.css({backgroundColor:"#f8f8f8",borderBottom:"1px solid #666"});
        menuBox.hide();

        index = $(this).index();
        menuImg.eq(index).css({backgroundColor:"",borderBottom:"0"});
        menuBox.eq(index).show();
    });
});

/* 멀티셀렉트 도서 부분 화면전환 */
$(function(){
    var index = 1;
    var middle_box = $(".middle-box-book");
    var middle_num = $(".middle-box-book-num");
    var middle_li = $(".ms-middle-title-type-ul > li");

    middle_box.hide();
    middle_box.eq(0).show();
    var slide = function(){
        middle_box.hide();
        middle_box.eq(index).show();
        middle_num.text((index+1)+"/5");

        index++;
        if(index >= 5){index = 0;}
    }

    var setBookSlide = setInterval(slide,5000);
});

/* 멀티셀렉트 중고샵 부분 화면전환 */
$(function(){
    var index = 1;
    var middle_box = $(".middle-box-used");
    var middle_num = $(".middle-box-used-num");
    var middle_li = $(".ms-middle-title-type-ul > li");

    middle_box.hide();
    middle_box.eq(0).show();
    var slide = function(){
        middle_box.hide();
        middle_box.eq(index).show();
        middle_num.text((index+1)+"/6");

        index++;
        if(index >= 6){index = 0;}
    }

    var setBookSlide = setInterval(slide,5000);
});

/* 멀티셀렉트 eBook 부분 화면전환 */
$(function(){
    var index = 1;
    var middle_box = $(".middle-box-eBook");
    var middle_num = $(".middle-box-eBook-num");
    var middle_li = $(".ms-middle-title-type-ul > li");

    middle_box.hide();
    middle_box.eq(0).show();
    var slide = function(){
        middle_box.hide();
        middle_box.eq(index).show();
        middle_num.text((index+1)+"/10");
        
        index++;
        if(index >= 10){index = 0;}
    }

    var setBookSlide = setInterval(slide,5000);
});