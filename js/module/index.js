import { 
    abrigos,
    index,
    camisetas,
    pantalones,
    cart
 } from './formatter.js'
import {
    getAllHoodies
} from './hoodiesRQ.js'
import {
    getAllTshirts
} from './T-shirtsRQ.js'
import {
    getAllPants
} from './pantsRQ.js'
import {
    sendData,
    getCartData,
    deleteDataFromCart
} from './cartRQ.js'
import {
    getAnyClotheByNameAndId
} from './allPieces.js'

export {
    abrigos,
    index,
    camisetas,
    pantalones,
    cart,
    getAnyClotheByNameAndId,
    getAllHoodies,
    getAllPants,
    getAllTshirts,
    sendData,
    getCartData,
    deleteDataFromCart
}