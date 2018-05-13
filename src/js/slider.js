(function () {
  $('#main-slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: '<button class="main-slider-btn btn-prev">Дальше</button>',
    nextArrow: '<button class="main-slider-btn btn-next">Назад</button>',
    // appendArrows: $('#main-slider'),
    variableWidth: true
  });
})();