import Swiper from "swiper"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { products } from "../data/prooducts"


export function setSwiperProducts(selector: string) {
   const swiper_wrapper = document.querySelector('.swiper-wrapper')

   // проверка существования враппера
   if (swiper_wrapper == null) return console.error(`не создан wrapper`)
   // проверка на уникальность селектороа враппера
   if (document.querySelectorAll('.slider-wrapper').length > 1) {
      console.warn(`существует несколько элементов с селектором wrapper`)
   }

   // Добавление элементов
   products.forEach(product => {
      swiper_wrapper.innerHTML += /*html*/(`
      <article class="swiper-slide ${product.color}">
      <div class="container">
      <header>
        <h1>${product.title}</h1>
        <p>${product.sub_title}</p>
      </header>
      <div class="main">
        <div class="price">
          <span class="new">
            ${product.price}
          </span>
         ${
         //проверка на старую цену
         product.old_price ? `<del class="old">£ 59.00</del>` : ``
         }
        </div>
        <img class="product_phone" src="${product.img}" alt="${product.title + " " + product.price}">
        <div class="figure figure_one"></div>
        <div class="figure figure_two"></div>
        </div>
      </div>
    </article>
      `)
   })

   if (selector == null) return console.error(`не создан ${selector}`)

   if (document.querySelectorAll(selector).length > 1) {
      console.warn(`существует несколько элементов с селектором ${selector}`)
   }

   const slider = new Swiper('.slider', {
      modules: [Pagination],
      loop: true,
      pagination: {
         el: '.swiper-pagination',
      },
   })

   slider.init()
}