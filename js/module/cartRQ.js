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
            id: cart.length + 1
        })
        fetch("http://localhost:3000/carrito", config)
    }else {
        for (let val of cart) {
            if (clthName in val && clthID == val[clthName]){
                config.method = "PATCH"
                config.body = JSON.stringify({
                    cantidad: val.cantidad + 1
                })
                console.log(config);
                fetch(`http://localhost:3000/carrito`, config)
                break
            }else if (val.id == cart.length){
                config.method = "POST"
                config.body = JSON.stringify({
                    [clthName]: clthID,
                    cantidad: 1,
                    id: cart.length + 1
                })
                fetch("http://localhost:3000/carrito", config)
            }
        }
    }
}

export const getCartData = async () => {
    let res = await fetch("http://localhost:3000/carrito").then(res => res.json());
    return res;
}

