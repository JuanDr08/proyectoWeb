import * as m from '../module/index.js'
// Estructura Card comun
export class SimpleCard extends HTMLElement {
    name
    price
    src
    btn
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
                <button class="add">Buy</button>
            </div>
        </div>
        `
        this.name = this.shadowRoot.querySelector(".name");
        this.price = this.shadowRoot.querySelector(".precio");
        this.src = this.shadowRoot.querySelector("img");
        this.btn = this.shadowRoot.querySelector(".add");
    }

    async generateACardWithCode(clothe ,id) {
        let [res] = await m.getAnyClotheByNameAndId(clothe, id)
        this.src.setAttribute("src", res.imagen)
        this.name.textContent = res.nombre
        this.price.textContent = "$ " + res.precio
        this.btn.addEventListener('click', async() => {
            let clthName = clothe + "Id"
            await m.sendData(clthName, id)
        })
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


export class CartCard extends HTMLElement {
    name
    price
    src
    cuantity
    delete
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            div:has(img){
                display:flex;
                gap: 20px;
            }
            div > img {
                border-radius: 20px 20px 20px 20px;
            }
            div > button i {
                font-size: 1.5vw;
                color: var(--color-hover);
            }
            div > button  {
                border: none;
                cursor: pointer;
                transition: 1s;
                background: none;
            }
            div > button:active > i{
                color: red;
            }
            div > button:hover > i {
                scale: 1.1;
            }
            div:has(img) > div {
                display: flex;
                align-items: center;
                gap: 2vw;
            }
            .informacion_cart,
            .cantidad,
            .sub {
                height: max-content;
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: 15px;
            }
            .informacion_cart p:first-child,
            .cantidad p:first-child,
            .sub p:first-child {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.3vw;
                font-weight: 600; 
                color: var(--color-hover);
                text-align: center;

            }
            .cantidad p:last-child,
            .informacion_cart p:last-child,
            .sub p:last-child {
                width: 100%;
                text-align: center;
                font-weight: 500;
                font-size: 1vw;
            }
            @media (width < 1024px) and (height > 629px), (width = 1024px) and (height = 1366px){
                div img {
                    width: 15vh;
                    height: 100%;
                }
                div button i {
                    font-size: 2vh;
                }
                div:has(img) > div {
                    flex-direction: column;
                    gap: 0;
                }
                .informacion_cart,
                .cantidad,
                .sub {
                    gap: 0;
                }
                .informacion_cart p:first-child,
                .cantidad p:first-child,
                .sub p:first-child {
                    font-size: 2vh;
                }
                .cantidad p:last-child,
                .informacion_cart p:last-child,
                .sub p:last-child {
                    font-size: 1.5vh;
                }
            }
        </style>
        <link rel="stylesheet" href="css/carrito.css">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <div>
            <img>
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
            <button class="eliminar"><i class='bx bx-trash'></i></button>
        </div>
        `
        this.name = this.shadowRoot.querySelector(".informacion_cart p")
        this.price = this.shadowRoot.querySelector(".precio")
        this.src = this.shadowRoot.querySelector("img")
        this.cuantity = this.shadowRoot.querySelector(".cantidad").lastElementChild
        this.delete = this.shadowRoot.querySelector(".eliminar")
    }
    async generateACardWithCode(clothe ,id) {
        let [res] = await m.getAnyClotheByNameAndId(clothe, id)
        this.src.setAttribute("src", res.imagen)
        this.name.textContent = res.nombre
        this.price.textContent = "$ " + res.precio
        this.delete.addEventListener("click", (e)=> {
            let clthName = clothe + "Id"
            m.deleteDataFromCart(false, clthName ,id)
        })
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
