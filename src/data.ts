import { MenuItemProps } from './MenuItem'

import lagerImg from './img/lager-hell.webp'
import colaImg from './img/cola.jpg'


type Data = {
    menuItems: MenuItemProps[]
}


export const data: Data = {
    menuItems: [
        {
            name: "Bier",
            price: 5,
            image: lagerImg,
        },
        {
            name: "Cola",
            price: 4,
            image: colaImg
        },
        {
            name: "Mineral",
            price: 3.5,
            // image: colaImg
        }
    ]
}