jQuery(document).ready(function($){
    $('.programm__list').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        animate: {
            duration: 700,
            easing: 'swing',
        },
    });

    $('.faq__accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        animate: {
            duration: 700,
            easing: 'swing',
        },
    });
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.feeds__pagination',
    },
    autoplay: {
        delay: 5000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
     
    
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

});