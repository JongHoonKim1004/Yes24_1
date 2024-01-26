/* 그래제본소 버튼 이동( 현재 임시 변경필요 ) */
$(function(){
    var index = 1;
    var main = $(".grae-main");
    var h4 = $("#grae-main > h4");

    main.eq(0).show();
    h4.text("1/5");
    setInterval(function(){
        main.hide();
        main.eq(index).show();
        h4.text((index+1)+"/5");
        index++;
        if(index >= 5){index = 0;}
    },1000);
    
});