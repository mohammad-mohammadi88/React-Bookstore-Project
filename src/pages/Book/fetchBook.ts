import axios from "axios";

async function fetchBook(id:string) {
    const productData = await axios.get(`${import.meta.env.VITE_SERVER}book/${id}`);
    return productData
}
export default fetchBook