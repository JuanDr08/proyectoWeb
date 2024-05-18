let container = document.getElementById("contenedor");
let title = ""

const buttonFocused = (btn) => {
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





const deleteCartView = (ttl) => {
    let contenedor = document.querySelector('.body__products')
    let cartContainer = document.querySelector('.contenedor_carritos')
    if (contenedor.childElementCount == 3) {
        contenedor.removeChild(contenedor.lastChild)
        contenedor.replaceChild(container, cartContainer)
    } 
    contenedor.firstElementChild.textContent = ttl
}





export function empty_Cart () {
    document.querySelector('.contenedor_carritos').innerHTML = '<p>Tu carrito esta vacio :(</p>';
    carrito = ``;
    precio = 0;
    items = 0;
    document.getElementById('total_pagar').innerHTML = '$ ' + precio.toString() ;
    
}
export function comprar () {
    alert('Gracias por tu compra, esta en camino, llegara en unos dias')
    document.querySelector('.contenedor_carritos').innerHTML = '<p>Tu carrito esta vacio :(</p>';
    items = 0;
    
}
export function index(btn) {
    title = 'Todos los productos'
    deleteCartView(title)
    buttonFocused(btn)
    container.innerHTML = ""
    
    

    
}
export function abrigos (btn) {
    title = 'Abrigos'
    deleteCartView(title)
    container.innerHTML = ""

    buttonFocused(btn)
}
export function camisetas(btn) {
    title = 'Camisetas'
    deleteCartView(title)
    container.innerHTML = ""

    buttonFocused(btn)
}
export function pantalones(btn) {
    title = 'Pantalones'
    deleteCartView(title)
    container.innerHTML = "";

    buttonFocused(btn)
}

export function cart(btn) {
    document.querySelector('.body_products_index').innerHTML = `<h1>Carrito</h1>
    <div class="contenedor contenedor_carritos" id="contenedor_cart">
    </div>
    <div class="pay__process">
        <section class="clean__cart">
            <button onclick="empty_Cart()"><p>Vaciar carrito</p></button>
        </section>
        <section class="buy__now">
            <div class="total">
                <p>Total</p>
                <p id="total_pagar">$ 0</p>
            </div>
            <button onclick="comprar()">Comprar Ahora</button>
        </section>
    </div>`

    buttonFocused(btn)


}