import * as m from '../module/index.js'

export class SimpleCard extends HTMLElement {
    name
    price
    src
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/style.css">
        <div>
            <img>
            <div class="informacion">
                <p class="name">black leather jacket</p>
                <p class="precio">$100000</p>
                <button>Buy</button>
            </div>
        </div>
        `
        this.name = this.shadowRoot.querySelector(".name");
        this.price = this.shadowRoot.querySelector(".precio");
        this.src = this.shadowRoot.querySelector("img")
    }

    async generateACardWithCode(clothe ,id) {
        let [res] = await m.getAnyClotheByNameAndId(clothe, id)
        this.src.setAttribute("src", res.imagen)
        this.name.textContent = res.nombre
        this.price.textContent = "$ " + res.precio
    }

    static get observedAttributes() {
        return ["abrigo", "pantalon", "camiseta"];
    }
    attributeChangedCallback(name, old, now) {
        if(name == "abrigo") this.generateACardWithCode(name ,now);
        if(name == "pantalon") this.generateACardWithCode(name ,now);
        if(name == "camiseta") this.generateACardWithCode(name ,now);

    }
}
//Estructura card carrito


/* <div>
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
    <button onclick="borrar()" class="eliminar"><i class='bx bx-trash'></i></button>
</div> */
