export const getAllPants = async () => {
    let res = await fetch("http://localhost:5501/pantalon").then(res => res.json());
    return res;
}

export const getAPantFromId = async (id) => {
    let res = await fetch(`http://localhost:5501/pantalon?id=${id}`).then(res => res.json());
    return res;
}