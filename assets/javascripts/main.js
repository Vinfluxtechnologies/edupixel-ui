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
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
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
