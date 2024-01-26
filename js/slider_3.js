/* 일정 간격마다 국내도서 하단 메뉴 순차 변경 */
$(function(){
    
    var index = 1;
    var img = $(".korean-img");
    var title = $(".korean-title");

    img.hide();
    title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666"});
    img.eq(0).show();
    title.eq(0).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});

    var slide = function(){
        img.hide();
        title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666"});

        img.eq(index).show();
        title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        index++;
        if(index >= 7){index = 0;}
    }

    var setSlide = setInterval(slide,3000);

    title.mouseover(function(){
        clearInterval(setSlide);
        title.css({backgroundColor:"#f8f8f8"}).children("a").css({color:"#666666"});
        img.hide();

        index=$(this).index();
        title.eq(index).css({backgroundColor:"#302f2f"}).children("a").css({color:"white"});
        img.eq(index).show();
    }).mouseout(function(){
        setSlide = setInterval(slide,3000);
    });
}); 