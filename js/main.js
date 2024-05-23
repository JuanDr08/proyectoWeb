import * as mod from './module/index.js'

let boton = document.querySelectorAll('button')
// mod.index("all")

let local = localStorage.getItem("view")
mod.actualView()
boton.forEach(val => {
    val.addEventListener('click', (e) => {
        let actual = e.target
        mod.actualView(actual)
        // let [child] = val.childNodes
        // if (child.id == 'all') {
        //     mod.index(child.id)
        // }
        // else if (child.id == "hoodies") {
        //     mod.abrigos(child.id)
        // }
        // else if (child.id == "tshirt") {
        //     mod.camisetas(child.id)
        // }
        // else if (child.id == "pants") {
        //     mod.pantalones(child.id)
        // }
        // else if (child.id == "carrito") {
        //     mod.cart(child.id)
        // }
    })
})

let counter = await mod.getCartData()
let cart = document.getElementById('counter')
counter ? cart.textContent = counter.length : cart.textContent = 0