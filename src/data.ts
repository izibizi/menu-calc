import { MenuItemProps } from './MenuItem'

import lagerImg from './img/lager-hell.webp'
import colaImg from './img/cola.jpg'


type Data = {
    menuItems: MenuItemProps[]
}


export const data: Data = {
    menuItems: [
        {
            name: "Mineral (Mit)",
            price: 4,
        },
        {
            name: "Mineral (Ohne)",
            price: 4,
        },
        {
            name: "Cola",
            price: 4,
            image: colaImg
        },
        {
            name: "Cola Zero",
            price: 4,
        },
        {
            name: "Citro",
            price: 4,
        },
        {
            name: "Rivella rot",
            price: 4,
        },
        {
            name: "Schorle",
            price: 4,
        },
        {
            name: "Eistee citrone",
            price: 4,
        },
        {
            name: "Schützengarten Lager",
            price: 5,
            image: lagerImg,
        },
        {
            name: "Schützengarten Panache",
            price: 5,
        },
        {
            name: "Schützengarten Grapefruit",
            price: 5,
        },
        {
            name: "Schützengold (alkoholfrei)",
            price: 5,
        },
        {
            name: "Saft vom Fass (Mit)",
            price: 6.50,
        },
        {
            name: "Saft vom Fass (Ohne)",
            price: 6.50,
        },
        {
            name: "Herbstgold Weiss 10cl",
            price: 6,
        },
        {
            name: "Herbstgold Weiss 50cl",
            price: 21,
        },
        {
            name: "Herbstgold Rot 10cl",
            price: 6,
        },
        {
            name: "Herbstgold Rot 50cl",
            price: 21,
        },
        {
            name: "Kaffee",
            price: 3.50,
        },
        {
            name: "Kaffee Lutz",
            price: 6.50,
        },
        {
            name: "Kaffee Biberflade",
            price: 6.50,
        },
        {
            name: "Appenzeller",
            price: 6,
        },
        {
            name: "Appenzeller Rahmlikör",
            price: 6,
        },
    ]
}