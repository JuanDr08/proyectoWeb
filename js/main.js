function empty_Cart () {
    document.querySelector('.contenedor_carritos').innerHTML = '<p>Tu carrito esta vacio :(</p>'
}


function index() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Todos los productos</h1>
    <div class="contenedor" id="contenedor">
        <div>
            <img src="storage/img/blackJacket.webp" alt="chaqueta 1">
            <div class="informacion">
                <p>black leather jacket</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/blackLongJacket.webp" alt="chaqueta 2">
            <div class="informacion">
                <p>Long black jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/blueLongJacket.webp" alt="chaqueta 3">
            <div class="informacion">
                <p>Long blue jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/whiteLongJacket.webp" alt="chaqueta 4">
            <div class="informacion">
                <p>Long white jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/omegaHoodie.webp" alt="chaqueta 5">
            <div class="informacion">
                <p>Black formal jacket</p>
                <p class="precio">$160000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalonMilitar.webp" alt="pantalon 1">
            <div class="informacion">
                <p>Military pant men</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalonBeige.webp" alt="pantalon 2">
            <div class="informacion">
                <p>Formal beige pan</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalon.webp" alt="pantalon 3">
            <div class="informacion">
                <p>Gray jogger</p>
                <p class="precio">$90000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/militarMujer.webp" alt="pantalon 4">
            <div class="informacion">
                <p>Military pant women</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/formalPantMen.webp" alt="pantalon 5">
            <div class="informacion">
                <p>Formal pant men</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/poloWhite.webp" alt="camisetas 1">
            <div class="informacion">
                <p>White polo</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/nezukoTshirt.webp" alt="camisetas 2">
            <div class="informacion">
                <p>Nezuko t-shirt</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/iluminatiTshirt.webp" alt="camisetas 3">
            <div class="informacion">
                <p>Rokstar t-shirt</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/deportivaWhite.webp" alt="camisetas 4">
            <div class="informacion">
                <p>Deportive t-shirt white</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/deportivaTshirt.webp" alt="camisetas 5">
            <div class="informacion">
                <p>Deportive t-shirt blue</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
    </div>`;
    document.getElementById('all').classList.add('active')
    document.getElementById('hoodies').classList.remove('active')
    document.getElementById('tshirt').classList.remove('active')
    document.getElementById('pants').classList.remove('active')
    document.getElementById('carrito').classList.remove('active')
}

function abrigos () {
    document.querySelector('.body_products_index').innerHTML = `<h1>Abrigos</h1>
    <div class="contenedor" id="contenedor">
        <div>
            <img src="../storage/img/blackJacket.webp" alt="chaqueta 1">
            <div class="informacion">
                <p>black leather jacket</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/blackLongJacket.webp" alt="chaqueta 2">
            <div class="informacion">
                <p>Long black jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/blueLongJacket.webp" alt="chaqueta 3">
            <div class="informacion">
                <p>Long blue jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/whiteLongJacket.webp" alt="chaqueta 4">
            <div class="informacion">
                <p>Long white jacket</p>
                <p class="precio">$180000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/omegaHoodie.webp" alt="chaqueta 5">
            <div class="informacion">
                <p>Black formal jacket</p>
                <p class="precio">$160000</p>
                <button>Buy</button>
            </div>
        </div>
    </div>`;
    document.getElementById('hoodies').classList.add('active')
    document.getElementById('all').classList.remove('active')
    document.getElementById('tshirt').classList.remove('active')
    document.getElementById('pants').classList.remove('active')
    document.getElementById('carrito').classList.remove('active')
}
function camisetas() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Camisetas</h1>
    <div class="contenedor" id="contenedor">
        <div>
            <img src="../storage/img/poloWhite.webp" alt="camisetas 1">
            <div class="informacion">
                <p>White polo</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/nezukoTshirt.webp" alt="camisetas 2">
            <div class="informacion">
                <p>Nezuko t-shirt</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/iluminatiTshirt.webp" alt="camisetas 3">
            <div class="informacion">
                <p>Rokstar t-shirt</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/deportivaWhite.webp" alt="camisetas 4">
            <div class="informacion">
                <p>Deportive t-shirt white</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/deportivaTshirt.webp" alt="camisetas 5">
            <div class="informacion">
                <p>Deportive t-shirt blue</p>
                <p class="precio">$60000</p>
                <button>Buy</button>
            </div>
        </div>
    </div>`;
    document.getElementById('hoodies').classList.remove('active')
    document.getElementById('all').classList.remove('active')
    document.getElementById('tshirt').classList.add('active')
    document.getElementById('pants').classList.remove('active')
    document.getElementById('carrito').classList.remove('active')
}
function pantalones() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Pantalones</h1>
    <div class="contenedor" id="contenedor">
        <div>
            <img src="../storage/img/pantalonMilitar.webp" alt="pantalon 1">
            <div class="informacion">
                <p>Military pant men</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/pantalonBeige.webp" alt="pantalon 2">
            <div class="informacion">
                <p>Formal beige pan</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/pantalon.webp" alt="pantalon 3">
            <div class="informacion">
                <p>Gray jogger</p>
                <p class="precio">$90000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/militarMujer.webp" alt="pantalon 4">
            <div class="informacion">
                <p>Military pant women</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        <div>
            <img src="../storage/img/formalPantMen.webp" alt="pantalon 5">
            <div class="informacion">
                <p>Formal pant men</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
    </div>`
    document.getElementById('hoodies').classList.remove('active')
    document.getElementById('all').classList.remove('active')
    document.getElementById('tshirt').classList.remove('active')
    document.getElementById('pants').classList.add('active')
    document.getElementById('carrito').classList.remove('active')
}

function cart() {
    document.querySelector('.body_products_index').innerHTML = `<h1>Carrito</h1>
    <div class="contenedor contenedor_carritos" id="contenedor_cart">
        <div>
            <img src="../storage/img/blackLongJacket.webp" alt="chaqueta 2">
            <div>
                <div class="informacion_cart">
                    <p>Long black jacket</p>
                    <p class="precio">$180000</p>
                </div>
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>1</p>
                </div>
                <div class="sub">
                    <p>Sub-Total</p>
                    <p>$ 180000</p>
                </div>
            </div>
            <a href="#"><i class='bx bx-trash'></i></a>
        </div>
        <div>
            <img src="../storage/img/nezukoTshirt.webp" alt="camisetas 2">
            <div>
                <div class="informacion_cart">
                    <p>Nezuko t-shirt</p>
                    <p class="precio">$60000</p>
                </div>
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>1</p>
                </div>
                <div class="sub">
                    <p>Sub-Total</p>
                    <p>$ 60000</p>
                </div>
            </div>
            <a href="#"><i class='bx bx-trash'></i></a>
        </div>
        <div>
            <img src="../storage/img/pantalonMilitar.webp" alt="pantalon 1">
            <div>
                <div class="informacion_cart">
                    <p>Military pant men</p>
                    <p class="precio">$100000</p>
                </div>
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>1</p>
                </div>
                <div class="sub">
                    <p>Sub-Total</p>
                    <p>$ 100000</p>
                </div>
            </div>
            <a href="#"><i class='bx bx-trash'></i></a>
        </div>
        <div>
            <img src="../storage/img/whiteLongJacket.webp" alt="pantalon 1">
            <div>
                <div class="informacion_cart">
                    <p>Long white jacket</p>
                    <p class="precio">$180000</p>
                </div>
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>1</p>
                </div>
                <div class="sub">
                    <p>Sub-Total</p>
                    <p>$ 180000</p>
                </div>
            </div>
            <a href="#"><i class='bx bx-trash'></i></a>
        </div>
        <div>
            <img src="../storage/img/poloWhite.webp" alt="pantalon 1">
            <div>
                <div class="informacion_cart">
                    <p>White polo</p>
                    <p class="precio">$60000</p>
                </div>
                <div class="cantidad">
                    <p>Cantidad</p>
                    <p>1</p>
                </div>
                <div class="sub">
                    <p>Sub-Total</p>
                    <p>$ 60000</p>
                </div>
            </div>
            <a href="#"><i class='bx bx-trash'></i></a>
        </div>
    </div>
    <div class="pay__process">
        <section class="clean__cart">
            <button onclick="empty_Cart()"><p>Vacear carrito</p></button>
        </section>
        <section class="buy__now">
            <div class="total">
                <p>Total</p>
                <p>$ 580000</p>
            </div>
            <button onclick="alert('Gracias por tu compra, esta en camino, llegara en unos dias')">Comprar Ahora</button>
        </section>
    </div>`
    document.getElementById('hoodies').classList.remove('active')
    document.getElementById('all').classList.remove('active')
    document.getElementById('tshirt').classList.remove('active')
    document.getElementById('pants').classList.remove('active')
    document.getElementById('carrito').classList.add('active')
}