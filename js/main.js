$(document).ready(function(){

    // visual_slide
	$("#slide_counter01").prepend('<span class="current_index"></span>');

	var visual_slide_thumb = $("#visual_slide_thumb").bxSlider({
        moveSlides: 1,
		speed: 500,
		auto: true,
        controls: false,
        infiniteLoop : true,
        autoControls:false,
        pager: false,
        touchEnabled : (navigator.maxTouchPoints > 0),
		onSliderLoad: function (currentIndex){
            var c_index = currentIndex + 1
            $("#slide_counter01 .current_index").text("0" + c_index);
		},
		onSlideBefore: function ($slideElement, oldIndex, newIndex){
			var n_index = newIndex + 1
            $("#slide_counter01 .current_index").text("0" + n_index);
		}
	});
	
	if ($(".visual_slide_total").length) {
		$(".visual_slide_total").append(visual_slide_thumb.getSlideCount());
	}

    $(".visual_slide_control #slider_prev").on("click", function () {
    	visual_slide_thumb.stopAuto();
        visual_slide_thumb.goToPrevSlide();
        return false;
    });

    $(".visual_slide_control #slider_next").on("click", function () {
    	visual_slide_thumb.stopAuto();
        visual_slide_thumb.goToNextSlide();
        return false;
    });

    $(".visual_slide_control #slider_stop").on("click",function(){
        visual_slide_thumb.stopAuto();
        return false;
    });

    $(".visual_slide_control #slider_play").on("click",function(){
        visual_slide_thumb.startAuto();
        return false;
    });

    $(".visual_slide_control #slider_play").click(function(){
        $(".visual_slide_control #slider_stop").css("display" , "block");
        $(".visual_slide_control #slider_play").hide();
    });

    $(".visual_slide_control #slider_stop").click(function(){
        $(".visual_slide_control #slider_stop").hide();
        $(".visual_slide_control #slider_play").css("display" , "block");
    });

    $(".gnb_dep > li:last > a ").keydown(function (e) {
    	if(e.keyCode == 9 && !e.shiftKey ){
    	    $("#visual_slide_thumb div a").focusin(function () {
    	        visual_slide_thumb.goToSlide(0);
    	        visual_slide_thumb.stopAuto();
    	        $(".visual_slide_control #slider_stop").hide();
    	        $(".visual_slide_control #slider_play").css("display" , "block");
    	        return false;
    	    });
    	}
    });

    // work_tab
	$(".work_tab_list dt a").click(function () {
        $(this).parent("dt").addClass("on").siblings("dt").removeClass("on");
        return false;
    });

    // news_tab
    $(".news_tab_list dt a").click(function () {
        $(this).parent("dt").addClass("on").siblings("dt").removeClass("on");
        return false;
    });

    // 기관별일자리사업 슬라이드
    var work_slide = $("#work_slide").bxSlider({
        maxSlides: 5,
        slideWidth: 350,
        slideMargin: 25,
        moveSlides: 1,
        speed: 500,
        auto: true,
        controls: false,
        infiniteLoop : true,
        autoControls:false,
        pager: true ,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    $(".work_slide_btn #slider_prev").on("click", function () {
        work_slide.stopAuto();
        work_slide.goToPrevSlide();
        return false;
    });

    $(".work_slide_btn #slider_next").on("click", function () {
        work_slide.stopAuto();
        work_slide.goToNextSlide();
        return false;
    });
    
    $(".work_slide_more").keydown(function (e) {
        if(e.keyCode == 9 && !e.shiftKey ){
            $("#work_slide div a").focusin(function () {
                work_slide.goToSlide(0);
                work_slide.stopAuto();
                return false;
            });
        }
    });

});

