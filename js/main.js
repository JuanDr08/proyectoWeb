import * as mod from './module/index.js'
import * as comp from './components/index.js'

let boton = document.querySelectorAll('button')

boton.forEach(val => {
    val.addEventListener('click', () => {
        let [child] = val.childNodes
        if (child.id == 'all') {
            mod.index(child.id)
        }
        else if (child.id == "hoodies") {
            mod.abrigos(child.id)
        }
        else if (child.id == "tshirt") {
            mod.camisetas(child.id)
        }
        else if (child.id == "pants") {
            mod.pantalones(child.id)
        }
        else if (child.id == "carrito") {
            mod.cart(child.id)
        }
    })
})

