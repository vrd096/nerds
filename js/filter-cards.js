"use strict";

(function() {
  let filterButton = document.querySelector(".catalog__filter-button");
  let filterForm = document.querySelector(".catalog__filter-form");
  let items = window.itemsCard;
  let cardsAfterPrice = [];
  let cardsAfterGrid = [];
  window.cardsAfterFilter = [];

  function getRangePrice() {
    let startPrice = document.querySelector("#slider-item-left");
    let finalPrice = document.querySelector("#slider-item-right");
    let start = startPrice.value;
    let final = finalPrice.value;

    let requaredPrice = items.filter(item => {
      if (item.price > start && item.price < final) {
        return true;
      }
    });
    cardsAfterPrice = requaredPrice;
  }

  function filterGrid() {
    let selectRadio = document.querySelectorAll(
      ".catalog__filter-grid-radio:checked"
    );
    let filteredItems = [];
    let requiredGrid = [];

    selectRadio.forEach(item => {
      let itemId = item.id;
      let strId = itemId.split("-", [2]);

      requiredGrid.push(strId[1]);
    });

    if (requiredGrid == "") {
      console.log("не выбран тип сетки");
      cardsAfterGrid = cardsAfterPrice;
    } else {
      filteredItems = cardsAfterPrice.filter(item =>
        requiredGrid.some(required => item.type.includes(required))
      );
      cardsAfterGrid = filteredItems;
    }
  }

  function filterFeatures() {
    let selectCheckbox = document.querySelectorAll(
      ".catalog__filter-features-checkbox:checked"
    );
    let filteredItems = [];
    let requiredFeatures = [];

    selectCheckbox.forEach(item => {
      let itemId = item.id;
      let strId = itemId.split("-", [2]);

      requiredFeatures.push(strId[1]);
    });

    if (requiredFeatures == "") {
      filteredItems = cardsAfterGrid.filter(item =>
        requiredFeatures.every(required => item.features.includes(required))
      );
    } else {
      filteredItems = cardsAfterGrid.filter(item =>
        requiredFeatures.some(required => item.features.includes(required))
      );
    }

    window.cardsAfterFilter = filteredItems.map(item => item);
    // console.log(window.cardsAfterFilter);
  }

  window.syncFilters = function syncFilters() {
    getRangePrice();
    filterGrid();
    filterFeatures();
    window.syncSort();
  };

  filterButton.addEventListener("click", window.syncFilters);

  filterForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
  });

  window.cardsAfterFilter = items;
})();
