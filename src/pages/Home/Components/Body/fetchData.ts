import axios from "axios"
axios.defaults.baseURL = import.meta.env.VITE_VERCEL_SERVER

async function fetchData(pageNumber:number) {
    try{
        const productData = await axios.get(`book?page=${pageNumber}&limit=10`);
        return productData
    } catch(err:any){
        console.log(err)
        return err
    }
}
export default fetchData