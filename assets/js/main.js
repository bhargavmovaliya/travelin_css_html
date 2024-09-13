const swiper = new Swiper('.dest-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
      // spaceBetween: 10,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
        640: {
          slidesPerView: 1,
          // spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          // spaceBetween: 50,
        },
      },

  });