!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";t.fn.percircle=function(e){var s={animate:!0};e||(e={}),t.extend(e,s);var o=3.6;return this.each(function(){t(this).hasClass("gt50")&&t(this).removeClass("gt50");var s=t(this),n="",d=function(t,e){s.on("mouseover",function(){t.children("span").css("color",e)}),s.on("mouseleave",function(){t.children("span").attr("style","")})};s.hasClass("percircle")||s.addClass("percircle"),"undefined"!=typeof s.attr("data-animate")&&(e.animate="true"==s.attr("data-animate")),e.animate&&s.addClass("animate"),"undefined"!=typeof s.attr("data-progressBarColor")?(e.progressBarColor=s.attr("data-progressBarColor"),n="style='border-color: "+e.progressBarColor+"'",d(t(this),e.progressBarColor)):"undefined"!=typeof e.progressBarColor&&(n="style='border-color: "+e.progressBarColor+"'",d(t(this),e.progressBarColor));var i=s.attr("data-percent")||e.percent||0,c=s.attr("data-perclock")||e.perclock||0,l=s.attr("data-perdown")||e.perdown||0;if(i){i>50&&s.addClass("gt50");var f=s.attr("data-text")||e.text||i+"%";s.html("<span>"+f+"</span>"),t('<div class="slice"><div class="bar" '+n+'></div><div class="fill" '+n+"></div></div>").appendTo(s),i>50&&t(".bar",s).css({"-webkit-transform":"rotate(180deg)","-moz-transform":"rotate(180deg)","-ms-transform":"rotate(180deg)","-o-transform":"rotate(180deg)",transform:"rotate(180deg)"});var m=o*i;setTimeout(function(){t(".bar",s).css({"-webkit-transform":"rotate("+m+"deg)","-moz-transform":"rotate("+m+"deg)","-ms-transform":"rotate("+m+"deg)","-o-transform":"rotate("+m+"deg)",transform:"rotate("+m+"deg)"})},0)}else c?(s.hasClass("perclock")||s.addClass("perclock"),setInterval(function(){var e=new Date,r=a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds());s.html("<span>"+r+"</span>"),t('<div class="slice"><div class="bar" '+n+'></div><div class="fill" '+n+"></div></div>").appendTo(s);var o=e.getSeconds();0===o&&s.removeClass("gt50"),o>30&&(s.addClass("gt50"),t(".bar",s).css({"-webkit-transform":"rotate(180deg);scale(1,3)","-moz-transform":"rotate(180deg);scale(1,3)","-ms-transform":"rotate(180deg);scale(1,3)","-o-transform":"rotate(180deg);scale(1,3)",transform:"rotate(180deg);scale(1,3)"}));var d=6*o;t(".bar",s).css({"-webkit-transform":"rotate("+d+"deg)","-moz-transform":"rotate("+d+"deg)","-ms-transform":"rotate("+d+"deg)","-o-transform":"rotate("+d+"deg)",transform:"rotate("+d+"deg)"})},1e3)):l&&r(s,e,n)})};var r=function(e,r,a){function s(){if(c-=1,c>30&&e.addClass("gt50"),c<30&&e.removeClass("gt50"),i(),c<=0)return n(),void e.html("<span>"+l+"</span>")}function o(){m=setInterval(s,1e3)}function n(){clearInterval(m)}function d(){n(),c=r.secs,i(),o()}function i(){e.html("<span>"+c+"</span>"),t('<div class="slice"><div class="bar" '+a+'></div><div class="fill" '+a+"></div></div>").appendTo(e);var r=6*c;t(".bar",e).css({"-webkit-transform":"rotate("+r+"deg)","-moz-transform":"rotate("+r+"deg)","-ms-transform":"rotate("+r+"deg)","-o-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"})}var c=e.attr("data-secs")||r.secs,l=e.attr("data-timeUpText")||r.timeUpText,f=e[0].hasAttribute("data-reset")||r.reset;l.length>8&&(l="the end");var m;f&&e.on("click",d),o()},a=function(t){return t<10?"0"+t:t}});




