// Funcion encargada de enviar al carrito la informacion de un componente que la llame
export const sendData = async (clthName, clthID, price) => { // recibe el nombre del producto, su id, y su precio
    let cart = await getCartData(); // Se carga la data existente del carrito
    let config = { // se genera una configuracion  basica
        headers: {
            "content-type": "application/json"
        }
    }
    if (cart.length == 0) { // Si no hay existencias en el carrito entonces se generara el primer articulo naturalmente en metodo POST
        config.method = "POST"
        config.body = JSON.stringify({
            [clthName]: clthID,
            cantidad: 1,
            precio: price,
            id: `${cart.length + 1}`
        })
        fetch("http://localhost:5501/carrito", config)
    }else {
        for (let val of cart) { // Si ya habian existencias entonces vamos a recorrer el carrito
            if (clthName in val && clthID == val[clthName]){ // Si el producto esta en la iteracion actual y su id es el mismo al de la iteracion entonces solo se le aumentara la cantidad y multiplicara el precio
                let unidades = val.cantidad + 1
                config.method = "PATCH"
                config.body = JSON.stringify({
                    cantidad: unidades,
                    precio: (unidades * price)
                })
                fetch(`http://localhost:5501/carrito/${val.id}`, config) // Despues del proceso se hace el envio del nuevo valor de cantidad en metodo PATCH
                break
            }else if (val.id == cart[cart.length - 1].id){ // Si no es igual, y el id es el mismo al id del ultimo elemento en el carrito quiere decir que estamos en la ultima iteracion y no se encontraron similitudes previamente
                config.method = "POST"
                config.body = JSON.stringify({ // Simplemente generamos un nuevo articulo
                    [clthName]: clthID,
                    cantidad: 1,
                    precio: price,
                    id: `${cart.length + 1}`
                })
                fetch("http://localhost:5501/carrito", config) // Y es mandado por POST
            }
        }
    }
}

// Funcion encargada de traer la data del carrito
export const getCartData = async () => {
    let res = await fetch("http://localhost:5501/carrito").then(res => res.json());
    return res;
}

// Funcion encargada de la eliminacion de un producto o el carrito completo
export const deleteDataFromCart = async (all = false, clthName = "0", clthId = "0") => { // Recibe como parametro principal uno especial, que define si se quiere eliminar un articulo o todo el carrito, los otros son nombre e id
    let config = { // Configuracion basica a ser usada
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({})
    }
    if (all){ // Si el parametro especial es verdadero quiere decir que queremos eliminar todo el carrito
        fetch(`http://localhost:5501/carrito/${clthId}`, config) // Se genera la consulta enfocada en cada id que se le va pasando (ya que esta siendo llamada desde un forEach) de cada producto y se usa el metodo DELETE
    }else { // Si no es true entonces quiere decir que queremos eliminar un producto del carrito
        if(confirm("Estas seguro que deseas eliminar el elemento?")){
            let cart = await getCartData() // Se trae la data del carrito
            cart.forEach(val => { // Recorremos cada dato
                if(val[clthName] == clthId){ // Si encontramos el id de producto del mismo que se le fue pasado entonces se elimina ese articulo especifico
                    fetch(`http://localhost:5501/carrito/${val.id}`, config)
                } 
            })
        }
    }
}