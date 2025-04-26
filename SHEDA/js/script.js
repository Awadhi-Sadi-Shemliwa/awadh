new Swiper('.service-img-wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween : 30,
  
    autoplay: {
      delay: 3000,  // 3 seconds delay
      disableOnInteraction: true,  // Stops autoplay on user interaction
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
      slidesPerView: 1,
    },

  }
  });