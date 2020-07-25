$(function() {
    var menu = $('#slide_menu'), // スライドインするメニューを指定
        menuBtn = $('#openSidebarMenu'), // メニューボタンを指定
        menuWidth = menu.outerWidth();

    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function() {
        // body に open クラスを付与する
        menu.toggleClass('open');
        if (menu.hasClass('open')) {
            // open クラスが body についていたらメニューをスライドインする
            menu.animate({ 'right': 0 }, 300);

        }
        else {
            // open クラスが body についていなかったらスライドアウトする
            menu.animate({ 'right': -menuWidth }, 300);
        }
    });
});
