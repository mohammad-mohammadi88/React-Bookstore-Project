import { FC } from "react"
import deleteItem from "../../../../../public/deleteItem.jpg"
import { fetchDeleteBook } from "./fetchData";
import { useUserInfo } from "../../../../Context/UserContext";
interface Props {
    setDelModalShow : (a:boolean) => void,
    id:string
}
const DelModal: FC<Props> = ({setDelModalShow,id}) => {
    const { token } = useUserInfo()
    return (
        <div className="fixed openModal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-screen h-screen bg-neutral-500 opacity-50"></div>
            <div className="w-[450px] flex flex-col justify-center items-center h-80 absolute py-6 px-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-[36px] ">
                <div className="w-full flex justify-center mb-12"><img src={deleteItem} alt="delete Item" /></div>
                <div className="text-center text-xl">آیا از حذف این کتاب مطمئنید؟</div>
                <div className="flex gap-4 mt-8 w-full">
                    <button className="rounded-xl py-2  flex-1 bg-red-600 text-white font-semibold" onClick={()=>{
                        fetchDeleteBook(id,token)
                        setDelModalShow(false)
                    }}>حذف</button>
                    <button className="rounded-xl py-2 flex-1 bg-neutral-300 text-gray-700 font-bold" onClick={()=>setDelModalShow(false)}>لغو</button>
                </div>
            </div>
        </div>
    )
}

export default DelModal