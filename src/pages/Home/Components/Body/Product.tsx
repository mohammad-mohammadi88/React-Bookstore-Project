import { FC } from "react"
import { product } from "../../../../interfaces/product"
import { Link } from "react-router"
interface Props{
    product : product
}
const Product: FC<Props> = ({product}) => {
    const {image,title,price,id} = product
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 ">
            <div className="border bg-white hover:bg-gray-200 duration-300 rounded-2xl p-4">
                <Link to={`book/${id}`}>
                    <img src={image} className="mix-blend-multiply aspect-square w-2/3 mx-auto" alt={`${title} image`} />
                    <h2 className="text-center text-2xl">{title}</h2>
                    <div className="flex justify-between mt-4">
                        <div>{price} هزار تومان</div>
                        <i className="fa fa-shopping-cart text-xl text-rose-600"></i>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Product