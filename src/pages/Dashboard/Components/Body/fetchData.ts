import axios, { AxiosRequestConfig } from "axios"
axios.defaults.baseURL = import.meta.env.VITE_SERVER;
function setData(data:object){
    return {
        ...data,
        summary: "string",
        author: "string",
        image: "https://domobook.ir/wp-content/uploads/%D8%AC%D9%86%D8%A7%DB%8C%D8%AA-%D9%88-%D9%85%DA%A9%D8%A7%D9%81%D8%A7%D8%AA-1.jpg", 
    }
} 
export async function fetchBooks(pageNumber:number) {
    try{
        const productData = await axios.get(`book?page=${pageNumber}&limit=12`);
        return productData
    } catch(err:any){
        console.log(err)
        return err
    }
}

export async function fetchAllBooksNumber() {
    try{
        const productData = await axios.get(`book`);
        return productData.data.totalBooks
    } catch(err:any){
        console.log(err)
        return err
    }
}
export async function fetchAddBook(title:string,price:number,quantity:number,token:string) {
    let config: AxiosRequestConfig = {
        url: 'book',
        method:'post',
        headers :{
            "Authorization" : 'bearer ' + token
        },
        data:setData({
            title,
            price,
            quantity
        })
    }
    return await axios.request(config).catch((err)=>console.log(err))
}

export async function fetchDeleteBook(id:string,token:string) {
    let config: AxiosRequestConfig = {
        url: 'book/' + id,
        method:'delete',
        headers :{
            "Authorization" : 'bearer ' + token
        }
    }
    return await axios.request(config).catch((err)=>alert(err.response.data.message))
}
export async function fetchPutBook(id:string,title:string,price:number,quantity:number,token:string) {
    let config: AxiosRequestConfig = {
        url: + 'book/' + id,
        method:'put',
        headers :{
            "Authorization" : 'bearer ' + token
        },
        data:setData({
            title,
            price,
            quantity
        })
    }
    return await axios.request(config).catch((err)=>alert(err.response.data.message))
}
