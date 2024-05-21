export const getAllHoodies = async () => {
    let res = await fetch("http://localhost:5501/abrigo").then(res => res.json());
    return res;
}

export const getAHoodieFromId = async (id) => {
    let res = await fetch(`http://localhost:5501/abrigo?id=${id}`).then(res => res.json());
    return res;
}