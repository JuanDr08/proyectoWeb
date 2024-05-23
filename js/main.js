import * as mod from './module/index.js'

let boton = document.querySelectorAll('button')// Se seleccionan todos lo botones

mod.actualView() // Se genera por defecto la vista de todos los productos
boton.forEach(val => { // Recorremos cada uno
    val.addEventListener('click', (e) => { // A cada uno se le agrega un evento de click
        let actual = e.target // Sacamos el foco del evento el cual es por lo general el LI
        mod.actualView(actual) // Lo mandamos a que cargue la vista a ctual cuan el contenido del foco como parametro
    })
})

let counter = await mod.getCartData() // Traemos la data del carrito para revisar su length
let cart = document.getElementById('counter') // Seleccionamos el counter que va en el carrito del html
counter ? cart.textContent = counter.length : cart.textContent = 0 // si la longitud de carrito es 0 entonces sera falso y le asignara al contador el valor
// 0, si el contador es diferente a 0 será verdadero y le asignara al contador el valor de la longitud del carrit