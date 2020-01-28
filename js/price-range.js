"use strict";

(function(){
  let slider = document.getElementById('r-slider');

  noUiSlider.create(slider, {
      start: [10, 15000],
      connect: true,
      step: 10,
      range: {
          'min': 0,
          'max': 20000
      },
      format: {
        // 'to' the formatted value. Receives a number.
        to: function (value) {
            return Math.round(value) ;
        },
        // 'from' the formatted value.
        // Receives a string, should return a number.
        from: function (value) {
            return Number(value.replace('', ''));
        }
    }
  });

let sliderItemLeft = document.getElementById('slider-item-left');
let sliderItemRight = document.getElementById('slider-item-right');

slider.noUiSlider.on('update', function (values, handle) {
  let sliderCoords = slider.noUiSlider.get();
    sliderItemLeft.value = sliderCoords[0];
});
slider.noUiSlider.on('update', function (values, handle) {
  let sliderCoords = slider.noUiSlider.get();
    sliderItemRight.value = sliderCoords[1];
});

sliderItemLeft.addEventListener('change', function () {
  slider.noUiSlider.set([this.value, null]);
});
sliderItemRight.addEventListener('change', function () {
  slider.noUiSlider.set([null, this.value]);
});

  // const sliderButton = document.querySelector(".slider-btn-js");

  // sliderButton.addEventListener("click", function(){
  //   let sliderCoords = slider.noUiSlider.get();
  //   console.log(sliderCoords[0]);
  // });

}());
