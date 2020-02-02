"use strict";

(function(){
  let cardsAfterFilter = window.cardsAfterFilter;
  let sortedOfPrice = document.querySelector(".sort-price-js");
  let sortedOfType = document.querySelector(".sort-type-js");
  let sortedOfName = document.querySelector(".sort-name-js");
  let sortedArrowUp = document.querySelector(".catalog__sort-arrow-up");
  let sortedArrowDown = document.querySelector(".catalog__sort-arrow-down");
  let sortedCards = [];

  sortedOfPrice.addEventListener("click", function(evt){
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort((itemA, itemB) => itemA.price - itemB.price);
    console.log(sortedCards);

  });

  sortedOfType.addEventListener("click", function(evt){
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort((itemA, itemB) => itemA.type.localeCompare(itemB.type));
    console.log(sortedCards);
  });

  sortedOfName.addEventListener("click", function(evt){
    evt.preventDefault();
    sortedCards = [...cardsAfterFilter].sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));
    console.log(sortedCards);
  });

  // let sortedCards = [...cardsAfterFilter].sort(({ title: a}, {title: b}) => a.localeCompare(b));
  // let sortedCards = [...items].sort((itemA, itemB) => itemA.title.localeCompare(itemB.title));
  sortedCards = [...cardsAfterFilter].sort((itemA, itemB) => itemA.price - itemB.price);
  console.log(sortedCards);
}());
