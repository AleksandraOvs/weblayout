const heroSlider = document.querySelector ('.hero');

  let heroSwiper = new Swiper('.hero__swiper-container', {
    slidesPerView: 1,
    //slidesPerColumn: 2,
    direction: "horizontal",
    pagination: false,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    navigation: false,
  });

  const slider1 = document.querySelector ('.gallery__slider-container');

  let gallerySwiper = new Swiper('.gallery__slider-container', {
    slidesPerView: 3,
    slidesPerView: 3,
    direction: "horizontal",
    spaceBetween: 50,
    grid: {
      rows: 2
    },
    pagination:{
      el: '.gallery__slider-pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation:{
      nextEl: '.gallery__slider-button-next',
      prevEl: '.gallery__slider-button-prev',
    },
  })

  const slider2 = document.querySelector ('.publications__slider-container');

  let pubSwiper = new Swiper('.publications__slider-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: "horizontal",
    pagination:{
      el: '.publications__pagination',
      type: 'fraction',
      clickable: true,
    },
    navigation:{
      nextEl: '.publications__button-next',
      prevEl: '.publications__button-prev',
    },
  })

  const slider3 = document.querySelector ('.projects__slider-partners');

  let partnersSwiper = new Swiper('.projects__slider-partners', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: "horizontal",
    slideClass: 'projects__slider-item',
    loop: true,
    navigation:{
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },
  })


