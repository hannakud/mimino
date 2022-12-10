import $ from 'jquery';

$(document).ready(function () {
    $('.room-hero-slider').slick({
        infinite: true,
        arrows: true,
        speed: 300,
        cssEase: 'linear',
    });
});
