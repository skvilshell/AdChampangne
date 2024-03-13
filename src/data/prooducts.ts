import grey_phone from '../assets/phone_grey.png'
import rose_phone from '../assets/phone_rose.png'
import purple_phone from '../assets/phone_puprle.png'

export interface IPropduct {
   id?: number
   title: string
   sub_title: string
   price: string
   old_price?: string
   img: string
   color: "purple" | "rose" | "grey"
}

export const products: IPropduct[] = [
   {
      id: 1,
      title: "Tiny Phone 4G",
      sub_title: "Small Size, Huge Impact",
      price: "£ 3.00",
      old_price: "£ 59.00",
      img: purple_phone,
      color: "purple"
   },
   {
      id: 2,
      title: "Tiny Phone 4G",
      sub_title: "Small Size, Huge Impact",
      price: "£ 3.00",
      old_price: "£ 59.00",
      img: rose_phone,
      color: "rose"
   },
   {
      id: 3,
      title: "Tiny Phone 4G",
      sub_title: "Small Size, Huge Impact",
      price: "£ 3.00",
      old_price: "£ 59.00",
      img: grey_phone,
      color: "grey"
   }
]