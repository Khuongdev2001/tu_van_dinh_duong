$(document).ready(function() {
    $("body").lazyScrollLoading({
        lazyItemSelector : ".lazyloading , .about_SH",
        onLazyItemVisible : function(e, $lazyItems, $visibleLazyItems) {
            $visibleLazyItems.each(function() {
                $(this).addClass("show");
            });
        }
    });
});
$(document).ready(function() {
    $('#vnt-banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 15000,
    });
});
$(document).ready(function(){
    $('#sliderProd').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1500,
        dots: true,
        customPaging: function (slider, i) {
            return '<button><div class="sImg"><img src="' + $(slider.$slides[i]).attr("data-img") + '"/><img class="imgHover" src="' + $(slider.$slides[i]).attr("data-img-active") + '"/></div><div class="sText">'+ $(slider.$slides[i]).attr("data-text") +'</div></button>';
        }
    });
});
$(document).ready(function(){
    $('#divNews').slick({
        slidesToShow:2,
        slidesToScroll: 2,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: false,
    });
});
$(document).ready(function(){
    $('#slider_idea').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: false,
    });
});
$(document).ready(function(){
    var $heightMenu = 65;
    $(".linkScroll").click(function(){
        var $getattr = $(this).attr("data-href");
        if(typeof $($getattr).offset() == 'object'){
            var $getOffset = parseInt($($getattr).offset().top);
            var $scrollBar = $(window).scrollTop();
            if ($getOffset > $scrollBar){
                scroll_top($getOffset,1000,parseInt($getOffset - $heightMenu),500);
            }else{
                scroll_top($getOffset - (2 * $heightMenu),1000,parseInt($getOffset - $heightMenu),500);
            }
            return false;
        }
    });
    function scroll_top(giatri1,thoigian1,giatri2,thoigian2){
        $('html,body').stop().animate({scrollTop: giatri1 + 'px'},thoigian1).animate({scrollTop: giatri2 + 'px'},thoigian2);
    }
});
function cityChange(city_value,lang)
{
    var mydata =  "city="+city_value+'&lang='+lang;
    $.ajax({
        async: true,
        url: ROOT+"modules/dealer/ajax/ajax.php?do=option_state",
        type: 'POST',
        data: mydata ,
        success: function (html) {
            $("#dealer_state").html(html) ;
        }
    });


}
function Search(f,lang)
{
    var city =f.dealer_city.value;
    var state =f.dealer_state.value;
    var key = f.key.value;
    var url =f.dealer.value;
    if(city == 0 && key == '' )
        alert('Báº¡n chÆ°a nháº­p Ä‘á»‹a chá»‰ Ä‘áº¡i lÃ½');
    else
    {
        top.location.href=url+'/?dealer_city='+city+'&dealer_state='+state+'&key='+key+'&lang='+lang;
    }

    return false;

}$(document).ready(function() {
    $("body").lazyScrollLoading({
        lazyItemSelector : ".lazyloading , .about_SH",
        onLazyItemVisible : function(e, $lazyItems, $visibleLazyItems) {
            $visibleLazyItems.each(function() {
                $(this).addClass("show");
            });
        }
    });
});
$(document).ready(function() {
    $('#vnt-banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 15000,
    });
});
$(document).ready(function(){
    $('#sliderProd').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1500,
        dots: true,
        customPaging: function (slider, i) {
            return '<button><div class="sImg"><img src="' + $(slider.$slides[i]).attr("data-img") + '"/><img class="imgHover" src="' + $(slider.$slides[i]).attr("data-img-active") + '"/></div><div class="sText">'+ $(slider.$slides[i]).attr("data-text") +'</div></button>';
        }
    });
});
$(document).ready(function(){
    $('#divNews').slick({
        slidesToShow:2,
        slidesToScroll: 2,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: false,
    });
});
$(document).ready(function(){
    $('#slider_idea').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        dots: false,
    });
});
$(document).ready(function(){
    var $heightMenu = 65;
    $(".linkScroll").click(function(){
        var $getattr = $(this).attr("data-href");
        if(typeof $($getattr).offset() == 'object'){
            var $getOffset = parseInt($($getattr).offset().top);
            var $scrollBar = $(window).scrollTop();
            if ($getOffset > $scrollBar){
                scroll_top($getOffset,1000,parseInt($getOffset - $heightMenu),500);
            }else{
                scroll_top($getOffset - (2 * $heightMenu),1000,parseInt($getOffset - $heightMenu),500);
            }
            return false;
        }
    });
    function scroll_top(giatri1,thoigian1,giatri2,thoigian2){
        $('html,body').stop().animate({scrollTop: giatri1 + 'px'},thoigian1).animate({scrollTop: giatri2 + 'px'},thoigian2);
    }
});
function cityChange(city_value,lang)
{
    var mydata =  "city="+city_value+'&lang='+lang;
    $.ajax({
        async: true,
        url: ROOT+"modules/dealer/ajax/ajax.php?do=option_state",
        type: 'POST',
        data: mydata ,
        success: function (html) {
            $("#dealer_state").html(html) ;
        }
    });


}
function Search(f,lang)
{
    var city =f.dealer_city.value;
    var state =f.dealer_state.value;
    var key = f.key.value;
    var url =f.dealer.value;
    if(city == 0 && key == '' )
        alert('Báº¡n chÆ°a nháº­p Ä‘á»‹a chá»‰ Ä‘áº¡i lÃ½');
    else
    {
        top.location.href=url+'/?dealer_city='+city+'&dealer_state='+state+'&key='+key+'&lang='+lang;
    }

    return false;

}