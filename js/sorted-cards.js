"use strict";

(function() {
  const defaultSortCriteria = "price";
  const defaultSortDirection = "down"; // up or down

  let sortCriteria = defaultSortCriteria; // name or price
  let sortDirection = defaultSortDirection;
  window.cardsAfterSorted = [];

  function render() {}

  function sortByString({ items, key, direction }) {
    if (direction === "down") {
      return [...items].sort((itemA, itemB) => {
        return itemA[key].localeCompare(itemB[key]);
      });
    }

    if (direction === "up") {
      return [...items].sort((itemB, itemA) => {
        return itemA[key].localeCompare(itemB[key]);
      });
    }
    return items;
  }

  function sortByNumber({ items, key, direction }) {
    if (direction === "down") {
      return [...items].sort((itemA, itemB) => {
        return itemA[key] - itemB[key];
      });
    }

    if (direction === "up") {
      return [...items].sort((itemB, itemA) => {
        return itemA[key] - itemB[key];
      });
    }
    return items;
  }

  window.syncSort = function syncSort() {
    let list = window.cardsAfterFilter;
    let currentList = list;
    const sortType = sortCriteria === "price" ? sortByNumber : sortByString;

    currentList = sortType({
      items: list,
      key: sortCriteria,
      direction: sortDirection
    });
    // render(currentList);
    window.cardsAfterSorted = currentList;
    console.log(window.cardsAfterSorted);
  };

  function handleCriteriaClick(evt) {
    evt.preventDefault();
    sortCriteria = evt.target.dataset.criteria;
    if (sortCriteria !== undefined) {
      syncSort();
    }
  }

  function handleDirectionClick(evt) {
    evt.preventDefault();
    sortDirection = evt.target.dataset.direction;
    if (sortDirection !== undefined) {
      syncSort();
    }
  }

  document
    .querySelector(".js-sort-criteria")
    .addEventListener("click", handleCriteriaClick);
  document
    .querySelector(".js-sort-direction")
    .addEventListener("click", handleDirectionClick);
})();
