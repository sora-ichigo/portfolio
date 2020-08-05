// animatedクラスの付いた要素にwaypointを登録
$('.fadeInUp-box').waypoint({
    handler(direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素にfadeInUpクラスを付けることで
             * アニメーションを開始
             */
            $(this.element).addClass('fadeInUp');

            /**
             * waypointを削除することで、この要素に対しては
             * これ以降handlerが呼ばれなくなる
             */
            this.destroy();
        }
    },

    // 要素が画面中央に来たらhandlerを実行
    offset: '70%',
});