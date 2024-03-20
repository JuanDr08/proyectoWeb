let carrito = ``;
let precio = 0;
let items = 0;
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
        <div>
            <img src="storage/img/blackJacket.webp" alt="chaqueta 1">
            <div class="informacion">
                <p>black leather jacket</p>
                <p class="precio">$100000</p>
                <button onclick="botones(1)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/blackLongJacket.webp" alt="chaqueta 2">
            <div class="informacion">
                <p>Long black jacket</p>
                <p class="precio">$180000</p>
                <button onclick="botones(2)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/blueLongJacket.webp" alt="chaqueta 3">
            <div class="informacion">
                <p>Long blue jacket</p>
                <p class="precio">$180000</p>
                <button onclick="botones(3)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/whiteLongJacket.webp" alt="chaqueta 4">
            <div class="informacion">
                <p>Long white jacket</p>
                <p class="precio">$180000</p>
                <button onclick="botones(4)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/omegaHoodie.webp" alt="chaqueta 5">
            <div class="informacion">
                <p>Black formal jacket</p>
                <p class="precio">$160000</p>
                <button onclick="botones(5)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalonMilitar.webp" alt="pantalon 1">
            <div class="informacion">
                <p>Military pant men</p>
                <p class="precio">$100000</p>
                <button onclick="botones(6)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalonBeige.webp" alt="pantalon 2">
            <div class="informacion">
                <p>Formal beige pan</p>
                <p class="precio">$100000</p>
                <button onclick="botones(7)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/pantalon.webp" alt="pantalon 3">
            <div class="informacion">
                <p>Gray jogger</p>
                <p class="precio">$90000</p>
                <button onclick="botones(8)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/militarMujer.webp" alt="pantalon 4">
            <div class="informacion">
                <p>Military pant women</p>
                <p class="precio">$100000</p>
                <button onclick="botones(9)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/formalPantMen.webp" alt="pantalon 5">
            <div class="informacion">
                <p>Formal pant men</p>
                <p class="precio">$100000</p>
                <button onclick="botones(10)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/poloWhite.webp" alt="camisetas 1">
            <div class="informacion">
                <p>White polo</p>
                <p class="precio">$60000</p>
                <button onclick="botones(11)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/nezukoTshirt.webp" alt="camisetas 2">
            <div class="informacion">
                <p>Nezuko t-shirt</p>
                <p class="precio">$60000</p>
                <button onclick="botones(12)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/iluminatiTshirt.webp" alt="camisetas 3">
            <div class="informacion">
                <p>Rokstar t-shirt</p>
                <p class="precio">$60000</p>
                <button onclick="botones(13)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/deportivaWhite.webp" alt="camisetas 4">
            <div class="informacion">
                <p>Deportive t-shirt white</p>
                <p class="precio">$60000</p>
                <button onclick="botones(14)">Buy</button>
            </div>
        </div>
        <div>
            <img src="storage/img/deportivaTshirt.webp" alt="camisetas 5">
            <div class="informacion">
                <p>Deportive t-shirt blue</p>
                <p class="precio">$60000</p>
                <button onclick="botones(15)">Buy</button>
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
        <img src="storage/img/blackJacket.webp" alt="chaqueta 1">
        <div class="informacion">
            <p>black leather jacket</p>
            <p class="precio">$100000</p>
            <button onclick="botones(1)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/blackLongJacket.webp" alt="chaqueta 2">
        <div class="informacion">
            <p>Long black jacket</p>
            <p class="precio">$180000</p>
            <button onclick="botones(2)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/blueLongJacket.webp" alt="chaqueta 3">
        <div class="informacion">
            <p>Long blue jacket</p>
            <p class="precio">$180000</p>
            <button onclick="botones(3)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/whiteLongJacket.webp" alt="chaqueta 4">
        <div class="informacion">
            <p>Long white jacket</p>
            <p class="precio">$180000</p>
            <button onclick="botones(4)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/omegaHoodie.webp" alt="chaqueta 5">
        <div class="informacion">
            <p>Black formal jacket</p>
            <p class="precio">$160000</p>
            <button onclick="botones(5)">Buy</button>
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
        <img src="storage/img/poloWhite.webp" alt="camisetas 1">
        <div class="informacion">
            <p>White polo</p>
            <p class="precio">$60000</p>
            <button onclick="botones(11)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/nezukoTshirt.webp" alt="camisetas 2">
        <div class="informacion">
            <p>Nezuko t-shirt</p>
            <p class="precio">$60000</p>
            <button onclick="botones(12)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/iluminatiTshirt.webp" alt="camisetas 3">
        <div class="informacion">
            <p>Rokstar t-shirt</p>
            <p class="precio">$60000</p>
            <button onclick="botones(13)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/deportivaWhite.webp" alt="camisetas 4">
        <div class="informacion">
            <p>Deportive t-shirt white</p>
            <p class="precio">$60000</p>
            <button onclick="botones(14)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/deportivaTshirt.webp" alt="camisetas 5">
        <div class="informacion">
            <p>Deportive t-shirt blue</p>
            <p class="precio">$60000</p>
            <button onclick="botones(15)">Buy</button>
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
        <img src="storage/img/pantalonMilitar.webp" alt="pantalon 1">
        <div class="informacion">
            <p>Military pant men</p>
            <p class="precio">$100000</p>
            <button onclick="botones(6)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/pantalonBeige.webp" alt="pantalon 2">
        <div class="informacion">
            <p>Formal beige pan</p>
            <p class="precio">$100000</p>
            <button onclick="botones(7)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/pantalon.webp" alt="pantalon 3">
        <div class="informacion">
            <p>Gray jogger</p>
            <p class="precio">$90000</p>
            <button onclick="botones(8)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/militarMujer.webp" alt="pantalon 4">
        <div class="informacion">
            <p>Military pant women</p>
            <p class="precio">$100000</p>
            <button onclick="botones(9)">Buy</button>
        </div>
    </div>
    <div>
        <img src="storage/img/formalPantMen.webp" alt="pantalon 5">
        <div class="informacion">
            <p>Formal pant men</p>
            <p class="precio">$100000</p>
            <button onclick="botones(10)">Buy</button>
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
    document.getElementById('total_pagar').innerHTML = '$ ' + precio;
    document.querySelector('.contenedor_carritos').innerHTML = carrito;
    document.getElementById('hoodies').classList.remove('active')
    document.getElementById('all').classList.remove('active')
    document.getElementById('tshirt').classList.remove('active')
    document.getElementById('pants').classList.remove('active')
    document.getElementById('carrito').classList.add('active')

}




