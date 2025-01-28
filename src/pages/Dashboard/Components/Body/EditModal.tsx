import { FC, useState } from "react"
import "./index.scss"
import { fetchPutBook } from "./fetchData"
import { product } from "../../../../interfaces/product"
interface Props {
    setEditModalShow : (a:boolean) => void,
    Info:product
}
const EditModal: FC<Props> = ({setEditModalShow,Info}) => {
    const { title, id, quantity, price } = Info;
    const [bookName, setBookName] = useState<string>(title)
    const [modalPrice, setModalPrice] = useState<number>(price*1000)
    const [modalQuantity, setModalQuantity] = useState<number>(quantity)
    return (
        <div className="fixed openModal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-screen h-screen bg-gray-500 opacity-50"></div>
            <div className="w-[450px] h-[450px] absolute p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-[36px] ">
                <h2 className="text-xl text-center font-semibold">ویرایش اطلاعات</h2>
                <div className="mt-6 font-semibold">
                    <label htmlFor="BookNameInput">
                        <div>نام کتاب</div>
                        <input type="text" value={bookName} onChange={(e:any)=>setBookName(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="نام کتاب" id="BookNameInput" />
                    </label>
                    <label htmlFor="QuantityInput">
                        <div className="mt-4">تعداد موجودی</div>
                        <input type="number" value={modalQuantity} onChange={(e:any)=>setModalQuantity(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="تعداد" id="QuantityInput" />
                    </label>
                    <label htmlFor="PriceInput">
                        <div className="mt-4">(تومان) قیمت</div>
                        <input type="number" value={modalPrice} onChange={(e:any)=>setModalPrice(e.target.value)} className="rounded-lg bg-neutral-100 w-full mt-2 p-2" placeholder="قیمت (تومان)" id="PriceInput" />
                    </label>
                    <div className="flex gap-4 mt-12">
                        <button className="rounded-xl py-3 text-sm flex-1 bg-rose-500 text-white font-bold" onClick={()=>{
                            if(bookName !== '' && modalPrice > 0 && modalQuantity > 0){
                                fetchPutBook(id,bookName,modalPrice>1000?modalPrice/1000:modalPrice,modalQuantity)
                                setEditModalShow(false)
                            }
                        }}>ایجاد</button>
                        <button className="rounded-xl py-3 text-sm flex-1 bg-neutral-200 text-gray-700 font-bold" onClick={()=>setEditModalShow(false)}>انصراف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal