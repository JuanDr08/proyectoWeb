export const getAnyClotheByNameAndId = async (clothe ,id) => {
    let res = await fetch(`http://localhost:3000/${clothe}?id=${id}`).then(res => res.json());
    return res
}