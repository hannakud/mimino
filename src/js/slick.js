$(document).ready(function () {
  $('.room-hero-slider').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
  });

  $('.slider-room-lux').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    prevArrow:
      '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.slider-room-standard').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    prevArrow:
      '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.slider-room-tripple').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    prevArrow:
      '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.restaurant-slic').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    variableWidth: true,
    prevArrow:
      '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#fff" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#fff" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.restaurant-about__slider').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    variableWidth: true,
    prevArrow:
        '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
        '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.hotel-about-slider').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    variableWidth: true,
    rtl: false,
    prevArrow:
        '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
        '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
  $('.kitchen-about-slider').slick({
    infinite: true,
    arrows: true,
    speed: 300,
    cssEase: 'linear',
    slidesToShow: 2,
    variableWidth: true,
    rtl: false,
    prevArrow:
        '<button type="button" class="slick-prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M31.083 15H5.006l6-6L9.59 7.586 1.177 16l8.414 8.414L11.005 23l-6-6h26.078v-2Z"/></svg></button>',
    nextArrow:
        '<button type="button" class="slick-next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#000" d="M22.492 7.586 21.078 9l6 6H1v2h26.078l-6 6 1.414 1.414L30.906 16l-8.414-8.414Z"/></svg></button>',
  });
});
