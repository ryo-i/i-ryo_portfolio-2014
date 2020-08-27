// JavaScript Document

// jQueryですよー宣言
$(function(){


//ページスクロール
// #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'easeOutCirc');
      return false;
   });



//メニューのフェード
$("#logo a img").hover(
  function () {
    $(this).stop().fadeTo(200, .4);
  },
  function () {
    $(this).stop().fadeTo(400, 1);
  }
);


  $(".menu li a").hover(
    function () {
      $(this).stop().fadeTo(200, .4);
    },
    function () {
      $(this).stop().fadeTo(400, 1);
    }
  );



//クモの動き
$(window).load(function(){
		$("#kumo img").animate({
			"marginTop":"0%"},2000,"easeOutBounce")
});


//h2のボカシ
$("h2").foggy({
   blurRadius: 2,          // In pixels.
   opacity: 0.8,           // Falls back to a filter for IE.
   cssFilterSupport: true  // Use "-webkit-filter" where available.
 }); 


$("h2").hover(
  function () {
$(this).foggy(false);
   }, 
  function () {
$(this).foggy({
   blurRadius: 2,          // In pixels.
   opacity: 0.8,           // Falls back to a filter for IE.
   cssFilterSupport: true  // Use "-webkit-filter" where available.
 }); 
   }
);


//クリックでリロード
$(".reload").click(function() {
location.reload(); 
});


//サムネの半透明
$(".thum a img").hover(
  function () {
    $(this).stop().fadeTo(200, .4);
  },
  function () {
    $(this).stop().fadeTo(400, 1);
  }
);



//fancybox
	$(".various").fancybox({
		maxWidth	: '85%',
		maxHeight	: '85%',
		minWidth	: '250',
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

		prevEffect		: 'fade',
		nextEffect		: 'fade',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});



});
// jQueryですよー宣言（ここまで）
