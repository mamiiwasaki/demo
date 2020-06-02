function getUrl() {
    return location.protocol + "//" + location.host + location.pathname;   //+ location.search;
}
function cl(str1, str2, str3){
    let s2 = (typeof str2!='undefined') ? str2 : null;
    let s3 = (typeof str3!='undefined') ? str3 : null;
    console.log(str1, s2, s3);
}

/*--------------------------------------------------
 * JSONデータをパースする
 --------------------------------------------------*/
function parseJson(j_data) {
    if (j_data === '') {
        return;
    }
    // 内容をチェック。エラーがあったらアラート表示して処理を終了する
    checkAjaxData(j_data);
    // パースして返す
    return JSON.parse(j_data);
}

/*--------------------------------------------------
 * 内容をチェック。エラーがあったらアラート表示して処理を終了する
 --------------------------------------------------*/
function checkAjaxData(j_data) {
    if (j_data.match(/PDO_ERROR|Notice|Warning|Parse error|Fatal error|PDO error|fetal error|Unknown column/)) {
        // エラーがあったらalert
        if (debug) {
            alert('checkAjaxData', j_data);
        } else {
        }
        return false;
    }
    return true;
}

function getUrl() {
    return location.protocol + "//" + location.host + location.pathname;   //+ location.search;
}

function getUrlParam() {
    return location.protocol + "//" + location.host + location.pathname + location.search;
}

// 全角を半角に変換
function zenToHan(str) {
    str = str.replace(/ー|−/g, '-');
    return str.replace(/[Ａ-Ｚａ-ｚ０-９！-]/g, function (s) {
        str = String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        return str.replace(/ō/g, '-');
    });
}

/*--------------------------------------------------
 * JSONデータをパースする
 --------------------------------------------------*/
function parseJson(j_data) {
    if (j_data === '') {
        return;
    }
    // 内容をチェック。エラーがあったらアラート表示して処理を終了する
    checkAjaxData(j_data);
    // パースして返す
    return JSON.parse(j_data);
}

/*--------------------------------------------------
 * 内容をチェック。エラーがあったらアラート表示して処理を終了する
 --------------------------------------------------*/
function checkAjaxData(j_data) {
    if (j_data.match(/PDO_ERROR|Notice|Warning|Parse error|Fatal error|PDO error|fetal error|Unknown column/)) {
        // エラーがあったらalert
        if (debug) {
            alert(j_data);
        } else {
        }
        return false;
    }
    return true;
}

/*--------------------------------------------------
 * 実行中イメージ
 --------------------------------------------------*/

// 表示
function showLoadingImg() {
    var str = '<img src="/common/images/gif_load.gif" id="img_loading" class="display_center"><div id="overlay"></div>';
    $('body').append(str);
    // 画面ロック
    $('#overlay').css('z-index', '999').css('position', 'fixed').css('width', '100%').css('height', '100%').css('top', 0).css('left', 0);
}

// 非表示
function hideLoadingImg() {
    $("#img_loading").remove();
    $("#overlay").remove();
}

$('span[href]').on('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    let _href = $(this).attr('href');
    location.href = _href;
});


/*--------------------------------------------------
 * radiobox checked CSS on off
 --------------------------------------------------*/
$('.radio').change(function () {
    $(this).closest('td').find('label').removeClass('checked');
    console.log($(this).prop('checked'));
    if ($(this).prop('checked') === !0) {
        $(this).parent('.radio_label').addClass('checked');
    }
});


//-----------------------------
// page top
//-----------------------------
let topBtn = $('#page_top');
//ボタンを非表示にする
topBtn.hide();
//スクロールしてページトップから100に達したらボタンを表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        //フェードインで表示
        topBtn.fadeIn();
    } else {
        //フェードアウトで非表示
        topBtn.fadeOut();
    }
});
//スクロールしてトップへ戻る
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//-----------------------------
// menu active
//-----------------------------
let mypage = location.href.replace(window.location.protocol + '//' + document.domain, '');
let myclass = mypage.replace(/\//g, '');
myclass = 'menu_' + myclass.replace(/udon/, '');
//console.log(myclass);
$('.' + myclass).addClass('active');


// 乱数
function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// sleep (5秒, 5000）
function sleep(sec) {
    let dt1 = new Date().getTime();
    let dt2 = new Date().getTime();
    while (dt2 < dt1 + sec) {
        dt2 = new Date().getTime();
    }
    return;
}

/*-----------------------------
 * reset
 */
$('#js_reset').click(function () {
    let url = location.href;
    // if(typeof $('#query')!='undefined'){
    //     url = url + '?'+$('#query').html();
    // }
    location.href = url;
});
$('#js_reset_confirm').click(function () {
    openConfirm('もういっかい？', function(){
        location.reload();
    });
});
/*-----------------------------
 * タイマー
 */
let startTime = null;   // timer
let timer_id;
let isPlay = false;
function runTimer() {
    // startTime = Date.now();
    $('#timer').html(((Date.now() - startTime) / 1000).toFixed(2));
    timer_id = setTimeout(runTimer, 12);
}

// ゼロ埋め
function zero_padding(t, len) {
    return ('0' + t).slice(-len);
}
// スロール禁止
function handleTouchMove(event) {
    event.preventDefault();
}