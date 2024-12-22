import { FC } from "react"
import { product } from "../../../../interfaces/product"
interface Props {
    bookData : product
}
const Body :FC<Props> = ({bookData}) => {
    const {title, image, author, summary, price} = bookData;
    return (
        <main className=" w-screen justify-center flex mt-8">
            <div className="block sm:inline-block bg-white container p-8 rounded-xl">
                <section className="w-full flex flex-wrap justify-center sm:justify-normal lg:h-full sm:float-start lg:w-[calc(50%+50px)] xl:w-1/2">
                    <div className="w-1/2  sm:w-[calc(50%+50px)]">
                        <img className="mb-8 sm:mb-0 h-52 sm:h-80" src={image} alt={`کتاب ${title}`} />
                    </div>
                    
                    <div className="w-full sm:w-[calc(50%-50px)] h-full">
                        <h1 className="text-[30px] mb-4">{title}</h1>
                        <p className="text-xl mb-3">{summary}</p>
                        <p className="text-xl mb-6">{author}</p>
                        <h2 className="text-3xl font-semibold">{price} هزار تومان</h2>
                        <button type="button" className="text-white bg-rose-500 text-2xl w-full mt-8 flex justify-center rounded-lg py-3"><i className="fa fa-shopping-cart"></i>&ensp;<div className="-translate-y-1">خرید</div></button>
                    </div>
                </section>
                <div className="w-full mt-12 flex flex-wrap justify-center px-4 lg:px-0 xl:px-4 h-full float-start lg:w-[calc(50%-50px)] xl:w-1/2">
                    <aside className="h-full text-xl w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 flex">
                        <div className="h-full space-y-4 w-1/2">
                            <p>کد کتاب:</p>
                            <p>شابک:</p>
                            <p>قطع:</p>
                            <p>تعداد صفحات:</p>
                            <p>سال انتشار:</p>
                            <p>سری چاپ:</p>
                        </div>
                        <div className="h-full space-y-4 w-1/2">
                            <p>145638</p>
                            <p>895-8548475223</p>
                            <p>رقعی</p>
                            <p>281</p>
                            <p>1389</p>
                            <p>17</p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Body