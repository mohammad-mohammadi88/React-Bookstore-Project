import { FC } from "react"

const IndexNav:FC = () => {
    return (
        <nav id="nav" className="mt-8 container flex justify-between mx-auto ">
            <div><h2 className="text-3xl font-medium"><i className="fas fa-book-open"></i>&ensp;همه کتاب ها </h2></div>
            <button type="button" className="bg-rose-600 text-xl px-5 pt-3 pb-4 font-semibold text-white rounded-lg">مرتب سازی</button>
        </nav>
    )
}

export default IndexNav