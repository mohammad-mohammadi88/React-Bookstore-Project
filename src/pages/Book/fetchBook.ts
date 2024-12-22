import axios from "axios";

async function fetchBook(id:string) {
    return await axios.get(`${import.meta.env.VITE_SERVER}book/${id}`);
}
export default fetchBook