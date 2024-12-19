import { FC, useLayoutEffect, useState } from "react"
import fetchBook from "../../fetchBook"
import { useParams } from "react-router"
const Body :FC = () => {
    const [data, setData] = useState<any>([])
    const params :any = useParams()
    
    useLayoutEffect(()=>{
        fetchBook(params.slug).then((res)=>setData(res.data.data))
    },[])
    console.log("🚀 ~ data:", data)
    return (
        <div>Body</div>
    )
}

export default Body