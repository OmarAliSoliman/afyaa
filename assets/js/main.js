$(document).ready(function () {

  $('.slider-vertical').slick({
    vertical: true,
    verticalSwiping: true,
    loop: true,
    autoplay: true,
    arrows: false,
  });

  $('.header-slider').slick({
    arrows: true,
    // rtl: true,
  });


  // last-added-slider
  if ($('.sounds-slider').length) {
    $('.sounds-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      arrowa: true,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }


  // last-offers-slider
  if ($('.versions-slider').length) {
    $('.versions-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      arrows: true,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }



  if($('.sounds-show').length){
    $('audio').audioPlayer({
      classPrefix: 'audioplayer',
      strPlay: '',
      strPause: '',
      strVolume: ''
    });
  }

  if($('.blog-par').length){
    $('audio').audioPlayer({
      classPrefix: 'audioplayer',
      strPlay: '',
      strPause: '',
      strVolume: ''
    });
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  

});