$(document).ready(function () {


    $('.portfolio_grid').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Загружается #%curr%...',
      removalDelay: 300,
      closeOnContentClick: !0,
      mainClass: 'mfp-img-mobile',
      fixedContentPos : false,
      fixedBgPos      : false,
      tClose: 'Закрыть (Esc)',
      gallery: {
        tPrev: 'Предыдущий (левая клавиша на клавиатуре)',
        tNext: 'Следующий (правая клавиша на клавиатуре)',
        tCounter: '%curr% из %total%',
        enabled: true,
        navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
      tError: '<a href="%url%">Изображение не загружено.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>Васильченко Игорь</small>';
    },
        zoom: {
            enabled: !0,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        }
}
});



    var iconBx = document.querySelectorAll('.iconBx');
    var contentBx = document.querySelectorAll('.contentBx');

    for( let i=0; i<iconBx.length; i++) {
        iconBx[i].addEventListener('mouseover', function(){
           for( let i=0; i<contentBx.length; i++) {
            contentBx[i].className='contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';

        for( let i=0; i<iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className='iconBx active';

    })
    }


// код для первого блока FAQ
$('.spoler_title1').click(function(){
	$(this).toggleClass('active').next().slideToggle(300);
});


// код для первого блока FAQ
$('.spoler_title2').click(function(event){

	if ($('.spoler_block_one').hasClass('one')) {
        $('.spoler_title2').not($(this)).removeClass('one');
        $('.spoler_text').not($(this).next()).slideUp(300);
    };
    $(this).toggleClass('active').next().slideToggle(300);

});

// код для первого блока FAQ
$('.spoler_title3').click(function(event){

	if ($('.spoler_block_two').hasClass('two')) {
        $('.spoler_title3').not($(this)).removeClass('two');
        $('.spoler_text').not($(this).next()).slideUp(300);
    };
    $(this).toggleClass('active').next().slideToggle(300);

});


$.each($('.checkbox'), function(index, val) {
	if($(this).find('input').prop('checked')==true) {
		$(this).addClass('active');
	}
});

$(document).on('click', '.checkbox', function(event) {
	if($(this).hasClass('active')) {
        $(this).find('input').prop('checked', false).removeAttr('checked');
    } else {
        $(this).find('input').prop('checked', true).attr('checked', 'checked');
    }
    $(this).toggleClass('active');
    return false;
});

$.each($('.radiobuttons__item'), function(index, val) {
	if($(this).find('input').prop('checked')==true) {
		$(this).addClass('active');
	}
});

$(document).on('click', '.radiobuttons__item', function(event) {
    $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
    $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
});


const contenting = document.querySelector('.contenting');
window.onmousemove = function(e) {
	var x = - e.clientX/5;
	var y = - e.clientY/5;
    contenting.style.backgroundPositionX = x + 'px' ;
    contenting.style.backgroundPositionY = y + 'px' ;
}

const headerParallax = document.getElementById('header_parallax');
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    headerParallax.style.backgroundPositionY = offset * 0.7 + 'px ';
})




$('.header__burger').click(function(e){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
});

$('#toggle__menu').on('click', function() {
	$(this).toggleClass('active');
	$('#fullpageMenuRules').toggleClass('active');
});




var hamburgerNew = document.querySelector(".hamburgerNew");
hamburgerNew.addEventListener("click", function() {
   this.classList.toggle("is-active");
});




$('#toggleIcon').click(function(e){
    $('#menu-overlay').toggleClass('active');
    $('body').toggleClass('locked');
});



// For jQuery
var myWave = $('#myID').wavify({
  height: 560,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
});

$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value

    $("#logo").css("transform",'translate(0px,-'+scrollval/6+'%)');
    $("#btn").css("transform",'translate(50%,-'+scrollval/4+'%)');
});



