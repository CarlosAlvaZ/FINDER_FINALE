export default async function fetchUserData(source){
    const data = await fetch(source)
    return await data.json()
}