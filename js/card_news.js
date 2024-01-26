/* '카드뉴스로 보는 책' json 호출 */
$(function(){
    $.ajax({
        url: "./json/card_news.json",
        dataType: "json",
        success: function(data){
            if(data.length > 0){
                for(var i in data){
                    $(".card-news-img").eq(i).append("<a href='#'><img alt='card-news-thumb' src='img/"+data[i].thumb+"'></a>");
                    $(".card-news-content-book-img").eq(i).append("<a href='#'><img alt='card-news-mini-img' src='img/"+data[i].book+"'/></a>");
                    $(".card-news-content-book-title").eq(i).append("<a href='#'>"+data[i].title+"</a>");
                    $(".card-news-content-book-subtitle").eq(i).append(data[i].subtitle);
                    $(".card-news-content-book-author").eq(i).append(data[i].author+"|"+data[i].comp);
                }
            }
        }
    });
});

/* '카드뉴스로 보는 책' 화면전환 */
$(function(){
    var index = 1;
    var content = $(".card-news-content");
    var img = $(".card-news-img");
    var num = $(".card-news-content-num > h6");

    content.hide();
    img.hide();
    content.eq(0).show();
    img.eq(0).show();
    var slide = function(){
        content.hide();
        img.hide();
        content.eq(index).show();
        img.eq(index).show();
        num.text((index+1)+"/3")

        index++;
        if(index >= 3){index = 0;}
    }
    var setSlide = setInterval(slide,3333);
});

/* .card-section-box 화면전환 */
$(function(){
    var index = 1;
    var index2 = 4;
    var main = $(".card-section-box-main");
    var num = $(".card-section-box-num");

    main.hide();
    main.eq(0).show();
    main.eq(3).show();
    var slide = function(){
        main.hide();
        main.eq(index).show();
        main.eq(index2).show();
        num.text((index+1)+"/3");
        
        index++;
        if(index >= 3){index = 0;}
        index2++;
        if(index2 >= 6){index2 = 3;}
    }
    var setCardSlide = setInterval(slide,2222);
});