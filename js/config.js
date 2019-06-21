(function () {
    function logEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute('data-src'), element.getAttribute('src'));
    }

    var callback_enter = function (element) {
        logEvent("ENTERED", element);
    };
    var callback_load = function (element) {
        logEvent("LOADED", element);
    };
    var callback_set = function (element) {
        logEvent("SET", element);
    };
    var callback_error = function (element) {
        logEvent("ERROR", element);
        element.src = "https://placehold.it/220x280?text=Placeholder";
    };

    var llWebp = new LazyLoad({
        elements_selector: ".lazy.has-webp",
        to_webp: true,
        callback_enter: callback_enter,
        callback_load: callback_load,
        callback_set: callback_set,
        callback_error: callback_error
    });
    var llStandard = new LazyLoad({
        elements_selector: ".lazy:not(.has-webp)",
        callback_enter: callback_enter,
        callback_load: callback_load,
        callback_set: callback_set,
        callback_error: callback_error
    });
}());


$(window).scroll(function() {
//    var bodyhight = $('body').outerHeight(true)-;
//    var scrollbottom = $(this).scrollTop();
//    console.log((bodyhight-scrollbottom)/100);
    
    
    var CoHeight = $('.test').height(); //ページ全体の高さ代入
    var Scrolly = $(window).scrollTop(); //スクロール位置代入
    var hosei =$(window).height()/100;
    var percent1 = CoHeight / 100; //1%を計算
    var percentAll = (Scrolly*1.1) / percent1; //スクロール位置を1％で割る＆誤差補正
    var percentFin = Math.round(percentAll); //小数点を四捨五入
    if( percentFin > 100 ) percentFin = 100; //100%以上加算されないように制御
    $(".border").css("width",percentFin+"%");
    
    var bairitu_w = percentFin*7.5;
    var parentsquarewidth = 1100 + bairitu_w;
    if( parentsquarewidth > $(window).width() ) parentsquarewidth = $(window).width();
    $(".square").css("width",+ parentsquarewidth+ "");

    var bairitu_h = percentFin*7.5;
    var parentsquareheight = 300 + bairitu_h;
    if( parentsquareheight > $('.test').height() ) parentsquareheight = $('.test').height();
    $(".square").css("height",+ parentsquareheight+ "");
});