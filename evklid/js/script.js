window.addEventListener('DOMContentLoaded', function() {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    bulletElement: 'button',
    scrollbar: {
      hide: true,
        },
    effect: 'fade',
  });

})

