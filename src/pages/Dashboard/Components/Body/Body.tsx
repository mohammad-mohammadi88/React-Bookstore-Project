import { FC, useEffect, useState } from 'react'
import { fetchBooks } from './fetchData'
import { usePageNumber } from '../../context'
import { product } from '../../../../interfaces/product'
import Book from './Book'
import AddModal from './AddModal'

const Body :FC = () => {
    const [data, setData] = useState<product[]>([])
    const pageNum:any = usePageNumber()
    const [error, setError] = useState<boolean>(false)
    const [addModalShow, setAddModalShow] = useState(false)
    const [forceUpdate,setForceUpdate] = useState(0)

    useEffect(()=>{
        fetchBooks(pageNum).then((res:any)=>{
            if(res.data){
                setData(res.data.data)
                setError(false)
            } else {
                setData(res.message)
                setError(true)
            }
        })
    },[pageNum,addModalShow,setAddModalShow,setForceUpdate])
    function AddBook(){
        setAddModalShow(true)
        setForceUpdate(Math.random())
    }
    
    return (
        <>  {addModalShow && <AddModal setAddModalShow={setAddModalShow}/>}
            <div className='container mx-auto h-full w-full'>
                <div className='flex justify-between mt-40'>
                    <h2 className='text-3xl'>مدیریت کتاب ها</h2>
                    <button type="button" className="bg-rose-600 text-xl px-5 pt-3 pb-4 font-semibold text-white rounded-lg" onClick={AddBook}>افزودن کتاب</button>
                </div>
                <div className='rounded-3xl overflow-hidden bg-white mt-8'>
                    <div className='bg-stone-200 text-center rounded-t-3xl py-4 flex justify-between text-xl px-12'>
                        <h2 className='w-40 text-right'>نام کتاب</h2>
                        <h2 className='hidden sm:translate-x-4 md:translate-x-6 text-right sm:block'>موجودی</h2>
                        <h2 className='-translate-x-5 sm:translate-x-2 md:translate-0'>قیمت </h2>
                        <h2 className='hidden md:block'>شناسه کالا</h2>
                        <h2>&ensp;&emsp;&emsp;&emsp;</h2>
                    </div>
                    <div className='divide-y'>
                    {
                        !error && data &&
                        data.map((book:product)=><Book setForceUpdate={setForceUpdate} key={book.id} Info={book} />)
                    }
                    {
                        !data && <h2 className='text-3xl text-rose-500 text-center p-10'>ببخشید کالایی با این مشخصات وجود ندارد!</h2>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body