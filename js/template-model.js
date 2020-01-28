"use strict";

// const ADAPTIVE_TYPE = ["adaptive", "flex", "fixed"];
// const SLIDER = "slider";
// const BENEFITS = "benefits";
// const NEWS = "news";
// const GALLERY = "gallery";
// const CART = "cart";

(function() {
  let filterButton = document.querySelector(".catalog__button-filter");
  let filterForm = document.querySelector(".catalog__filter-form");

  function getRangePrice(start, final) {
    let startPrice = document.querySelector("#slider-item-left");
    let finalPrice = document.querySelector("#slider-item-right");
    start = startPrice.value;
    final = finalPrice.value;
    let price = [];
    price.push(start, final);
    // console.log(start, final);
    return price;
  }

  function getGrid() {
    let selectRadio = document.querySelectorAll(
      ".catalog__filter-grid-radio:checked"
    );
    // console.log(selectRadio);
  }

  function getFeatures() {
    let selectCheckbox = document.querySelectorAll(
      ".catalog__filter-features-checkbox:checked"
    );
    // console.log(selectCheckbox);
  }

  filterButton.addEventListener("click", function() {
    console.log(getRangePrice());
    // getRangePrice();
    getGrid();
    getFeatures();
  });

  filterForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
  });

  // console.log(window.itemsCard.map(({ title }) => title));

  // sort by type, price, title
  // let sortedItems = [...items].sort(({ title: a}, {title: b}) => a.localeCompare(b));
  // let sortedItems = [...items].sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));
  // let sortedItems = [...items].sort((itemA, itemB) => itemA.price - itemB.price);

  let requiredFeatures = ["news"];
  let items = window.itemsCard;

  // let filteredItems = items.filter(item =>
  //   requiredFeatures.every(required => item.features.includes(required))
  // );
  // console.log(filteredItems.map(({ title }) => title));
  let filteredItems = items.filter((item) => {
    for (let req of requiredFeatures) {
      if (!item.features.includes(req)) {
        return false;
      }
    }

    return true;
  });
console.log(filteredItems.map(({ title }) => title));
  // let filteredItems = window.itemsCard.filter(item => {
  //   for (let req of requiredFeatures) {
  //     if (!item.features.includes(req)) {
  //       return false;
  //     }
  //   }

  //   return true;
  // });

  // let item1 = items[0];

  // console.log(item1.hasBenefit);
  // item1.addFeature(BENEFITS);
  // console.log(item1.hasBenefit);



  // let template = `
  // <li class="catalog__templates-item">
  //   <div class="catalog__template-header">
  //     <span class="catalog__template-header-circle"></span>
  //   </div>
  //   <img
  //     src="img/pink.jpg"
  //     alt=""
  //     class="catalog__template-image"
  //   />
  //   <div class="catalog__template-price">
  //     <p class="catalog__template-price-title">${items[0].title}</p>
  //     <p class="catalog__template-price-description">${items[0].description}</p>
  //     <button class="catalog__template-price-button button" type="button">9 900 Руб.</button>
  //   </div>
  // </li>
  // `;

  // console.log(template);
})();
