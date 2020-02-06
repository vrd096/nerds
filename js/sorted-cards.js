"use strict";

(function() {
  let cardsAfterFilter = window.cardsAfterFilter;
  let sortedOfPrice = document.querySelector(".sort-price-js");
  let sortedOfType = document.querySelector(".sort-type-js");
  let sortedOfName = document.querySelector(".sort-name-js");
  let sortedArrowUp = document.querySelector(".catalog__sort-arrow-up");
  let sortedArrowDown = document.querySelector(".catalog__sort-arrow-down");
  let sortedCards = [];

  sortedOfPrice.addEventListener("click", function(evt) {
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort(
      (itemA, itemB) => itemA.price - itemB.price
    );
    console.log(sortedCards);
  });

  sortedOfType.addEventListener("click", function(evt) {
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort((itemA, itemB) =>
      itemA.type.localeCompare(itemB.type)
    );
    console.log(sortedCards);
  });

  sortedOfName.addEventListener("click", function(evt) {
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort((itemA, itemB) =>
      itemA.title.localeCompare(itemB.title)
    );
    console.log(sortedCards);
  });

  // let sortedCards = [...cardsAfterFilter].sort(({ title: a}, {title: b}) => a.localeCompare(b));
  // let sortedCards = [...items].sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));
  sortedCards = [...cardsAfterFilter].sort(
    (itemA, itemB) => itemA.price - itemB.price
  );
  console.log(sortedCards);
})();

const list = [
  { price: 100, name: "test" },
  { price: 20, name: "bar" }
];

const defaultSortCriteria = "price";
const defaultSortDirection = "up"; // up or down

let sortCriteria = defaultSortCriteria; // name or price
let sortDirection = defaultSortDirection;
let currentList = list;

function render() {}

function sortByString({ items, key, direction }) {
  if (direction === "up") {
    return [...items].sort((itemA, itemB) => {
      return itemA[key].localeCompare(itemB[key]);
    });
  }

  if (direction === "down") {
    return [...items].sort((itemB, itemA) => {
      return itemA[key].localeCompare(itemB[key]);
    });
  }

  return items;
}

function sortByNumber({ items, key, direction }) {
  if (direction === "up") {
    return [...items].sort((itemA, itemB) => {
      return itemA[key] - itemB[key];
    });
  }

  if (direction === "down") {
    return [...items].sort((itemB, itemA) => {
      return itemA[key] - itemB[key];
    });
  }

  return items;
}

function sync() {
  const sortType = sortCriteria === "price" ? sortByNumber : sortByString;

  currentList = sortType({
    items: list,
    key: sortCriteria,
    direction: sortDirection
  });

  render(currentList);
}

function handleDirectionClick(e) {
  sortDirection = e.target.dataset.direction;
  sync();
}

function handleCriteriaClick(e) {
  sortCriteria = e.target.dataset.criteria;
  sync();
}

document
  .querySelector(".js-sort-criteria")
  .addEventListener("click", handleCriteriaClick);
document
  .querySelector(".js-sort-direction")
  .addEventListener("click", handleDirectionClick);
