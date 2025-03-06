import { MenuItemProps } from './MenuItem'

import lagerImg from './img/lager-hell.webp'
import alkoholfreiImg from './img/alkoholfrei.webp'
import grapefruitImg from './img/grapefruit_neu.webp'
import panacheImg from './img/panache.webp'
import colaImg from './img/cola.jpg'
import colaZeroImg from './img/cola_zero.jpg'
import eisteeImg from './img/eistee.jpg'
import schorleImg from './img/schorle.jpg'
import mineralMitImg from './img/mineral_mit.jpg'
import mineralOhneImg from './img/mineral_ohne.jpg'
import citroImg from './img/citro.jpg'
import rivellaImg from './img/rivella-rot.png'
import saftMitImg from './img/Moehl_SaftvomFass_mit.webp'
import saftOhneImg from './img/Moehl_SaftvomFass_alkoholfrei.webp'
import redWineImg from './img/red_wine.jpg'
import redWineGlassImg from './img/red_wine_glass.jpg'
import whiteWineImg from './img/white_wine.jpg'
import whiteWineGlassImg from './img/white_wine_glass.jpg'
import coffeeImg from './img/coffee.jpg'
import luzImg from './img/luz.png'
import biberfladenImg from './img/biberflade.jpg'
import appenzellerImg from './img/Appenzeller_Flasche.png'
import rahmlikoerImg from './img/AppenzellerRahmlikoer.png'
import hackbratenImg from './img/hackbraten.jpg'
import soupImg from './img/soup.jpeg'
import vegiImg from './img/vegi.jpg'


type Data = {
    menuItems: MenuItemProps[]
}


export const data: Data = {
    menuItems: [
        {
            name: "Mineral (Mit)",
            price: 4,
            image: mineralMitImg
        },
        {
            name: "Mineral (Ohne)",
            price: 4,
            image: mineralOhneImg
        },
        {
            name: "Cola",
            price: 4,
            image: colaImg
        },
        {
            name: "Cola Zero",
            price: 4,
            image: colaZeroImg
        },
        {
            name: "Citro",
            price: 4,
            image: citroImg
        },
        {
            name: "Rivella Rot",
            price: 4,
            image: rivellaImg
        },
        {
            name: "Shorley",
            price: 4,
            image: schorleImg
        },
        {
            name: "Eistee Zitrone",
            price: 4,
            image: eisteeImg
        },
        {
            name: "Schützengarten Lager",
            price: 5,
            image: lagerImg,
        },
        {
            name: "Schützengarten Panache",
            price: 5,
            image: panacheImg
        },
        {
            name: "Schützengarten Grapefruit",
            price: 5,
            image: grapefruitImg
        },
        {
            name: "Schützengarten Alkoholfrei",
            price: 5,
            image: alkoholfreiImg
        },
        {
            name: "Saft mit Alkohol",
            price: 6.50,
            image: saftMitImg
        },
        {
            name: "Saft ohne Alkohol",
            price: 6.50,
            image: saftOhneImg
        },
        {
            name: "Herbstgold Weiss 1dl",
            price: 6,
            image: whiteWineGlassImg
        },
        {
            name: "Herbstgold Weiss 5dl",
            price: 21,
            image: whiteWineImg
        },
        {
            name: "Herbstgold Rot 1dl",
            price: 6,
            image: redWineGlassImg
        },
        {
            name: "Herbstgold Rot 5dl",
            price: 21,
            image: redWineImg
        },
        {
            name: "Kaffee",
            price: 3.50,
            image: coffeeImg
        },
        {
            name: "Kaffee Lutz",
            price: 6.50,
            image: luzImg
        },
        {
            name: "Kaffee Biberflade",
            price: 6.50,
            image: biberfladenImg
        },
        {
            name: "Appenzeller",
            price: 6,
            image: appenzellerImg
        },
        {
            name: "Appenzeller Rahmlikör",
            price: 6,
            image: rahmlikoerImg
        },
        {
            name: "Hackbraten mit Kartoffelgratin",
            price: 22,
            image: hackbratenImg
        },
        {
            name: "Gemüsestrudel mit Kartoffelgratin",
            price: 18,
            image: vegiImg
        },
        // {
        //     name: "Gratin",
        //     price: 15
        // },
        {
            name: "Tagessuppe",
            price: 6,
            image: soupImg
        },
        {
            name: "Diverse Kuchen",
            price: 2.5
        },
    ]
}
