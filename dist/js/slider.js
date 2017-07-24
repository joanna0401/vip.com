$(function() {
    var i = 0;
    var run = null;

    function play() {
        $('.sliderInner li').removeClass('show').eq(i).addClass('show');
        $('.sliderCoins li').removeClass('coShow').eq(i).addClass('coShow');
        // if (!$('.lineBox').is(':animated')) {
        $('.lineBox').stop().animate({
            'left': i * 195
        });
        // }
    }

    function autoPlay() {
        i++;
        if (i == 5) {
            i = 0;
        }
        play();
    }
    run = setInterval(autoPlay, 3000);

    $('.sliderInner').hover(
        function() {
            $('.sliderInner .left').css('left', '0px');
            $('.sliderInner .right').css('right', '0px');
            clearInterval(run);
        },
        function() {
            $('.sliderInner .left').css('left', '-33px');
            $('.sliderInner .right').css('right', '-33px');
            run = setInterval(autoPlay, 3000);
        }
    );
    $('.sliderInner .left').click(function() {
        i--;
        if (i == -1) {
            i = 5;
        }
        play();
    });
    $('.sliderInner .right').click(function() {
        i++;
        if (i == 5) {
            i = 0;
        }
        play();
    });

    $('.sliderCoins li').mouseover(function() {
        clearInterval(run);
        var index = $(this).index();
        i = index;
        play();
    });
    $('.sliderCoins li').mouseover(function() {
        run = setInterval(autoPlay, 3000);
    })

    // 向下滚动头部导航出现
    $(document).scroll(function() {
        if ($('body').scrollTop() > 180) {
            $('.nav').addClass('navFixed');
            $('.navFixed').slideDown('slowly');
        } else {
            $('.nav').removeClass('navFixed');
            $('.navFixed').slideUp('slowly');
        }
        //左侧栏
        var leftside = $(document).scrollTop();
        var top_1 = $('.container:eq(0)').offset().top;
        var top_2 = $('.container:eq(1)').offset().top;
        var top_3 = $('.container:eq(2)').offset().top;
        var top_4 = $('.container:eq(3)').offset().top;
        var top_5 = $('.container:eq(4)').offset().top;
        var top_6 = $('.container:eq(5)').offset().top;
        var top_7 = $('.container:eq(6)').offset().top;
        var top_8 = $('.container:eq(7)').offset().top;
        var top_9 = $('.container:eq(8)').offset().top;
        var top_10 = $('.container:eq(9)').offset().top;
        var top_11 = $('.container:eq(10)').offset().top;
        var top_12 = $('.container:eq(11)').offset().top;

        if (leftside <= top_1) {
            $('.leftSide').css('position', 'absolute');
        } else {
            $('.leftSide').css('position', 'fixed');
        }
        if (leftside > top_1 && leftside <= top_2) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(0).addClass('corrent');
        } else if (leftside > top_2 && leftside <= top_3) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(1).addClass('corrent');
        } else if (leftside > top_3 && leftside <= top_4) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(2).addClass('corrent');
        } else if (leftside > top_4 && leftside <= top_5) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(3).addClass('corrent');
        } else if (leftside > top_5 && leftside <= top_6) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(4).addClass('corrent');
        } else if (leftside > top_6 && leftside <= top_7) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(5).addClass('corrent');
        } else if (leftside > top_7 && leftside <= top_8) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(6).addClass('corrent');
        } else if (leftside > top_8 && leftside <= top_9) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(7).addClass('corrent');
        } else if (leftside > top_9 && leftside <= top_10) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(8).addClass('corrent');
        } else if (leftside > top_10 && leftside <= top_11) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(9).addClass('corrent');
        } else if (leftside > top_11 && leftside <= top_12) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(10).addClass('corrent');
        } else if (leftside > top_12) {
            $('.leftSide li').removeClass('corrent');
            $('.leftSide li').eq(11).addClass('corrent');
        }

    })

    $('.leftSide li').each(function() {
        var i = $(this).index();
        $(this).children('a').click(function() {
            var x_top = $('.container').eq(i).offset().top;
            $('html,body').animate({
                scrollTop: x_top
            }, 10);
        })
    })


    // 结束符
});
