"use strict";
(function() {
  window.renderItems = function renderItems(
    items,
    createElement,
    targetSelector
  ) {
    let fragment = document.createDocumentFragment();

    if (items.length > 5) {
      for (var i = 0; i < 5; i++) {
        fragment.appendChild(createElement(items[i]));
      }
    } else {
      items.forEach(function(item) {
        fragment.appendChild(createElement(item));
      });
    }

    document.querySelector(targetSelector).appendChild(fragment);
  };
  renderItems(
    window.itemsCard,
    window.createCardElement,
    ".catalog__templates-list"
  );
  renderItems(pins, window.createPopupElement, ".map");
})();
