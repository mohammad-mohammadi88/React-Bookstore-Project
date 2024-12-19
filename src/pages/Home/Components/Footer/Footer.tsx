import { FC } from "react"
import "./index.scss"
import { usePageDispatch, usePageNumber } from "../../context"
const Footer : FC = () => {
    const dispatch = usePageDispatch()
    const pageNumber = usePageNumber()
    return (
        <div className='flex w-full  h-24 my-8 justify-center'>
            <button onClick={()=>dispatch(1)} className={`rounded-full border-gray-500 text-gray-500 border-2 font-semibold h-12 w-12 relative mx-2 ${pageNumber === 1? 'active' : ''}`}><span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">1</span></button>
            <button onClick={()=>dispatch(2)} className={`rounded-full border-gray-500 text-gray-500 border-2 font-semibold h-12 w-12 relative mx-2 ${pageNumber === 2? 'active' : ''}`}><span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">2</span></button>
            <button onClick={()=>dispatch(3)} className={`rounded-full border-gray-500 text-gray-500 border-2 font-semibold h-12 w-12 relative mx-2 ${pageNumber === 3? 'active' : ''}`}><span className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">3</span></button>
        </div>
    )
}

export default Footer