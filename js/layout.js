if ($(window).width() > 1099) {

    //pc gnb
    $(document).on("mouseenter focus", "#gnb > ul > li > a", function () {
        $(this).parent().addClass("gnb_on").children("ul").slideDown(300).siblings().removeClass("gnb_on");
    }).on("mouseleave", "#gnb > ul > li", function () {
        $(this).removeClass("gnb_on").children("ul").slideUp(300);
	});

}else{

    // mobile gnb
    $(document).on("click", ".gnb_dep > li > a", function (){
        $(this).next("ul").slideToggle().parent("li").toggleClass("gnb_on");
        return false;
    }).on("click", ".gnb_2dep > li > a", function () {
        $(this).next("ul").slideToggle().parent("li").toggleClass("gnb_on");
        return false;
    });
    
}

// mobile btn
$(document).on("click", ".m_gnbOpen", function () {
    $(this).hide();
    $(".m_gnbClose").show();
    $("#gnb").show();
    $(".mask").show();
});
$(document).on("click", ".m_gnbClose", function () {
    $(this).hide();
    $(".m_gnbOpen").show();
    $("#gnb").hide();
    $(".mask").hide();
});