// круговая диаграмма
(function ( $ ) {

    var global_settings = {};

    var methods = {
        init : function(options) {
            // This is the easiest way to have default options.
            var settings = $.extend({
                // These are the defaults.
                color: "#000000",
                height: "300px",
                width: "300px",
                line_width: 8,
                starting_position: 25,
                percent: 100,
                counter_clockwise: false,
                percentage: true,
                text: ''
            }, options );
            global_settings = settings;


            // Create percentage
            var percentage = $("<div class='progress-percentage'></div>");

            if(!global_settings.percentage) {
                percentage.text(global_settings.percentage);
            }
            $(this).append(percentage);


            // Create text
            var text = $("<div class='progress-text'></div>");

            // Custom text
            if(global_settings.text != "percent") {
                text.text(global_settings.text);
            }
            $(this).append(text);

            // Correct any invalid values
            if(global_settings.starting_position != 100) {
                global_settings.starting_position = global_settings.starting_position % 100;
            }
            if(global_settings.ending_position != 100) {
                global_settings.ending_position = global_settings.ending_position % 100;
            }
            // No 'px' or '%', add 'px'
            appendUnit(global_settings.width);
            appendUnit(global_settings.height);

            // Apply global_settings
            $(this).css({
                "height": global_settings.height,
                "width": global_settings.width
            });
            $(this).addClass("circular-progress-bar");

            // Remove old canvas
            $(this).find("canvas").remove();

            // Put canvas inside this
            $(this).append(createCanvas($(this)));

            // Return allows for chaining
            return this;
        },
        percent : function(value) {
            // Change percent
            global_settings.percent = value;
            // Apply global_settings
            $(this).css({
                "height": global_settings.height,
                "width": global_settings.width
            });
            // Remove old canvas
            $(this).children("canvas").remove();
            // Put canvas inside this
            $(this).append(createCanvas($(this)));

            // Return allows for chaining
            return this;
        },
        animate : function(value, time) {
            // Apply global_settings
            $(this).css({
                "height": global_settings.height,
                "width": global_settings.width
            });

            // Number of intervals, 10ms interval
            var num_of_steps = time / 10;
            // Amount of change each step
            var percent_change = (value - global_settings.percent) / num_of_steps;

            // Variable conflict, rename this
            var scope = $(this);
            var theInterval = setInterval(function() {
                if(global_settings.percent < value) {
                    // Remove old canvas
                    scope.children("canvas").remove();
                    // Increment percent
                    global_settings.percent += percent_change;
                    // Put canvas inside this
                    scope.append(createCanvas(scope));
                } else {
                    clearInterval(theInterval);
                }
            }, 10);

            // Return allows for chaining
            return this;
        }
    };

    $.fn.circularProgress = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            // Method found
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init", object passed in or nothing passed in
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' +  methodOrOptions + ' does not exist.');
        }
    };

    /* =========================================================================
        PRIVATE FUNCTIONS
        ========================================================================= */

    // return string without 'px' or '%'
    function removeUnit(apples) {
        if(apples.indexOf("px")) {
            return apples.substring(0, apples.length - 2);
        } else if(canvas_height.indexOf("%")) {
            return apples.substring(0, apples.length - 1);
        }
    };
    // return string with 'px'
    function appendUnit(apples) {
        if(apples.toString().indexOf("px") < -1 && apples.toString().indexOf("%") < -1) {
            return apples += "px";
        }
    };
    // calculate starting position on canvas
    function calcPos(apples, percent) {
        if(percent < 0) {
            // Calculate starting position
            var starting_degree = (parseInt(apples) / 100) * 360;
            var starting_radian = starting_degree * (Math.PI / 180);
            return starting_radian - (Math.PI / 2);
        } else {
            // Calculate ending position
            var ending_degree = ((parseInt(apples) + parseInt(percent)) / 100) * 360;
            var ending_radian = ending_degree * (Math.PI / 180);
            return ending_radian - (Math.PI / 2);
        }
    };
    // Put percentage or custom text inside progress circle
    function insertText(scope) {
        $(".progress-percentage").text(Math.round(global_settings.percent) + "%");
    }
    // create canvas
    function createCanvas(scope) {
        // Remove 'px' or '%'
        var canvas_height = removeUnit(global_settings.height.toString());
        var canvas_width = removeUnit(global_settings.width.toString());

        // Create canvas
        var canvas = document.createElement("canvas");
        canvas.height = canvas_height;
        canvas.width = canvas_width;

        // Create drawable canvas and apply properties
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = global_settings.color;
        ctx.lineWidth = global_settings.line_width;

        // Draw arc
        ctx.beginPath();

        // Calculate starting and ending positions
        var starting_radian = calcPos(global_settings.starting_position, -1);
        var ending_radian = calcPos(global_settings.starting_position, global_settings.percent);
        // Calculate radius and x,y coordinates
        var radius = 0;
        var xcoord = canvas_width / 2;
        var ycoord = canvas_height / 2;
        // Height or width greater
        if(canvas_height >= canvas_width) {
            radius = canvas_width * 0.9 / 2 - (global_settings.line_width * 2);
        } else {
            radius = canvas_height * 0.9 / 2 - (global_settings.line_width * 2);
        }

        /*
            x coordinate
            y coordinate
            radius of circle
            starting angle in radians
            ending angle in radians
            clockwise (false, default) or counter-clockwise (true)
            */
            ctx.arc(xcoord, ycoord, radius, starting_radian, ending_radian, global_settings.counter_clockwise);
            ctx.stroke();

        // Add text
        if(global_settings.percentage) {
            insertText(scope);
        }

        return canvas;
    };

}( jQuery ));

