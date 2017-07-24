$(function() {
    // 导航栏更多
    $('.moreNavLink a').hover(
            function() {
                $(this).children('span').stop().animate({
                    'bottom': 0
                }, 300)
            },
            function() {
                $(this).children('span').stop().animate({
                    'bottom': -30
                }, 300)
            }
        )
        // 鼠标指向图片透明度改变
    $('.listItem').mouseenter(function() {
        $(this).children().children('img').stop().animate({
            'opacity': 0.7
        }, 300).animate({
            'opacity': 1
        })
    })

    // 浏览器高度变小,隐藏.rightSide_bottom
    $(window).resize(function() {
        if ($(window).height() < 550) {
            $('.rightSide_bottom').css('display', 'none');
        } else {
            $('.rightSide_bottom').css('display', 'block');
        }

        if ($(window).width() < 1000) {
            $('.rightSide').css('background-color', 'transparent');
            $('.rightSide li').css('opacity', 0);
            $('.myCartBox').css({
                'opacity': 1,
                'padding': 0
            });
            $('.myCartBox').mouseover(function() {
                $('.rightSide').css('background-color', '#262626');
                $('.rightSide li').css('opacity', 1);
            });
            $('.rightSide').mouseleave(function() {
                $('.rightSide').css('background-color', 'transparent');
                $('.rightSide li').css('opacity', 0);
                $('.myCartBox').css({
                    'opacity': 1,
                    'padding': 0
                });
            })
        } else {
            $('.rightSide').css('background-color', '#262626');
            $('.rightSide li').css('opacity', 1);
            $('.myCartBox').css({
                'opacity': 1,
                'padding-top': 3,
                'padding-bottom': 5
            });
        }
    })


    // 列表页面选项卡
    $('.listHiddenIcon li').mouseover(function() {
        var index = $(this).index();
        $(this).parent().parent().parent('.listOuter ').find('li').removeClass('iconShow');
        $(this).parent().parent().parent('.listOuter ').find('li').eq(index).addClass('iconShow');
        $(this).parent().parent().parent('.listOuter ').find('.listInnerIcon li').removeClass('show').eq(index).addClass('show');
    })
    $('.listOuter').mouseleave(function() {
        $(this).find('.listHiddenIcon li').removeClass('iconShow');
        $(this).find('.listHiddenIcon li:eq(0)').addClass('iconShow');
        $(this).find('.listInnerIcon li').removeClass('show');
        $(this).find('.listInnerIcon li:eq(0)').addClass('show');
    })

    // 倒计时函数
    function GetRTime() {
        var EndTime = new Date('2018/05/10 00:00:00');
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        // $('.day').html(d);
        $('.hour').html(h);
        $('.minute').html(m);
        $('.seconed').html(s);
    }
    setInterval(GetRTime, 0);
    // 列表页头部显示和隐藏
    $(document).scroll(function() {
        // console.log($('body').scrollTop());
        if ($('body').scrollTop() > 1200) {
            $('#topBar').slideDown('fast');
        } else {
            $('#topBar').slideUp('fast');
        }
    })

    // 详情页面放大镜
    $('.others li').mouseover(function() {
        var src = $(this).children('img').attr('src');
        $('#show_images img').attr('src', src);
        $('#big_images img').attr('src', src);
    });
    //把鼠标移入时，shade显示出来,把鼠标移出的时候shade隐藏
    $('#show_images').mouseenter(function() {
        //big,shade显示出来
        $('#shade').show();
        // $('#big_images').css('display', 'block');
        $('#big_images').show();
        $('#show_images').mousemove(function(e) {

            //三元运算符
            //e = event?event:window.event;

            //光标的距离  pageX是鼠标距离浏览器左侧的距离
            // 低版本ie没有e.offsetX
            var x = e.pageX || e.clientX;
            var y = e.pageY || e.clientY;

            //获取small距离视窗的距离  offset
            var small_x = $('#show_images').offset().left;
            var small_y = $('#show_images').offset().top;

            //获取遮罩层的宽度和高度
            var shade_w = $('#shade').width();
            var shade_h = $('#shade').height();

            //准备赋值
            var newtop = y - small_y - shade_h / 2;
            var newleft = x - small_x - shade_w / 2;

            //判断是否超出最大的活动范围
            var max_top = $('#show_images').height() - $('#shade').height();
            var max_left = $('#show_images').width() - $('#shade').width();

            if (newtop >= max_top) {
                newtop = max_top;
            }

            if (newleft >= max_left) {
                newleft = max_left;
            }

            if (newleft <= 0) {
                newleft = 0;
            }

            if (newtop <= 0) {
                newtop = 0;
            }

            $('#shade').css({
                top: newtop,
                left: newleft,
            });
            // console.log(newtop, newleft);
            //小图的比值
            var bizhi_x = newleft / max_left;
            var bizhi_y = newtop / max_top;

            //大图的移动坐标
            var bigx = bizhi_x * ($('#big_images>img').width() - $('#big_images').width());
            var bigy = bizhi_y * ($('#big_images>img').height() - $('#big_images').height());

            //给大图赋值
            $('#big_images>img').css({
                left: -bigx,
                top: -bigy
            });

        });
    })
    $('#show_images').mouseleave(function() {
        //big,shade隐藏
        $('#shade').hide();
        $('#big_images').hide();
        // $('#big_images').css('display', 'none');
    })

    //开始计算
    // 详情页面数量
    $('.jian').click(function() {
        var val = $(this).parent().find('input').val();
        // console.log(val);
        val_num = parseInt(val) - 1;
        if (val == 1) {
            val_num = 1;
            $('.number_hidden').find('span').html('本商品1件起售');

            $('.number_hidden').finish().animate({
                'opacity': 1,
                'top': '30px'
            }, 200).delay(1500).animate({
                'opacity': 0,
                'top': '40px',
            }, 0);

        }
        $(this).parent().find('input').val(val_num);
    })
    $('.jia').click(function() {
            var val = $(this).parent().find('input').val();
            // console.log(val);
            val_num = parseInt(val) + 1;
            if (val == 2) {
                val_num = 2;
                $('.number_hidden').find('span').html('同尺码限购两件');
                $('.number_hidden').finish().animate({
                    'opacity': 1,
                    'top': '30px'
                }, 200).delay(1500).animate({
                    'opacity': 0,
                    'top': '40px',
                }, 0);
            }
            $(this).parent().find('input').val(val_num);
        })
        // 详情页面底部选项卡
    $('.about_us_title li').hover(function() {
        $(this).addClass('about_us_title_show');
        $(this).siblings().removeClass('about_us_title_show');
        //获取当前的li是第几个
        var i = $(this).index();
        //console.log(i);
        $('.about_us_content li').removeClass('about_us_content_show').eq(i).addClass('about_us_content_show');
    });


    // 结束
})
