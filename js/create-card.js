"use strict";

(function() {
  window.createCardElement = function createCardElement(element) {
    let cardElement = document
      .querySelector("template")
      .cloneNode(true)
      .textContent.querySelector(".catalog__templates-item");

    cardElement.querySelector(
      ".catalog__template-price-title"
    ).textContent = element.title;
    cardElement.querySelector(
      ".catalog__template-price-description"
    ).textContent = element.description;
    cardElement.querySelector(
      ".catalog__template-price-button"
    ).textContent = element.price + "Руб.";
    cardElement.querySelector(
      ".catalog__template-image"
    ).textContent = "img/" + element.picture;
  };
})();
