import * as comp from '../components/index.js'
import * as mod from './index.js'

// Implementacion de ambos componentes al formateo de la pagina
customElements.define("my-card", comp.SimpleCard)
customElements.define("my-cartcard", comp.CartCard)


let container = document.getElementById("contenedor"); // Se selecciona el contenedor en el que val las cards de componentes
let title = "" // Se prepara el titulo para cada pestaña de la pagina

export const buttonFocused = (btn) => { // Funcion que evalua el boton que fue presionado para activarle la clase que muestra la seccion actual resaltada en cafe
    let boton = document.querySelectorAll('button')
    boton.forEach(val => {
        let [child] = val.childNodes // Se seleccionan los elementos hijos del boton que este presente en la iteracion actual, Dichos hijos suelen ser LI
        if(child.id != undefined){ // Se evalua si el hijo tiene o no un id, esto para filtrar entre los distintos bonotes que existen en la pantalla

            let clase = child.getAttribute('class') // Si tiene id entonces es correcto por lo que le sacamos la clase
            if (clase != null) { // Filtramos la posibilidad de que no exista clase
                if (!clase.includes("active") && child.id == btn)child.classList.add("active") // Si tiene clase entonces evaluamos si no tiene de la clase activadora y si el boton de la iteracion es el mismo al presionado, si cumple esto entonces se le da la clase activadora
                else if (clase.includes("active") && child.id != btn) child.classList.remove("active") // Si el boton de la iteracion tiene la clase y no es el mismo al que fue activado se la quitamos
            }else if (clase == null && child.id == btn) child.classList.add("active") // Si no tiene clase y es el boton presionado le damos la clase

        }
    })
}

// Funcion encargada de guardar la vista actual para que al refrescar la pagina se mantenga en la misma posicion
export const actualView = (actual = "all") => { // Por defecto se le asigna la vista de todos los productos
    actual.id != undefined ? localStorage.setItem("view",actual.id) : localStorage.setItem("default",actual) // Se guardan en localstorage
    let prove = localStorage.getItem("view")

    // De pendiendo de lo guardado se carga una o otra vista
    if(prove == null || prove == "all"){
        index("all")
    } else if (prove == "hoodies"){
        abrigos(prove)
    } else if (prove == "tshirt"){
        camisetas(prove)
    } else if (prove == "pants"){
        pantalones(prove)
    } else if (prove == "carrito"){
        cart(prove)
    }
}

// Funcion encargada de sumar todo lo de carrito y mostrarlo en la seccion correspondiente
const totalCart = async () => {
    let data = await mod.getCartData()
    let subTotal = document.querySelector("#total_pagar")
    let total = 0
    data.forEach(val => {
        total += val.precio
    })
    subTotal.textContent = `$ ${total}`
}

// Funcion encargada de eliminar la visa del carrito al cambiar de esa vista a cualquier otra de las 4 y generar el nuevo titulo de la nueva vista abierta
const deleteCartView = (ttl) => {
    let contenedor = document.querySelector('.body__products')
    let cartContainer = document.querySelector('.contenedor_carritos')
    if (contenedor.childElementCount == 3) {
        contenedor.removeChild(contenedor.lastChild)
        contenedor.replaceChild(container, cartContainer)
    } 
    contenedor.firstElementChild.textContent = ttl
}
// Funcion encargada de vaciar por completo el carrito
export const empty_Cart = async() => {
    let cart = await mod.getCartData()
    cart.forEach(val => {
        mod.deleteDataFromCart(true,"0", `${val.id}`)
    })
}

// Funcion encargada de realizar la compra que exista en el carrito
export const comprar = async () => {
    if(confirm("Deseas realizar la compra definitivamente?")){
        let cart = await mod.getCartData()
        cart.forEach(val => {
        mod.deleteDataFromCart(true, "0" , `${val.id}`)
        })
        alert("Compra realizada satisfactoriamente")
    } else confirm("Esta bien :(")
}

// Funcion que genera la vista principal de todos los carritos
export const index = async (btn) => {
    title = 'Todos los productos' // Se le asigna su titulo
    deleteCartView(title) // Se elimina la vista carrito si anteriormente se venia de esa vista
    container.innerHTML = ""
    buttonFocused(btn) // se manda a activar el boton que fue presionado

    // Se trae toda la data
    let hod = await mod.getAllHoodies();
    let shirt = await mod.getAllTshirts();
    let pant = await mod.getAllPants();
    let catalogo = [...hod, ...shirt, ...pant] //y se guarda toda en un array

    catalogo.forEach((val, i) => { // Se rrecorre dicho array para generar todas las cards 

        let card = document.createElement("my-card") // Secrea la etiqueta del componente
        // Se le asignan los atributos para que reconozcan que imagen y datos debe llevar cada uno
        if (i <= 4) card.setAttribute("abrigo", val.id)
        else if (i <= 9) card.setAttribute("camiseta", val.id)
        else if (i <= 14) card.setAttribute("pantalon", val.id)
        container.appendChild(card) // Se implementan en el contenedor
    })
}

// Funcion encargada de la generacion la vista de abrigo
export const abrigos = async (btn) => {
    title = 'Abrigos' // Se le asigna el titulo
    deleteCartView(title) // Se borra la vista carrito si fue previamente abierta
    container.innerHTML = "" // Se vacea cualquier contenido que tuviera el contenedor previamente
    buttonFocused(btn) // Se genera el boton que fue seleccionado
    let hod = await mod.getAllHoodies(); // Se trae la data
    // Recorremos dicha data generando el componente y sus aributos reconocedores, finalmente se agrega cada componente al contenedor
    hod.forEach(val => {
        let card = document.createElement("my-card")
        card.setAttribute("abrigo", val.id)
        container.appendChild(card)
    })
}

