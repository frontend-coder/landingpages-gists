$(document).ready(function () {

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






$('.header__burger').click(function(e){
$('.header__burger, .header__menu').toggleClass('active');
$('body').toggleClass('lock');
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