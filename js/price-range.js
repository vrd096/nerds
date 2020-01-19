"use strict";

(function(){
  var slider = document.getElementById('r-slider');

  noUiSlider.create(slider, {
      start: [10, 100],
      connect: true,
      padding: 10,
      range: {
          'min': 0,
          'max': 100
      }
  });

}());
