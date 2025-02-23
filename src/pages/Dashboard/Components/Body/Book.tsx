import { FC, useState } from "react";
import { product } from "../../../../interfaces/product";
import DelModal from "./DelModal";
import EditModal from "./EditModal";
interface Props {
    Info: product,
    setForceUpdate:any
}


const Book: FC<Props> = ({ Info,setForceUpdate }) => {
    const { title, id, quantity, price } = Info;
    const [delModalShow, setDelModalShow] = useState<boolean>(false)
    const [editModalShow, setEditModalShow] = useState<boolean>(false)
    function DelBook(){
        setDelModalShow(true)
        setForceUpdate(Math.random())
    }
    function EditBook(){
        setEditModalShow(true)
        setForceUpdate(Math.random())
    }
    return (
        <>
            <div className='px-12 flex justify-between py-4 '>
                <h3 className="w-40 truncate">{title}</h3>
                <h3 className="hidden w-10 text-center sm:block">{quantity}</h3>
                <h3 className="md:-translate-x-5 text-left">{price} هزار تومان</h3>
                <h3 className="truncate w-32 hidden md:block">{id}</h3>
                <h3 className="">
                    <button className="fa fa-edit text-xl ml-2 text-green-500" onClick={EditBook}></button>
                    <button className="fa fa-trash-can text-xl mr-2 text-red-500" onClick={DelBook}></button>
                </h3>
            </div>
            {delModalShow && <DelModal id={id} setDelModalShow={setDelModalShow} />}
            {editModalShow && <EditModal setEditModalShow={setEditModalShow} Info={Info} />}
            
        </>
    );
};

export default Book;
