$(document).ready(function () {

    // Slick line
    $(function () {
        let $el, leftPos, newWidth, $mainNav = $('#slick-line');

        $mainNav.append('<li id="magic-line"></li>');
        const $magicLine = $('#magic-line');

        $magicLine
            .width($('.current_page_item').width())
            .css('left', $('.current_page_item a').position().left)
            .data('origLeft', $magicLine.position().left)
            .data('origWidth', $magicLine.width());

        $('.slick-nav-group a').on('click', function () {
            const activeMenu = $(this).attr('href');
            $('.slick-nav-group li').removeClass('current_page_item');
            $(activeMenu + '-menu').addClass('current_page_item');

            $magicLine
                .width($('.current_page_item').width())
                .css('left', $('.current_page_item a').position().left)
                .data('origLeft', $magicLine.position().left)
                .data('origWidth', $magicLine.width());
        });

        $('#slick-line li a').hover(function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            });
        });
    });

    // ВЕРХНИЕ ВКЛАДКИ
    $('.slick-nav-group li a').on('click', function () {
        $('.slick-nav-group a').removeClass('content-active');
        $(this).addClass('content-active');
        const href = $(this).attr('href');
        $('.tabs-content-item').removeClass('content-active');
        $(href).addClass('content-active');

        return false;
    });

    //НИЖНИЕ ВКЛАДКИ
    $('.content-nav-group li a').on('click', function () {
        const $atributeHref = $(this).attr('href');
        const $navTabActive = $('.content-active .tabs-content-item-active');

        $('.content-active .content-nav-group li a').removeClass('opacity-tab-active');
        $(this).addClass('opacity-tab-active');

        $($navTabActive).removeClass('tabs-content-item-active');
        $($atributeHref).addClass('tabs-content-item-active');

        return false;
    });
});
