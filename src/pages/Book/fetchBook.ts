import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_VERCEL_SERVER
async function fetchBook(id:string) {
    return await axios.get(`book/${id}`);
}
export default fetchBook