export function readMore(btn_selector: string, text_selector: string) {

   const btn = document.querySelector(btn_selector)
   if (btn == null) return console.error(`не найдена кнопка`)

   const text = document.querySelector(text_selector)
   if (text == null) return console.error(`не найден текст`)

   btn.addEventListener('click', () => {
      btn.classList.toggle('active')

      if ((text as HTMLParagraphElement).style.maxHeight) {
         (text as HTMLParagraphElement).style.maxHeight = "";
         btn.innerHTML = "Read more"
      } else {
         (text as HTMLParagraphElement).style.maxHeight = text.scrollHeight + "px";
         btn.innerHTML = "Read less"
      }
      
   })
}