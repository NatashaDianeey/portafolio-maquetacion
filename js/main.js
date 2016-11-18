(function() {

    //Script para el menu top
	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'hamburger-box' ),
		closebtn = document.getElementById( 'hamburger-box' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();
    
    

    /*Funcion para menu scroll top*/
/*
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 200,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();


*/
    

    
    
 //scrpit para animación de hamburguesa
            
    var hamburger = document.querySelector(".hamburger");
        hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        });

})();



$(document).ready(function(){
    $('.autoplay').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    });
    
    
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


