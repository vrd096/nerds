"use strick";

(function() {
  let handleBurger = document.querySelector(".nav__toggle");
  let burgerMenu = document.querySelector(".nav__toggle-burger");
  let navMenu = document.querySelector(".nav__list");
  let navCart = document.querySelector(".nav__cart");

  handleBurger.addEventListener("click", function() {
    navMenu.classList.toggle("nav__menu--opended");
    navCart.classList.toggle("nav__menu--opended");
    navMenu.classList.toggle("visually-hidden");
    navCart.classList.toggle("visually-hidden");
    handleBurger.classList.toggle("nav__toggle-burger--opened");

  });
}());
