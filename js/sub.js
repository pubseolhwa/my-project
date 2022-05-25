$(document).ready(function(){

    // sidebar
    snbSetting();

    function snbSetting() {
        $("#snb ul ul").each(function () {
            $(this).parent("li").addClass("collapse");
        });
        $("#snb li.on").each(function () {
            $(this).parentsUntil($("#snb"), "li").addClass("on");
        });
        $("#snb li.on > ul").each(function () {
            $(this).show();
        });
    }
    $(document).on("click", "#snb .collapse > a", function () {
        $(this).next("ul").slideToggle().parent("li").toggleClass("on").siblings("li").removeClass("on").children("ul").slideUp();
        return false;
    });

    // 상세검색 열기/닫기
    $(".bbs_detail_btn a").click(function() {
        if(!$(this).hasClass("on")) {
            $(".bbs_work_search_detail").slideDown(300);
            $(this).addClass("on");
            $(this).html("상세검색 닫힘");
        } else {
            $(".bbs_work_search_detail").slideUp(300);
            $(this).removeClass("on");
            $(this).html("상세검색 펼침");
        }
        return false;
    });

    // 세부검색영역 열기/닫기
    $(".categoryOpen").on("click", function() {
        var $this = $(this),
            $Parent = $this.parent("li"),
            IsActive = $Parent.is(".active"),
            $Layer = $this.siblings(".category_Layer");
        if(!IsActive){
            $Parent.addClass("active");
            $this.attr("title", "닫기");
            $Layer.slideDown(300);
        } else{
            $Parent.removeClass("active");
            $this.attr("title", "열기");
            $Layer.slideUp(300);
        };
    });
    $(".categoryClose").on("click", function() {
        var $this = $(this),
            $Parent = $this.parents().parents("li"),
            $Layer = $this.parents(".category_Layer"),
            $categoryOpen_btn = $(".categoryOpen");
        $Layer.slideUp(300, function() {
            $Parent.removeClass("active");
            $categoryOpen_btn.attr("title", "열기").focus();
        });
    });

    // qna
	$(".qna_content").each(function () {
		if($(this).css("display") == "block"){
			$(this).siblings(".qna_title").append("<a href='#none' class='qna_toggle_btn'>닫기</a>");
		}else{
			$(this).siblings(".qna_title").append("<a href='#none' class='qna_toggle_btn closed'>열기</a>");
		}
	});
	$(document).on("click", ".qna_toggle_btn", function () {
		$(this).hasClass("closed") ? $(this).text("닫기") : $(this).text("열기");
		$(this).toggleClass("closed").parent().next(".qna_content").stop().slideToggle();
        $(this).parent().parent(".qna_toggle").toggleClass("open");
		return false;
	});

});