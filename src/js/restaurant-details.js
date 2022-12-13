// restaurant-about slider

let offsetRestaurantAbout = 0;
const sliderLineRestaurantAbout = document.querySelector(
  '.restaurant-about__slider'
);

document
  .querySelector('.restaurant-about__button-arrow-left')
  .addEventListener('click', function () {
    offsetRestaurantAbout = offsetRestaurantAbout + 274;
    if (offsetRestaurantAbout > 1918) {
      offsetRestaurantAbout = 0;
    }

    sliderLineRestaurantAbout.style.left = -offsetRestaurantAbout + 'px';
  });

document
  .querySelector('.restaurant-about__button-arrow-right')
  .addEventListener('click', function () {
    offsetRestaurantAbout = offsetRestaurantAbout - 274;
    if (offsetRestaurantAbout < 0) {
      offsetRestaurantAbout = 1918;
    }

    sliderLineRestaurantAbout.style.left = -offsetRestaurantAbout + 'px';
  });

// restaurant-details slider

let offset = 0;
const sliderLine = document.querySelector('.restaurant-slic-img');

document
  .querySelector('.button-arrow-left')
  .addEventListener('click', function () {
    offset = offset + 294;
    if (offset > 862) {
      offset = 0;
    }

    sliderLine.style.left = -offset + 'px';
  });

document
  .querySelector('.button-arrow-right')
  .addEventListener('click', function () {
    offset = offset - 294;
    if (offset < 0) {
      offset = 588;
    }

    sliderLine.style.left = -offset + 'px';
  });
