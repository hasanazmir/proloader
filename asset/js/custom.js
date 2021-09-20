setTimeout(function(){
            $('.loader_bg').fadeToggle();
        }, 1500);


$(".sponsor-customer-carousel").owlCarousel({
            items: 4,
            dots: true,
            loop: true,
            margin: 60,
            nav: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            responsiveClass: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            
        });