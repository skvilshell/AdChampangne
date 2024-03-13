
import { setAccordion } from "./components/accordion"
import { openBurgerMenu } from "./components/burger_menu"
import { readMore } from "./components/read_more"
import { setSwiperProducts } from "./components/swiper"
import "./style.scss"
import { current_year } from "./utils"

openBurgerMenu(".burger_btn", ".menu")
setSwiperProducts('.slider')
setAccordion()
readMore(".read", ".more_info")


const currentYear = document.querySelector('.year')
if (currentYear != null) {
   currentYear.innerHTML = current_year().toString()
}