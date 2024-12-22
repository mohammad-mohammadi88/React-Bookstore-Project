import axios from "axios";

async function fetchBook(id:string) {
    try{
        const productData = await axios.get(`${import.meta.env.VITE_SERVER}book/${id}`);
        return productData
    } catch(err){}
}
export default fetchBook