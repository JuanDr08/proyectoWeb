// Consultas a los endpoints del json

export const getAllHoodies = async () => {
    let res = await fetch("http://localhost:5501/abrigo").then(res => res.json());
    return res;
}

export const getAllPants = async () => {
    let res = await fetch("http://localhost:5501/pantalon").then(res => res.json());
    return res;
}

export const getAllTshirts = async () => {
    let res = await fetch("http://localhost:5501/camiseta").then(res => res.json());
    return res;
}

export const getAnyClotheByNameAndId = async (clothe ,id) => {
    let res = await fetch(`http://localhost:5501/${clothe}?id=${id}`).then(res => res.json());
    return res
}