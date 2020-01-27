"use strict";

const ADAPTIVE_TYPE = ["adaptive", "flex", "fixed"];
const SLIDER = "slider";
const BENEFITS = "benefits";
const NEWS = "news";
const GALLERY = "gallery";
const CART = "cart";


(function() {


  console.log(window.itemsCard.map(({title}) => title));

  // sort by type, price, title
  // let sortedItems = [...items].sort(({ title: a}, {title: b}) => a.localeCompare(b));
  // let sortedItems = [...items].sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));
  // let sortedItems = [...items].sort((itemA, itemB) => itemA.price - itemB.price);

  let requiredFeatures = [SLIDER, NEWS];

  // let filteredItems = items.filter((item) => requiredFeatures.every(required => item.features.includes(required)));

  // let filteredItems = items.filter((item) => {
  //   for (let req of requiredFeatures) {
  //     if (!item.features.includes(req)) {
  //       return false;
  //     }
  //   }

  //   return true;
  // });

  let filteredItems = window.itemsCard.filter((item) => {
    for (let req of requiredFeatures) {
      if (!item.features.includes(req)) {
        return false;
      }
    }

    return true;
  });

  let item1 = items[0];

  console.log(item1.hasBenefit)
  item1.addFeature(BENEFITS);
  console.log(item1.hasBenefit)

  console.log(filteredItems.map(({title}) => title));


  let template = `
  <li class="catalog__templates-item">
    <div class="catalog__template-header">
      <span class="catalog__template-header-circle"></span>
    </div>
    <img
      src="img/pink.jpg"
      alt=""
      class="catalog__template-image"
    />
    <div class="catalog__template-price">
      <p class="catalog__template-price-title">${items[0].title}</p>
      <p class="catalog__template-price-description">${items[0].description}</p>
      <button class="catalog__template-price-button button" type="button">9 900 Руб.</button>
    </div>
  </li>
  `

  console.log(template);
})();
