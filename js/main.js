import * as mod from './module/index.js'
import * as comp from './components/index.js'

let boton = document.querySelectorAll('button')
boton.forEach(val => {
    val.addEventListener('click', () => {
        let [child] = val.childNodes
        if (child.getAttribute('id') == 'all') {
            mod.index()
        }
        else if (child.getAttribute('id') == "hoodies") {
            mod.abrigos()
        }
        else if (child.getAttribute('id') == "tshirt") {
            mod.camisetas()
        }
        else if (child.getAttribute('id') == "pants") {
            mod.pantalones()
        }
        else if (child.getAttribute('id') == "carrito") {
            mod.cart()
        }
    })
})

