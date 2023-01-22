import { MenuItemProps } from './MenuItem'

import lagerImg from './img/lager-hell.webp'
import colaImg from './img/cola.jpg'


interface Data {
    menuItems: MenuItemProps[]
}


export const data = {
    menuItems: [
        {
            name: "Bier",
            price: 5,
            image: lagerImg
        },
        {
            name: "Cola",
            price: 4,
            image: colaImg
        },
        {
            name: "Mineral",
            price: 4,
            // image: colaImg
        }
    ]
}