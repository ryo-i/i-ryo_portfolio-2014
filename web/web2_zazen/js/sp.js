// JavaScript Document

//jQuery開始
$(function() {



//ドロワーメニュー
        $("body").mobile_menu({
            menu: ['#nav1 ul'],
            menu_width: 200,
            prepend_button_to: '#mobile-bar',
            button_content:'<img src="img/menu_icon.png" width="20" height="20" alt="メニューアイコン画像">'
        });
	
			
//リサイズでリロード
    var timer = false; //リサイズ終了フラグ
    $(window).on("load resize", ReLayout); //リサイズもしくはロードされた時にReLayout呼び出し
 
    function ReLayout() {
        var _width = $(window).width(); //画面サイズ取得
         
        //画面サイズ640以下の時の処理
        if(_width <= 640) {
            //処理を記述
        }
         
         
        //リサイズ終了時のみリロードする
        if(event.type == 'resize') {
            if (timer !== false) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                location.href = location.href; //リロード
            }, 200);
        }
         
    }


//slider
	$('#slider3').bxSlider({
		auto:true,
		speed:1000,
		mode: 'horizontal',
		captions: false
	});

//ページトップ
	var topBtn = $('#pageTop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });


//商品ページスライダー（サムネ付）
$('.bxslider1').bxSlider({  pagerCustom: '#bx-pager'});


//jQuery終了	
	}); 