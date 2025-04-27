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

// Animated Counter for stats
(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Smooth scroll
  $('a.smooth-scroll').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 1000, 'easeInOutExpo');
    }
  });

  // Scroll to sections
  $('.nav-link').on('click', function() {
    if ($(this).attr('href').charAt(0) === '#') {
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Activate navbar links based on scroll position
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    $('section').each(function() {
      var target = $(this).offset().top - 80;
      var id = $(this).attr('id');
      if (position >= target) {
        $('.navbar-nav .nav-item .nav-link').removeClass('active');
        $('.navbar-nav .nav-item .nav-link[href="#' + id + '"]').addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({scrollTop : 0}, 1000, 'easeInOutExpo');
    return false;
  });

  // Parallax effect
  if ($('.parallax-bg').length) {
    $('.parallax-bg').parallax({
      speed: 0.5
    });
  }

  // Typed text animation
  if ($('.typed-text').length) {
    var typed = new Typed('.typed-text', {
      strings: ["Wooden Poles", "Timber Works", "Quality Service"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  // Counter animation
  $('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  // Testimonial carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 0,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 2
        }
      }
    });
  }

  // Animation on scroll
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// Particle background for hero section
if (document.getElementById('particles-js')) {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}