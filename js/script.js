!function(e){"use strict";(new WOW).init();var t=e("#clock").data("date");e("#clock").countdown(t,(function(t){e(this).html(t.strftime("<ul><li><span>%D<em>days</em></span></li><li><span>%H<em>hours </em></span></li><li><span>%M<em>minutes</em></span></li><li><span>%S<em>seconds</em></span></li></ul>"))})),e(".brand-logos").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4500,margin:10,nav:!1,dots:!1,responsiveClass:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:4}}}),e(".roadmap-slider").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:6e3,margin:0,nav:!1,dot:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:4},1350:{items:5}}}),e(".horizontal-roadmap").owlCarousel({loop:!1,autoplay:!1,autoplayTimeout:6e3,margin:10,nav:!1,dot:!0,mouseDrag:!1,responsiveClass:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:4},1200:{items:6}}}),e(".mercury-roadmap").owlCarousel({loop:!1,autoplay:!1,autoplayTimeout:6e3,margin:10,nav:!1,dot:!0,mouseDrag:!1,responsiveClass:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3},1200:{items:5}}}),e(".blog-slider.with-navigation").owlCarousel({loop:!1,autoplay:!0,autoplayTimeout:6e3,margin:0,nav:!0,dot:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:2,nav:!0},1350:{items:3,nav:!0}}}),e(".blog-slider").owlCarousel({loop:!1,autoplay:!0,autoplayTimeout:6e3,margin:0,nav:!1,dot:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:2},1350:{items:3}}}),e(".services-slider").owlCarousel({loop:!1,autoplay:!0,autoplayTimeout:6e3,margin:0,nav:!1,dot:!0,responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:2},1350:{items:3}}}),e(".expert-slider").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:6e3,margin:0,nav:!0,dot:!1,animateOut:"fadeOut",animateIn:"fadeIn",responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1},1350:{items:1}}}),e(".teamslider").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:6e3,margin:20,nav:!0,dot:!1,responsiveClass:!0,responsive:{0:{items:1,dot:!1},600:{items:2,dot:!1},1e3:{items:3,dot:!1},1350:{items:3,dot:!1}}}),e(".roadmap-live-slider").length&&e(".roadmap-live-slider").slick({centerMode:!0,slidesToShow:5,arrows:!0,dots:!1,responsive:[{breakpoint:1199,settings:{arrows:!0,dots:!1,centerMode:!0,slidesToShow:3}},{breakpoint:768,settings:{arrows:!0,dots:!1,centerMode:!0,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,dots:!0,centerMode:!0,slidesToShow:1}}]}),e(window).width()<767&&jQuery(".menu-icon").on("click",(function(){jQuery(this).toggleClass("active"),jQuery("nav").slideToggle(),jQuery("nav ul li a").on("click",(function(){jQuery(".menu-icon").removeClass("active"),jQuery("nav").hide()}))})),setTimeout((function(){jQuery(".video-section").addClass("loaded")}),1500),e(".fancybox-media").length&&e(".fancybox-media").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}}})}(jQuery),equalheight=function(e){var t,o=0,i=0,s=new Array;$(e).each((function(){if(t=$(this),$(t).height("auto"),topPostion=t.position().top,i!=topPostion){for(currentDiv=0;currentDiv<s.length;currentDiv++)s[currentDiv].height(o);s.length=0,i=topPostion,o=t.height(),s.push(t)}else s.push(t),o=o<t.height()?t.height():o;for(currentDiv=0;currentDiv<s.length;currentDiv++)s[currentDiv].height(o)}))},$(window).load((function(){equalheight(".benefit-box")})),$(window).resize((function(){equalheight(".benefit-box")}));var a=0;$(window).scroll((function(){if($("#counter").length>0){var e=$("#counter").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>e&&($(".counter-value").each((function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})})),a=1)}})),$(document).ready((function(e){function t(){e(".progressbar").each((function(){var t=e(this).offset().top,o=e(window).scrollTop(),i=e(this).find(".circle").attr("data-percent"),s=(parseInt(i,10),parseInt(100,10),e(this).data("animate"));t<o+e(window).height()-100&&!s&&(e(this).data("animate",!0),e(this).find(".circle").circleProgress({startAngle:-Math.PI/2,value:i/100,thickness:10,size:160,emptyFill:"#a5a5a4",fill:{color:"#fbbd17"}}).on("circle-animation-progress",(function(t,o,i){e(this).find("div").text((100*i).toFixed(1)+"%")})).stop())}))}t(),e(window).scroll(t)})),$(document).ready((function(e){function t(){e(".benefit-section").length>0&&(e(".benefit-section").offset().top<e(window).scrollTop()+e(window).height()/3&&e(".benefit-section").addClass("start-animation"))}t(),e(window).scroll(t)}));