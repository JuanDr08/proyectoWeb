import * as comp from '../components/index.js'
import * as mod from './index.js'


customElements.define("my-card", comp.SimpleCard)
customElements.define("my-cartcard", comp.CartCard)


let container = document.getElementById("contenedor");
let title = ""

export const buttonFocused = (btn) => {
    let boton = document.querySelectorAll('button')
    boton.forEach(val => {
        let [child] = val.childNodes
        if(child.id != undefined){

            let clase = child.getAttribute('class')
            if (clase != null) {
                if (!clase.includes("active") && child.id == btn)child.classList.add("active")
                else if (clase.includes("active") && child.id != btn) child.classList.remove("active")
            }else if (clase == null && child.id == btn) child.classList.add("active")

        }
    })
}


export const actualView = (actual = "all") => {
    actual.id != undefined ? localStorage.setItem("view",actual.id) : localStorage.setItem("default",actual)
    let prove = localStorage.getItem("view")
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


const deleteCartView = (ttl) => {
    let contenedor = document.querySelector('.body__products')
    let cartContainer = document.querySelector('.contenedor_carritos')
    if (contenedor.childElementCount == 3) {
        contenedor.removeChild(contenedor.lastChild)
        contenedor.replaceChild(container, cartContainer)
    } 
    contenedor.firstElementChild.textContent = ttl
}

export const empty_Cart = async() => {
    let cart = await mod.getCartData()
    cart.forEach(val => {
        mod.deleteDataFromCart(true,"0", `${val.id}`)
    })
}
export const comprar = async () => {
    if(confirm("Deseas realizar la compra definitivamente?")){
        let cart = await mod.getCartData()
        cart.forEach(val => {
        mod.deleteDataFromCart(true, "0" , `${val.id}`)
        })
        alert("Compra realizada satisfactoriamente")
    } else confirm("Esta bien :(")
}
export const index = async (btn) => {
    title = 'Todos los productos'
    deleteCartView(title)
    container.innerHTML = ""
    buttonFocused(btn)
    let hod = await mod.getAllHoodies();
    let shirt = await mod.getAllTshirts();
    let pant = await mod.getAllPants();
    let catalogo = [...hod, ...shirt, ...pant]
    catalogo.forEach((val, i) => {
        let card = document.createElement("my-card")
        if (i <= 4) card.setAttribute("abrigo", val.id)
        else if (i <= 9) card.setAttribute("camiseta", val.id)
        else if (i <= 14) card.setAttribute("pantalon", val.id)
        container.appendChild(card)
    })
}
export const abrigos = async (btn) => {
    title = 'Abrigos'
    deleteCartView(title)
    container.innerHTML = ""
    buttonFocused(btn)
    let hod = await mod.getAllHoodies();
    hod.forEach(val => {
        let card = document.createElement("my-card")
        card.setAttribute("abrigo", val.id)
        container.appendChild(card)
    })
}
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

export const cart = async (btn) => {
    let body = document.querySelector('.body_products_index')
    body.removeChild(body.lastChild)
    body.firstElementChild.textContent = "Carrito"
    container.id = "contenedor_cart"
    container.classList.add('contenedor_carritos')
    container.innerHTML = ""
    body.appendChild(container)
    let cart = await mod.getCartData()
    cart.forEach(val => {
        let [, llaves] = Object.keys(val)
        let clothe = llaves.substring(0,(llaves.length - 2))
        let card = document.createElement("my-cartcard")
        card.setAttribute(clothe, val[llaves])
        card.cuantity.textContent = val.cantidad
        container.appendChild(card)
    })
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
    if (cart.length > 0) {
        let evento = document.querySelectorAll(".clean, .buy")
        evento.forEach(val => {
        val.addEventListener("click", (e) => {
            if(e.target.innerHTML.includes("Vaciar")){
                if(confirm("Seguro desea vacear el carrito?")){
                    empty_Cart()
                } else alert("Esta bien :D")
            } else comprar()
        })
    })
    } else {
        container.innerHTML = '<p>Tu carrito esta vacio :(</p>';
    }
    buttonFocused(btn)
}