const prdt1 = `
<div>
    <img src="storage/img/blackJacket.webp" alt="chaqueta 1">
    <div>
        <div class="informacion_cart">
            <p>black leather jacket</p>
            <p class="precio">$100000</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`;
const prdt2 = `
<div>
    <img src="storage/img/blackLongJacket.webp" alt="chaqueta 2">
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt3 = `
<div>
    <img src="storage/img/blueLongJacket.webp" alt="chaqueta 3">
    <div>
        <div class="informacion_cart">
            <p>Long blue jacket</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`  
const prdt4 = `
<div>
    <img src="storage/img/whiteLongJacket.webp" alt="chaqueta 4">
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt5 = `
<div>
    <img src="storage/img/omegaHoodie.webp" alt="chaqueta 5">
    <div>
        <div class="informacion_cart">
            <p>Black formal jacket</p>
            <p class="precio">$160000</p>
        </div>
        <div class="cantidad">
            <p>Cantidad</p>
            <p>1</p>
        </div>
        <div class="sub">
            <p>Sub-Total</p>
            <p>$ 160000</p>
        </div>
    </div>
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt6 = `
<div>
    <img src="storage/img/pantalonMilitar.webp" alt="pantalon 1">
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt7 = `
<div>
    <img src="storage/img/pantalonBeige.webp" alt="pantalon 2">
    <div>
        <div class="informacion_cart">
            <p>Formal beige pan</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt8 = `
<div>
    <img src="storage/img/pantalon.webp" alt="pantalon 3">
    <div>
        <div class="informacion_cart">
            <p>Gray jogger</p>
            <p class="precio">$90000</p>
        </div>
        <div class="cantidad">
            <p>Cantidad</p>
            <p>1</p>
        </div>
        <div class="sub">
            <p>Sub-Total</p>
            <p>$ 90000</p>
        </div>
    </div>
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt9 = `
<div>
    <img src="storage/img/militarMujer.webp" alt="pantalon 4">
    <div>
        <div class="informacion_cart">
            <p>Military pant women</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt10 = `
<div>
    <img src="storage/img/formalPantMen.webp" alt="pantalon 5">
    <div>
        <div class="informacion_cart">
            <p>Formal pant men</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt11 = `
<div>
    <img src="storage/img/poloWhite.webp" alt="camisetas 1">
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt12 = `
<div>
    <img src="storage/img/nezukoTshirt.webp" alt="camisetas 2">
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt13 = `
<div>
    <img src="storage/img/iluminatiTshirt.webp" alt="camisetas 3">
    <div>
        <div class="informacion_cart">
            <p>Rokstar t-shirt</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt14 = `
<div>
    <img src="storage/img/deportivaWhite.webp" alt="camisetas 4">
    <div>
        <div class="informacion_cart">
            <p>Deportive t-shirt white</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
const prdt15 = `
<div>
    <img src="storage/img/deportivaTshirt.webp" alt="camisetas 5">
    <div>
        <div class="informacion_cart">
            <p>Deportive t-shirt blue</p>
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
    <button><i class='bx bx-trash'></i></button>
</div>
`
function botones(buttonNum = Number) {
    switch (buttonNum) {
        case 1:
            carrito += prdt1
            precio += 180000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 2:
            carrito += prdt2
            precio += 180000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 3:
            carrito += prdt3
            precio += 180000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 4:
            carrito += prdt4
            precio += 180000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 5:
            carrito += prdt5
            precio += 160000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 6:
            carrito += prdt6
            precio += 100000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 7:
            carrito += prdt7
            precio += 100000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 8:
            carrito += prdt8
            precio += 90000
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 9:
            carrito += prdt9
            precio += 100000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 10:
            carrito += prdt10
            precio += 100000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 11:
            carrito += prdt11
            precio += 60000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 12:
            carrito += prdt12
            precio += 60000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 13:
            carrito += prdt13
            precio += 60000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 14:
            carrito += prdt14
            precio += 60000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        case 15:
            carrito += prdt15
            precio += 60000;
            items += 1;
            document.getElementById('counter').innerHTML = items;
            break
        
    }
}
console.log(items)
