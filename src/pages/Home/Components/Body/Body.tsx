import { FC, useLayoutEffect, useState } from "react"
import fetchData from "./fetchData"
import { product } from "../../../../interfaces/product"
import Product from "./Product"
import { usePageNumber } from "../../context"
const Body :FC = () => {
    const [data, setData] = useState<any>([])
    const pageNum = usePageNumber()
    const [error, setError] = useState<boolean>(false)
    useLayoutEffect(()=>{
        fetchData(pageNum).then((res)=>{
            if(res.data){
                setData(res.data.data)
                setError(false)
            } else {
                setData(res.message)
                setError(true)
            }
        })
    },[pageNum])
    

    let products = data.length !== 0 && !error ? 
    data.map((product:product)=><Product key={product.id} product={product} />) 
    : <h2 className="text-center text-3xl w-full my-12"> متاسفانه دیتای مورد نظر از سرور یافت نشد</h2>


    return (
        <main className="container flex-wrap flex mx-auto mt-4">
            {products ?? 'Loading...'}
        </main>
    )
}

export default Body