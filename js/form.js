"use strict";

(function() {
  let modelSend = document.querySelector(".modal-send");
  let modelOverlay = document.querySelector(".modal-overlay");
  let contactButton = document.querySelector(".contacts__button");
  let modalClose = document.querySelector(".modal-send__close");

  contactButton.addEventListener("click", function(){
    modelSend.classList.remove("visually-hidden");
    modelOverlay.classList.remove("visually-hidden");
  })
  modalClose.addEventListener("click", function(){
    modelSend.classList.add("visually-hidden");
    modelOverlay.classList.add("visually-hidden");
  });
})();
