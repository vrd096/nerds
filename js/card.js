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

    let priceStr = card.price.toString();
    let price1 = priceStr.split("");
    let priceConcat = [];

    if (priceStr.length <= 4) {
      let price2 = priceStr.slice([1]);
      priceConcat = price1[0] + " " + price2;
    }

    if (priceStr.length >= 5) {
      let price2 = priceStr.slice([2]);
      priceConcat = price1[0] + price1[1] + " " + price2;
    }

    cardElement.querySelector(".catalog__template-price-button").textContent =
      priceConcat + " " + "Руб.";

    return cardElement;
  };
})();
