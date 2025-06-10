$(window).on("load", function () {
  $(".same-height").matchHeight();

  //menu-btn
  $("#menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("open-menu");
    $("#main-navigation").slideToggle();
  });

  //slider
  $('.slider1').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '25%',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '32px',
        }
      }
    ]
  });

  $(".slider2").each(function () {
    $(this).slick({
      dots: false,
      infinite: false,
      arrows: true,
      prevArrow: '<button class="prev-btn" type="buton"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#F8F8F8"/><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#141414"/><path d="M29.375 19.25L22.625 26L29.375 32.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button class="next-btn" type="buton"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill="#F8F8F8"/><rect x="0.5" y="0.5" width="51" height="51" rx="25.5" stroke="#141414"/><path d="M22.625 32.75L29.375 26L22.625 19.25" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
      ]
    });
  });

  //counter animation



  const duration = 2000; // Total animation time in ms

  const runCounter = function ($counter) {
    const target = parseInt($counter.data("target"));
    const start = 0;
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);

      $counter.text(value);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        $counter.text(target); // Ensure exact target value
      }
    }

    requestAnimationFrame(updateCount);
  };

  // Intersection Observer to trigger when .counter is visible
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const $counter = $(entry.target);
          runCounter($counter);
          observer.unobserve(entry.target); // Run only once
        }
      });
    },
    {
      threshold: 0.5 // Trigger when 50% visible
    }
  );

  $(".counter").each(function () {
    observer.observe(this);
  });

  objectFitImages();
});
