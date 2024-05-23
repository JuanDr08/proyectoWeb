import * as m from '../module/index.js'
// Estructura Card comun
export class SimpleCard extends HTMLElement {
    // Propiedades que seran usadas
    name
    price
    src
    btn
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        // Generacion de la estructura del componente
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
        // Asignacion de las propiedades a sus respectivos elementos del html creado
        this.name = this.shadowRoot.querySelector(".name");
        this.price = this.shadowRoot.querySelector(".precio");
        this.src = this.shadowRoot.querySelector("img");
        this.btn = this.shadowRoot.querySelector(".add");
    }
    // Funcion generadora de la imagen e inforamcion de la card segun sus parametros creados
    async generateACardWithCode(clothe ,id) {
        let [res] = await m.getAnyClotheByNameAndId(clothe, id) // Se trae la data
        this.src.setAttribute("src", res.imagen)// Se le asigna la imagen segun lo que se haya traido
        this.name.textContent = res.nombre // Su precio segun la info traida
        this.price.textContent = "$ " + res.precio // Su precion segun el traido
        // Se le agrega la funcionalidad a los botones del componente
        this.btn.addEventListener('click', async() => { // Si se presiona en añadir
            let clthName = clothe + "Id" // Se genera el nombre del producto
            await m.sendData(clthName, id, res.precio) // Se hace el envio de la info del producto a la funcion sendData y posteriormente publicacion al carrito
            alert("Producto añadido satisfactoriamente al Carrito") // Alerta de finalizacion
        })
    }

    static get observedAttributes() {
        return ["abrigo", "pantalon", "camiseta"];
    }
    attributeChangedCallback(name, old, now) {
        // Se observan los 3 tipos posibles de articulos para generar cards con ellos
        if(name == "abrigo") this.generateACardWithCode(name ,now);
        if(name == "pantalon") this.generateACardWithCode(name ,now);
        if(name == "camiseta") this.generateACardWithCode(name ,now);

    }
}
//Estructura card carrito


export class CartCard extends HTMLElement {
    // Propiedades que seran usadas
    name
    price
    src
    cuantity
    delete
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
        // Generacion del html junto con el css
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
        // Asignacion de las propiedades a sus respectivos elementos HTML
        this.name = this.shadowRoot.querySelector(".informacion_cart p")
        this.price = this.shadowRoot.querySelector(".precio")
        this.src = this.shadowRoot.querySelector("img")
        this.cuantity = this.shadowRoot.querySelector(".cantidad").lastElementChild
        this.delete = this.shadowRoot.querySelector(".eliminar")
    }
    async generateACardWithCode(clothe ,id) { // Generacion de card con la info que se le sea pasada
        let [res] = await m.getAnyClotheByNameAndId(clothe, id) //Se trae la data con la info pasada
        let cantidad = this.cuantity.textContent // Traemos el contenido del nodo de cantidad
        this.src.setAttribute("src", res.imagen) // Generamos la imagen con la que se fue traida
        this.name.textContent = res.nombre // Generamos nombre con el traido
        this.price.textContent = "$ " + res.precio // Generamos precio con el traido
        this.shadowRoot.querySelector(".sub").lastElementChild.textContent = `$ ${Number(cantidad * res.precio)}` // Generamos el subtotal multiplicando cantidad por precion individual y lo incorporamos en su respectivo nodo
        // Funcionalidad a los botones del componente
        this.delete.addEventListener("click", (e)=> { // Si se da click en la basura
            let clthName = clothe + "Id" // Se genera el nombre del producto
            m.deleteDataFromCart(false, clthName , id) // Se manda a eliminar el articulo con los datos requeridos
            alert("Producto eliminado satisfactoriamente") // Se avisa de la eliminacion satisfactoria
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
