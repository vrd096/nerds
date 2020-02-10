"use strict";
(function() {
  window.renderItems = function renderItems(
    items,
    createElement,
    targetSelector
  ) {
    document.querySelector(".js-template-list").textContent = "";
    let fragment = document.createDocumentFragment();

    items.forEach(function(item) {
      fragment.appendChild(createElement(item));
    });
    document.querySelector(targetSelector).appendChild(fragment);
  };
})();
