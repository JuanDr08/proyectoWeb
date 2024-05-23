export const sendData = async (clthName, clthID) => {
    let cart = await getCartData();
    let config = {
        headers: {
            "content-type": "application/json"
        }
    }
    if (cart.length == 0) {
        config.method = "POST"
        config.body = JSON.stringify({
            [clthName]: clthID,
            cantidad: 1,
            id: `${cart.length + 1}`
        })
        fetch("http://localhost:5501/carrito", config)
    }else {
        for (let val of cart) {
            if (clthName in val && clthID == val[clthName]){
                config.method = "PATCH"
                config.body = JSON.stringify({
                    cantidad: val.cantidad + 1
                })
                fetch(`http://localhost:5501/carrito/${val.id}`, config)
                break
            }else if (val.id == cart[cart.length - 1].id){
                config.method = "POST"
                config.body = JSON.stringify({
                    [clthName]: clthID,
                    cantidad: 1,
                    id: `${cart.length + 1}`
                })
                fetch("http://localhost:5501/carrito", config)
            }
        }
    }
}

export const getCartData = async () => {
    let res = await fetch("http://localhost:5501/carrito").then(res => res.json());
    return res;
}

export const deleteDataFromCart = async (all = false, clthName = "0", clthId = "0") => {
    let config = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({})
    }
    if (all){
        fetch(`http://localhost:5501/carrito/${clthId}`, config)
    }else {
        if(confirm("Estas seguro que deseas eliminar el elemento?")){
            let cart = await getCartData()
            cart.forEach(val => {
                console.log(val, clthId);
                if(val[clthName] == clthId){
                    fetch(`http://localhost:5501/carrito/${val.id}`, config)
                } 
            })
        }
    }
}