// Funcion encargada de la generacion de la vista de camistes, con la misma funcionalidad de la de abrigos
export const camisetas = async (btn) => {
    title = 'Camisetas'
    deleteCartView(title)
    container.innerHTML = ""
    buttonFocused(btn)
    let shirt = await mod.getAllTshirts();
    shirt.forEach(val => {
        let card = document.createElement("my-card")
        card.setAttribute("camiseta", val.id)
        container.appendChild(card)
    })
}

// Funcion encargada de la generacion de la vista pantalones, con misma funcionalidad que las otras
export const pantalones = async (btn) => {
    title = 'Pantalones'
    deleteCartView(title)
    container.innerHTML = "";
    buttonFocused(btn)
    let pant = await mod.getAllPants();
    pant.forEach(val => {
        let card = document.createElement("my-card")
        card.setAttribute("pantalon", val.id)
        container.appendChild(card)
    })

}

// Funcion encargada de generar la vista carrito con sus funcionalidades
export const cart = async (btn) => {
    buttonFocused(btn) // Se activa la clase del boton
    let body = document.querySelector('.body_products_index') // Se seleccion el padre del contenedor de las cards
    body.removeChild(body.lastChild) // Se remueve el ultimo(tercer) div de la vista carrito si esque previamente existia alguno, esto para que no se acumulen los botones de comprar
    body.firstElementChild.textContent = "Carrito" // Se genera su titulo
    container.id = "contenedor_cart" // Se re asigna un id para el contenedor de componentes, esto para que los estilos del carrito se empiecen a aplicar
    container.classList.add('contenedor_carritos') // se le agrega la clase para seguir agarrando estilos
    container.innerHTML = "" // Se limpia el contenido del contenedor
    body.appendChild(container) // Se agrega el contenedor totalmente limpio al elemento padre
    let cart = await mod.getCartData() // Se trae la data existente en el carrito
    // Se recorre dicha data con la finalidad de generar los componentes con la informacion de las cards previamente almacenadas en carrito
    cart.forEach(val => {
        let [, llaves] = Object.keys(val) // Se sacan las llaves del dato en iteracion y se posicionan en un arreglo para despues desestruturalo sacando el nombre del articulo
        let clothe = llaves.substring(0,(llaves.length - 2)) // Se genera una nueva cadena sin los ultimos dos caracteres de la cadena original los cuales suelen ser Id
        let card = document.createElement("my-cartcard") // Se crea el componente
        card.setAttribute(clothe, val[llaves]) // Se le asigna el atributo con los valores necesarios del elemento en iteracion para que reconozca que imagen y info mostrar
        card.cuantity.textContent = val.cantidad // Cuantity es una propiedad creada en la clase del componente la cual selecciona el nodo que contiene las unidades, lo que hacemos es insertarle la cantidad encontrada en carrito
        container.appendChild(card) //Se agrega al contenedor
    })

    // CREACION DE LA PARTE INFERIOR DEL CARRITO QUE CONTIENE LOS BOTONES DE COMPRAR, VACIAR Y LA SECCION DEL TOTAL
    let div = document.createElement("div");
    div.classList.add("pay__process")
    let sectionOne = document.createElement("section");
    sectionOne.classList.add("clean__cart")
    let sectionTwo = document.createElement("section");
    sectionTwo.classList.add("buy__now")
    let buttonOne = document.createElement("button");
    buttonOne.classList.add("clean")
    let pButOne = document.createElement("p")
    pButOne.textContent= "Vaciar carrito"
    buttonOne.appendChild(pButOne)
    let buttonTwo = document.createElement("button");
    buttonTwo.classList.add("buy")
    buttonTwo.textContent = "Comprar Ahora"
    let divSectTwo = document.createElement("div");
    divSectTwo.classList.add("total")
    let pOne = document.createElement("p");
    pOne.textContent = "Total"
    let pTwo = document.createElement("p");
    pTwo.id = "total_pagar"
    pTwo.textContent = "$ 0";
    sectionOne.appendChild(buttonOne);
    divSectTwo.append(pOne, pTwo)
    sectionTwo.append(divSectTwo, buttonTwo)
    div.append(sectionOne, sectionTwo)
    body.appendChild(div)

    // Evaluamos la existencia de almenos un producto en el carrito
    if (cart.length > 0) {
        let evento = document.querySelectorAll(".clean, .buy") // En tal caso seleccionamos los botones de vaciar y comprar
        evento.forEach(val => { // Recorremos cualquiera de los dos
        val.addEventListener("click", (e) => { // Les agregamos un evento de click
            if(e.target.innerHTML.includes("Vaciar")){ // Si se presiona vaciar Se pregunta por confirmacion y se llama a la funcion de vaciar
                if(confirm("Seguro desea vacear el carrito?")){
                    empty_Cart()
                } else alert("Esta bien :D") // Si se cancela se muestra esa alerta
            } else comprar() // Si no es vacear entonces se llama ala funcion de comparar
        })
    })
    } else {
        container.innerHTML = '<p>Tu carrito esta vacio :(</p>'; // Si la longitud del carrito es cero
    }

    totalCart() // Se llama a la funcion que lee los articulos y genera el total
}