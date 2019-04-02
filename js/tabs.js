$(document).ready(function(){

  // ВЕРХНИЕ ВКЛАДКИ
    $('body').on('click','.slick-nav-group li a', function(){
        $('.slick-nav-group a').removeClass('content-active');
        $(this).addClass('content-active');
        var href = $(this).attr('href');
        $('.tabs-content-item').removeClass('content-active');
        $(href).addClass('content-active');
        return false;
    });

    //НИЖНИЕ ВКЛАДКИ
    $('.content-nav-group li a').on('click', function(){
        $('.content-nav-group a').removeClass('active');
        $(this).addClass('active');

        $('.content-nav-group li a').removeClass('opacity-tab-active');
        $(this).addClass('opacity-tab-active');

        var href = $(this).attr('href');
        $('.tabs-content-item').removeClass('active');
        $(href).addClass('active');
        return false;
    });

});

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#slick-line");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());


    $("#slick-line li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
});
