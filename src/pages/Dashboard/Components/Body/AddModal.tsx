import { FC, useState } from "react"
import "./index.scss"
import { fetchAddBook } from "./fetchData"
interface Props {
    setAddModalShow : (a:boolean) => void
}
const AddModal: FC<Props> = ({setAddModalShow}) => {
    const [bookName, setBookName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(0)
    return (
        <div className="fixed openModal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-screen h-screen bg-gray-500 opacity-50"></div>
            <div className="w-[450px] h-[450px] absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-[36px] ">
                <h2 className="text-xl text-center font-semibold">ایجاد محصول جدید</h2>
                <div className="mt-6 font-semibold">
                    <label htmlFor="BookNameInput">
                        <div>نام کتاب</div>
                        <input type="text" value={bookName} onChange={(e:any)=>setBookName(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="نام کتاب" id="BookNameInput" />
                    </label>
                    <label htmlFor="QuantityInput">
                        <div className="mt-4">تعداد موجودی</div>
                        <input type="number" value={quantity} onChange={(e:any)=>setQuantity(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="تعداد" id="QuantityInput" />
                    </label>
                    <label htmlFor="PriceInput">
                        <div className="mt-4">(تومان) قیمت</div>
                        <input type="number" value={price} onChange={(e:any)=>setPrice(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="قیمت (تومان)" id="PriceInput" />
                    </label>
                    <div className="flex gap-4 mt-12">
                        <button className="rounded-xl py-3 text-sm flex-1 bg-rose-500 text-white font-bold" onClick={()=>{
                            if(bookName !== '' && price > 0 && quantity > 0){
                                fetchAddBook(bookName,price>1000?Math.floor(price/1000):price,quantity);
                                setAddModalShow(false)
                            }
                        }}>ایجاد</button>
                        <button className="rounded-xl py-3 text-sm flex-1 bg-neutral-200 text-gray-700 font-bold" onClick={()=>setAddModalShow(false)}>انصراف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal