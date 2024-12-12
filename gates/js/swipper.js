  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10,
    effect: 'fade', // For a fade effect between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000, // Auto slide every 5 seconds
    },
    speed: 1000, // Transition speed
  });