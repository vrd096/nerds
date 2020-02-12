"use strict";

(function(){


  let textArea = document.querySelector(".modal-send__input--textarea");

  textArea.addEventListener("invalid", function() {
    if (textArea.validity.tooShort) {
      textArea.setCustomValidity(
        "Сообщение должно быть не менее 10 символов"
      );
    } else {
      textArea.setCustomValidity("");
    }
  });

  let form = document.querySelector(".modal-send__form");

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
  });

}());
