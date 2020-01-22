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

  });
  const sliderButton = document.querySelector(".slider-btn-js");

  sliderButton.addEventListener("click", function(){
    console.log(slider.noUiSlider.get());
  });

}());
