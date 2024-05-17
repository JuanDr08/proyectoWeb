export const getAllTshirts = async () => {
    let res = await fetch("http://localhost:3000/camiseta").then(res => res.json());
    return res;
}

export const getATshirtFromId = async (id) => {
    let res = await fetch(`http://localhost:3000/camiseta?id=${id}`).then(res => res.json());
    return res;
}