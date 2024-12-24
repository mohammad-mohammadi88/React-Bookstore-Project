import axios from "axios"


export default async function fetchAllBooksNumber() {
    try{
        const productData = await axios.get(`${import.meta.env.VITE_SERVER}book`);
        return productData.data.totalBooks
    } catch(err:any){
        console.log(err)
        return err
    }
}
