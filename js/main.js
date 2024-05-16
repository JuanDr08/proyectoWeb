let carrito = ``;
function empty_Cart () {
    document.querySelector('.contenedor_carritos').innerHTML = '<p>Tu carrito esta vacio :(</p>';
    carrito = ``;
    precio = 0;
    items = 0;
    document.getElementById('total_pagar').innerHTML = '$ ' + precio.toString() ;
    document.getElementById('counter').innerHTML = items;
}
function comprar () {
    alert('Gracias por tu compra, esta en camino, llegara en unos dias')
    document.querySelector('.contenedor_carritos').innerHTML = '<p>Tu carrito esta vacio :(</p>';
    items = 0;
    document.getElementById('counter').innerHTML = items;
}
function index() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Todos los productos</h1>
    <div class="contenedor" id="contenedor">
        
    </div>`;
    document.querySelectorAll('#hoodies, #tshirt, #pants, #carrito').forEach(elemento => {
        elemento.classList.remove('active')
    })
    document.getElementById('all').classList.add('active')
    document.getElementById('counter').innerHTML = items;
}
function abrigos () {
    document.querySelector('.body_products_index').innerHTML = `<h1>Abrigos</h1>
    <div class="contenedor" id="contenedor">
    
    </div>`;
    document.querySelectorAll('#all, #tshirt, #pants, #carrito').forEach(elemento => {
        elemento.classList.remove('active')
    })
    document.getElementById('hoodies').classList.add('active')
    document.getElementById('counter').innerHTML = items;
}
function camisetas() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Camisetas</h1>
    <div class="contenedor" id="contenedor">
    
    </div>`;
    document.querySelectorAll('#all, #hoodies, #pants, #carrito').forEach(elemento => {
        elemento.classList.remove('active')
    })
    document.getElementById('tshirt').classList.add('active')
    document.getElementById('counter').innerHTML = items;
}
function pantalones() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Pantalones</h1>
    <div class="contenedor" id="contenedor">
    
    </div>`
    document.querySelectorAll('#all, #hoodies, #tshirt, #carrito').forEach(elemento => {
        elemento.classList.remove('active')
    })
    document.getElementById('pants').classList.add('active')
    document.getElementById('counter').innerHTML = items;
}

function cart() {
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
    document.querySelectorAll('#all, #hoodies, #tshirt, #pants').forEach(elemento => {
        elemento.classList.remove('active')
    })
    document.getElementById('carrito').classList.add('active')
    document.getElementById('counter').innerHTML = items;
    document.getElementById('total_pagar').innerHTML = '$ ' + precio;
    document.querySelector('.contenedor_carritos').innerHTML = carrito;

}