"use strict";

(function(){
  let items = [
    {
      title: "sedona",
      description: "Информационный сайт для туристов",
      price: 9900,
      picture: "sedona.jpg",
      type: "flex",
      features: ["news", "slider", "benefits"]

      // addFeature(feature) {
      //   this.features.push(feature);
      // },

      // get hasBenefit() {
      //   return this.features.includes(BENEFITS);
      // }
    },
    {
      title: "pink App",
      description: "Продуктовый лендинг приложения для iOS и Android",
      price: 8800,
      picture: "pink.jpg",
      type: "adaptive",
      features: ["benefits", "gallery"]
    },
    {
      title: "barbershop",
      description: "Сайт салоны красоты. Для мужчин, да.",
      price: 7700,
      picture: "barbershop.jpg",
      type: "fixed",
      features: ["slider", "news"]
    },
    {
      title: "mishka",
      description: "Интернет-магазин вязаных игрушек",
      price: 6600,
      picture: "mishka.jpg",
      type: "adaptive",
      features: ["news","gallery", "cart"]
    },
    {
      title: "aplus",
      description: "Лендинг курсов повышения квалификации",
      price: 5500,
      picture: "aplus.jpg",
      type: "flex",
      features: ["slider", "cart"]
    },
    {
      title: "kvast",
      description: "Промо-сайт производителя крафтового кваса",
      price: 4400,
      picture: "kvast.jpg",
      type: "fixed",
      features: ["news", "gallery"]
    }
  ];
}());