$(".my-progress-bar").circularProgress({
    line_width: 6,
    color: "#ccc",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "More power behind every pixel"
    }).circularProgress('animate', 54, 5000);

//конец


// var windowWidth = $(window).width();
// $('.front').mousemove(function(e) {
// var moveX =(($(window).width() / 2) - e.pageX) * 0.1;
// var moveY =(($(window).height() / 2) - e.pageY) * 0.1;

// $('.block').css('margin-left', moveX + 'px');
// $('.block').css('margin-top', moveY + 'px');
// });



$('.move_fon_box').mousemove(function(e){
    var moveX =(e.pageX * -1 / 15);
    var moveY =(e.pageY * -1 / 15);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px');
});

$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();

    var scroll = (windowTop  / (documentHeight - windowHeight)) * 100;
    $('.scroll-line').css("width",(scroll + '%'));
})


$('#showMore').on('click', function() {
    $('#boxs .box:hidden').slice(0,3).slideDown();
    if($('#boxs .box:hidden').length == 0) {
        $('#boxs #showMore').fadeOut('slow');

    }
});


$('img.lazy').lazyload();

$('.posts .holder').slice(0,2).show();

$('#btnMore').on('click', function() {
  $('.posts .holder:hidden').slice(0,1).slideDown();
  if($('.posts .holder:hidden').length === 0) {
    $('#btnMore').fadeOut();
}
});


$('.barra-nivel').each(function() {
  var valorLargura = $(this).data('nivel');
  var valorNivel = $(this).html("<span class='valor-nivel'>"+valorLargura+"</span>");
  $(this).animate({
    width: valorLargura
});
});



(function($){
    new WOW().init();
})(jQuery);


$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
},2000)
});



$("#skillbar_php").animate({width:'85%'},1500);
$("#skillbar_asp").animate({width:'55%'},1500);
$("#skillbar_jsp").animate({width:'75%'},1500);





$("#custom").percircle({

    text:"custom",
    percent: 27
});
$("#clock").percircle({
   perclock: true
});
$("#custom-color").percircle({
    progressBarColor: "#CC3366",
    percent: 64.5

});

$("#custom-color1").percircle({
    progressBarColor: "#CC3366",
    percent: 15

});

$("#countdown").percircle({
   perdown: true,
   secs: 14,
   timeUpText: 'finally!'
});



