"use strict";

(function(){
  var slider = document.getElementById('r-slider');

  noUiSlider.create(slider, {
      start: [10, 80],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      }
  });

  console.log(slider.noUiSlider.get());
}());
