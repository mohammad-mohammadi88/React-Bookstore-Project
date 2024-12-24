import { FC, useLayoutEffect, useState } from "react"
import "./index.scss"
import { usePageDispatch, usePageNumber } from "../../context"
import { fetchAllBooksNumber } from "../Body/fetchData"
const Footer : FC = () => {
    const [appPageNumbers, setAppPageNumbers] = useState<number>()
    useLayoutEffect(()=>{
        fetchAllBooksNumber().then((res:number)=>{
            if(res % 12 !== 0){
                setAppPageNumbers(res/12+1)
            } else {
                setAppPageNumbers(res/12)
            }

        })
        console.log(appPageNumbers)
    })
    const dispatch = usePageDispatch()
    const pageNumber = usePageNumber()
    const arr:number[] = []
    if(appPageNumbers){
        for (let i = 1; i <= appPageNumbers; i++) {
            arr.push(i)
        }
    }
    return (
        <div className='flex w-full  h-24 my-8 justify-center'>
            {appPageNumbers && arr.length>0?
                arr.map((num)=>{
                    return (<button onClick={()=>dispatch(num)} key={num} className={`rounded-full border-gray-500 text-gray-500 border-2 font-semibold h-12 w-12 relative mx-2 ${pageNumber === num ? 'active' : ''}`}><span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">{num}</span></button>)
                }):<div>چیزی برای نمایش دادن وجود ندارد</div>
            }
        </div>
    )
}

export default Footer