let offset = 0;
const sliderLine = document.querySelector('.restaurant-slic-img');

document.querySelector('.button-arrow-left').addEventListener('click', function () {
    offset = offset + 294;
    if (offset > 862) {
        offset = 0;
    }
    
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button-arrow-right').addEventListener('click', function () {
    offset = offset - 294;
    if (offset < 0) {
        offset = 588;
    }
    
    sliderLine.style.left = -offset + 'px';
});