export function setAccordion() {
   const accordions = document.querySelectorAll<HTMLDivElement>('.accordion')

   accordions.forEach(item => {
      item.addEventListener('click', () => {
         item.classList.toggle("active")
         const panel = item.nextElementSibling

         if (panel == null) return console.log(`у элемента ${item} нет соседней панели`)

         if ((panel as HTMLElement).style.maxHeight) {
            (panel as HTMLElement).style.maxHeight = "";
         } else {
            (panel as HTMLElement).style.maxHeight = panel.scrollHeight + 16 + "px";
         }
      })

   })
}