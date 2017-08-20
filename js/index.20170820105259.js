(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', 'images/gradient-background-1200.jpg');}else if($(window).width()>=960){$('.js').attr('src', 'images/gradient-background-960.jpg');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? 'images/gradient-background-1536.jpg' : 'images/gradient-background-768.jpg');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/gradient-background-960.jpg' : 'images/gradient-background-480.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/gradient-background-640.jpg' : 'images/gradient-background-320.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});