// начао циркулярного прогресс бара
(function ($) {
    $.fn.loading = function () {
        var DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function () {
            var $target  = $(this);

            var opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            var $rotate = $target.find('.rotate');
            setTimeout(function () {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            },1);

            if (opts.percent > 50) {
                var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }
})(jQuery);






// email validete










    // $('#mySliding').hiSlide({
    //      item: '.hiSlider-item',
    //      isFlexible: true,
    //      mode: 'fade',
    //      isSupportTouch: false,
    //     // isShowTitle: false,
    //     // isShowPage: false,
    //     // titleAttr: function(curIdx){
    //     //     return $('img', this).attr('alt');
    //     // }
    // });

    // $('#slide__slide').hiSlide({
    //      item: '.hiSlider-item',
    //      isFlexible: true,
    //      mode: 'fade',
    //      isSupportTouch: false,
    //     // isShowTitle: false,
    //     // isShowPage: false,
    //     // titleAttr: function(curIdx){
    //     //     return $('img', this).attr('alt');
    //     // }
    // });

    $(".progress-bar_nwe").loading();

//Circular Pie Chart & Progress Bar Plugin with
(function() {
    var canvas = document.getElementById('canvas'),
    circlesCreated = false;

    function onScroll() {
        if (!circlesCreated && elementInViewport(canvas)) {
            circlesCreated = true;
            createCircles();
        }
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
          rect.top  >= 0 &&
          rect.left >= 0 &&
          rect.top  <= (window.innerHeight || document.documentElement.clientHeight)
          );
    }

    function createCircles() {
        var colors = [
        ['#D3B6C6', '#4B253A'], ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA']
        ],
        circles = [];

        for (var i = 1; i <= colors.length; i++) {
            var child = document.getElementById('circles-' + i),
            percentage = 31.42 + (i * 9.84),

            circle = Circles.create({
                id:         child.id,
                value:      percentage,
                radius:     70,
                width:      10,
                colors:     colors[i - 1]
            });

            circles.push(circle);
        }
    }

    window.onscroll = onScroll;

})();



// $(window).scroll(function() {

//     var target = $(this).scrollTop();

//     if(target == 0) {

//         // Действие, если страница в самом верху

//     } else {

//         // Действие, если страница прокручена вниз

//     }

// });





$('.ripple__box_fon').ripples({
    resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });




function Circlle(el){
  $(el).circleProgress({fill: {color: '#ff5c5c'}})
  .on('circle-animation-progress', function(event, progress, stepValue){
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
});
};
Circlle('.round');

var myCircle = Circles.create({
  id:                  'circles-4',
  radius:              80,
  value:               43,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#D3B6C6', '#4B253A'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true,

});

var myCircle = Circles.create({
  id:                  'circles-5',
  radius:              80,
  value:               89,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#D3B6C6', '#4B253A'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text ',
  valueStrokeClass:    'circles-valueStroke ',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true,

});


var myCircle = Circles.create({
  id:                  'circles2',
  radius:              80,
  value:               65,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#D3B6C6', '#4B253A'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});



//Circular Pie Chart & Progress Bar Plugin with

// конец









  // var count = 0;
  //         $('.inner').click(function(){
  //           setInterval(function(){
  //             if(count == 100){
  //               $('.outer').remove('active');
  //               $('.outer').addClass('active2');
  //               clearInterval();
  //             }else{
  //               count = count + 1;
  //               $('span').text(count + '%');
  //               $('.outer').addClass('active');
  //             }
  //           }, 200);
  //         });
  //       });






/*
accordion
---------
*/

$('.content').hide(); // hiding all contents
$('.content').first().show(); // showing first content

// adding click events
$('.title').click(function(event) {
  event.preventDefault(); // default action of the event will not be triggered

  // set or remove active class
  $('.active').removeClass('active'); // remove active class if clicked on another element
  $(this).addClass('active'); // adding active class upon each click

  $('.content').slideUp(); // rest of the content to be slided up
  $(this).next().slideDown(); // when clicking on each title, it's next element is to be slided down
});




// function openFunction(){
// 			document.getElementById("menu888").style.width="300px";
// 			document.getElementById("mainbox").style.marginLeft="300px";
// 			document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
// 		}
// document.getElementById('mainbox').onclick = openFunction();

// 		function closeFunction(){
// 			document.getElementById("menu888").style.width="0px";
// 			document.getElementById("mainbox").style.marginLeft="0px";
// 			document.getElementById("mainbox").innerHTML="&#9776; Open";
// 		}
// document.getElementById('closebtn').onclick = closeFunction();

	// var skewed = document.querySelector('.skewed');
	// window.addEventListener('scroll', function(){
	// 	var value  =  -1 * window.scrollY/60;
	// 	skewed.style.transform = "skewY("+ value + "deg)";

	// });

// Крутое меню мобильное с выездом слева вправо



//https://www.youtube.com/watch?v=mryyHxDSgng


/*    var hamburgers = document.querySelector(".hamburger");
         // hamburgers.addEventListener("click", function() {
         //  this.classList.toggle("is-active");
     });*/

// 	$('.hamburger_f').click(function () {
// 	$('.hamburger_f').toggleClass("is-active");
// 	 $("#navigation").toggleClass('active');
// 		return false;
// 	});
// 	$('body, .top-menu ul li a').click(function () {
// 			$('.hamburger').removeClass("is-active");
// 		$('#navigation').removeClass('active');
// 	});









// 	$('.header_navtop .hamburger').click(function () {
// 	$('.header_navtop .hamburger').toggleClass("is-active");
// 	 $(".top__header").toggleClass('active');
// 		return false;
// 	});

// $(".top__header li a").click (function(){
// 	 $(".top__header").removeClass('active');
// 		return false;
// })






// $('.slide1_slider').hiSlider();



//     (function($) {
//   $.fn.menumaker = function(options) {
//     var cssmenu = $(this),
//       settings = $.extend({
//         format: "dropdown",
//         sticky: false
//       }, options);
//     return this.each(function() {
//       $(this).find(".button").on('click', function() {
//         $(this).toggleClass('menu-opened');
//         var mainmenu = $(this).next('ul');
//         if (mainmenu.hasClass('open')) {
//           mainmenu.slideToggle().removeClass('open');
//         } else {
//           mainmenu.slideToggle().addClass('open');
//           if (settings.format === "dropdown") {
//             mainmenu.find('ul').show();
//           }
//         }
//       });
//       cssmenu.find('li ul').parent().addClass('has-sub');
//       multiTg = function() {
//         cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
//         cssmenu.find('.submenu-button').on('click', function() {
//           $(this).toggleClass('submenu-opened');
//           if ($(this).siblings('ul').hasClass('open')) {
//             $(this).siblings('ul').removeClass('open').slideToggle();
//           } else {
//             $(this).siblings('ul').addClass('open').slideToggle();
//           }
//         });
//       };
//       if (settings.format === 'multitoggle') multiTg();
//       else cssmenu.addClass('dropdown');
//       if (settings.sticky === true) cssmenu.css('position', 'fixed');
//       resizeFix = function() {
//         var mediasize = 1000;
//         if ($(window).width() > mediasize) {
//           cssmenu.find('ul').show();
//         }
//         if ($(window).width() <= mediasize) {
//           cssmenu.find('ul').hide().removeClass('open');
//         }
//       };
//       resizeFix();
//       return $(window).on('resize', resizeFix);
//     });
//   };
// })(jQuery);


//     $("#cssmenu").menumaker({
//       format: "multitoggle"
//     });




















	// 	$("body").niceScroll({
	// horizrailenabled:false
	// });
	// вверхнее красиво-вращающееся меню
	// 1 и 2 строка это анимация крестика
	//3 строка - слайдер вниз меню
	// //слайдер вниз меню отвечает за работу мобильного меню к переносу
	// $(".toggle-mnu").click(function () {
	// 	$(this).toggleClass("on");
	// 	$(".top-menu").slideToggle();
	// 	return false;
	// });
	// $('body, .top-menu ul li a').click(function () {
	// 	$('.hidden-mnu').hide("slow");
	// });




	//Ajax push mesege http://api.jquery.com/jquery.ajax/
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function () {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	//castom code









});