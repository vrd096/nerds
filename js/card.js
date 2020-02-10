"use strict";

(function() {
  window.createCardElement = function createCardElement(card) {
    var cardElement = document
      .querySelector("template")
      .cloneNode(true)
      .content.querySelector(".js-template-item");

    cardElement.querySelector(".catalog__template-image").src =
      "img/" + card.picture;
    cardElement.querySelector(".catalog__template-image").alt = card.title;
    cardElement.querySelector(".catalog__template-price-title").textContent =
      card.title;
    cardElement.querySelector(
      ".catalog__template-price-description"
    ).textContent = card.description;
    cardElement.querySelector(".catalog__template-price-button").textContent =
      card.price + " " + "Руб.";

    return cardElement;
  };
})();
