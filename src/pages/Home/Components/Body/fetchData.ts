import axios from "axios"

async function fetchData(pageNumber:number) {
    try{
        const productData = await axios.get(`${import.meta.env.VITE_SERVER}book?page=${pageNumber}&limit=10`);
        return productData
    } catch(err:any){
        console.log(err)
        return err
    }
}
export default fetchData