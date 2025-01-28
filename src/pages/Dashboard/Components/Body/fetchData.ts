import axios from "axios"

export async function fetchBooks(pageNumber:number) {
    try{
        const productData = await axios.get(`${import.meta.env.VITE_SERVER}book?page=${pageNumber}&limit=12`);
        return productData
    } catch(err:any){
        console.log(err)
        return err
    }
}

export async function fetchAllBooksNumber() {
    try{
        const productData = await axios.get(`${import.meta.env.VITE_SERVER}book`);
        return productData.data.totalBooks
    } catch(err:any){
        console.log(err)
        return err
    }
}
export async function fetchAddBook(title:string,price:number,quantity:number) {
    return await axios.post(`${import.meta.env.VITE_SERVER}book`,{
        title,
        summary: "string",
        author: "string",
        image: "https://domobook.ir/wp-content/uploads/%D8%AC%D9%86%D8%A7%DB%8C%D8%AA-%D9%88-%D9%85%DA%A9%D8%A7%D9%81%D8%A7%D8%AA-1.jpg", 
        price,
        quantity
    }).catch((err)=>console.log(err))
}

export async function fetchDeleteBook(id:string) {
    return await axios.delete(`${import.meta.env.VITE_SERVER}book/${id}`).catch((err)=>alert(err.response.data.message))
}

export async function fetchPutBook(id:string,title:string,price:number,quantity:number) {
    return await axios.put(`${import.meta.env.VITE_SERVER}book/${id}`,{
        title,
        summery:"string",
        author:"author",
        image:"https://domobook.ir/wp-content/uploads/%D8%AC%D9%86%D8%A7%DB%8C%D8%AA-%D9%88-%D9%85%DA%A9%D8%A7%D9%81%D8%A7%D8%AA-1.jpg",
        price,
        quantity
    }).catch((err)=>alert(err.response.data.message))
}
