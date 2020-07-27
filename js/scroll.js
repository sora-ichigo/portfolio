$(function() {
    var pagetop = $('.scroll_button');
    var skip_top = $('.skip_top');
    var skip_about = $('.skip_about');
    var skip_skill = $('.skip_skill');
    var skip_works = $('.skip_works');
    var skip_contact = $('.skip_contact');

    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        }
        else {
            pagetop.fadeOut();
        }
    });

    // ヒーローイメージの境目でナビゲーションメニューの色を変更
    $(window).scroll(function() {
        var about = $(".about").offset().top;
        if ($(this).scrollTop() > about-70 ) {
            $(".spinner").css("background-color","#000");
        }
        else {
            $(".spinner").css("background-color","#fff");
        }
    });

    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
    skip_top.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
    skip_about.click(function() {
        var about = $(".about").offset().top;
        $('body, html').animate({ scrollTop: about - 50 }, 500, "swing");
        return false;
    });
    skip_skill.click(function() {
        var skill = $(".skill").offset().top;
        $('body, html').animate({ scrollTop: skill - 50 }, 500, "swing");
        return false;
    });
    skip_works.click(function() {
        var works = $(".works").offset().top;
        $('body, html').animate({ scrollTop: works - 50 }, 500, "swing");
        return false;
    });
    skip_contact.click(function() {
        var contact = $(".contact").offset().top;
        $('body, html').animate({ scrollTop: contact - 50 }, 500, "swing");
        return false;
    });

});
