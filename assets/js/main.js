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
    rtl: true,
  });


  // last-added-slider
  if ($('.sounds-slider').length) {
    $('.sounds-slider').slick({
      dots: true,
      infinite: false,
      rtl: true,
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
      rtl: true,
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



  // last-offers-slider
  // if ($('.department-product-slider').length) {
  //   $('.department-product-slider').slick({
  //     dots: false,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 5,
  //     arrowa: true,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //     loop: true,
  //     infinite: true,
  //     responsive: [{
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 800,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  //   });
  // }

  // if ($('#example').length) {
  //   $("#example").htmlNumberSpinner();
  // }


  // if ($('.add-image').length) {
  //   $('.slider-top').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     dots: false,
  //     infinite: false,
  //     loop: false,
  //     arrows: false,
  //     asNavFor: '.slider-bottom'
  //   });
  //   $('.slider-bottom').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider-top',
  //     dots: false,
  //     centerMode: false,
  //     infinite: false,
  //     loop: false,
  //     arrows: false,
  //     focusOnSelect: true
  //   });
  // }

  // if ($('#example2').length) {
  //   $("#example2").htmlNumberSpinner();
  // }

  // if (($('#example0')).length) {
  //   document.querySelectorAll('.counter').forEach((ex, index) => {
  //     $(`#example${index}`).htmlNumberSpinner();
  //   })
  // }



  // $('.product-slider').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   loop: true,
  //   infinite: true,
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 370,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // $('.more-slider').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   loop: true,
  //   infinite: true,
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 370,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


  // $('.to-day-offer-colm-slider').slick({
  //   dots: false,
  //   arrows: true,
  // });




  // $("#example").htmlNumberSpinner();
  // $("#example2").htmlNumberSpinner();


  // if($('.search-box').length){
  //   let searchBoxOpen = false;
  //   $('.search img').on('click', function(){
  //     if(!searchBoxOpen){
  //       $('.search-box').css('display', 'block');
  //     }else{
  //       $('.search-box').css('display', 'none');
  //     }
  //     searchBoxOpen=!searchBoxOpen;
  //   })
  // }

});