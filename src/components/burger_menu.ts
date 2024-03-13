export function openBurgerMenu(burgerSelector: string, menuSelector: string) {

   const burger_btns = document.querySelectorAll<HTMLDivElement>(burgerSelector)
   const menu = document.querySelector<HTMLDivElement>(menuSelector)

   if (burger_btns == null || menu == null) return console.error("Не правильно указан селектор")

   burger_btns.forEach(btn => {
      btn.addEventListener("click", () => {
         menu.classList.toggle("active")
      })
   })
}