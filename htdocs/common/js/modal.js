/*--------------------------------------------------
モーダルウィンドウ
overlay_close: 背景クリックでモーダルを閉じるかどうか。
 --------------------------------------------------*/
let current_scrollY;

// open
function openModal(contents, width, overlay_close) {
    let width_str = (typeof width !== 'undefined') ? 'style="width: ' + width + 'px;"' : '';
    let str = '<div class="modal modal_effect" ' + width_str + '>' +
        ' <div class="modal_contents">' + contents + '</div>' +
        '</div>';
    // 背景クリックでモーダル閉じるか。
    if (typeof overlay_close == 'undefined') {
        str = str + '<div class="modal_overlay" onclick="closeModal();"></div>';
    } else {
        str = str + '<div class="modal_overlay"></div>';
    }

    // スクロールを現在地で固定
    $('body').append(str);
    $(".modal").addClass("modal_show");
    $('#container').addClass('modal_blur');

    // 背景スクロールを無効化
    current_scrollY = $(window).scrollTop();
    $('body').css({
        position: 'fixed',
        width: '100%',
        top: -1 * current_scrollY
    });

    // エスケープキー押下で閉じる
    var keyCode = false;
    document.onkeydown = function (e) {
        if (e) event = e;
        if (event) {
            if (event.keyCode) {
                keyCode = event.keyCode;
            } else if (event.which) {
                keyCode = event.which;
            }
        }
        if (keyCode == '27') {
            closeModal();
            return false;
        }
    }
}

// close
function closeModal() {
    // $(".modal").removeClass("modal_show");
    $('#container').removeClass('modal_blur');
    $(".modal").remove();
    $(".modal_overlay").remove();

    // 背景スクロールを有効化してスクロール位置を復元
    $('body, .drawer-hamburger').attr({style: ''});
    $('html, body').prop({scrollTop: current_scrollY});
    // 一応ローディングイメージも隠す
    if($("#img_loading").length>0){
        hideLoadingImg();
    }
}

/*--------------------------------------------------
 * メッセージを表示して、ふわっと消す
 --------------------------------------------------*/
function openNotice(msg, delay) {
    $('body').append($('<div id="open_notice" class="notice_message">' + msg + '</div>'));
    if (delay == '' || typeof delay === 'undefined') delay = 600;
    $('#open_notice').fadeIn(100).delay(delay).fadeOut(100, function () {
        $('#open_notice').remove();
    });
}

/*--------------------------------------------------
 * ダイアログを表示
 --------------------------------------------------*/
function openDialog(contents, width) {
    if (typeof width === 'undefined') width = 300;
    let dialog = '<div class="modal_body">' + contents + '</div>' +
        '<div class="modal_foot">' +
        '<div class="btn small" onclick="closeModal()"><span>閉じる<i></i></span></div>' +
        '</div>';
    openModal(dialog, width);
}

/*--------------------------------------------------
 * confirmを表示
 */
function openConfirm(msgText, yesFunc, noFunc) {
    let dialog = '<div class="modal_body">' + msgText + '</div>'
        + '	<div class="modal_foot">'
        + '		<button id="btn_no" class="btn small gray">いいえ</button>'
        + '		<button id="btn_yes" class="btn small">はい</button>'
        + '	</div>'
        + '</div>';
    openModal(dialog);

    $('#btn_yes').on('click', function () {
        closeModal();
        yesFunc();
        return true;
    });  // OK
    // NG
    if (typeof noFunc !== 'undefined') {
        // 処理が指定されている
        $('#btn_no').on('click', function () {
            closeModal();
            noFunc();
            return false;
        });
    } else {
        $('#btn_no').on('click', function () {
            closeModal();
            return false;
        });  // NG
    }
}
