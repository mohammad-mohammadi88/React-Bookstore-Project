import { useUserDispatch, useUserInfo } from "../../../../Context/UserContext"
import defaultUser from "../../../../../public/default user.jpg"
import { Link } from "react-router"
import { actionTypes } from "../../../../Context/reducer";
import { useState } from "react";
import "./style.scss"
const Nav = () => {
    const username = useUserInfo().username;
    const dispatch = useUserDispatch()
    const [showModal, setShowModal] = useState<boolean>(false)
    function handleClick(){
        setShowModal((e)=>!e)
    }
    function logOut () {
        dispatch({
            type: actionTypes.LOGOUT_USER
        })
    }
    return (
        <nav className="container z-10 left-1/2 shadow-md -translate-x-1/2 fixed flex top-8 p-2 rounded-2xl border bg-white" dir="ltr">
            <aside className="flex w-[80px] relative sm:w-5/12 md:w-1/3 xl:w-1/6 px-3">
                <div dir="rtl" className="sm:flex hidden flex-col justify-center mx-1">
                    <h1 className="font-semibold w-28 md:w-24 lg:w-28 truncate">{username}</h1>
                    <span className="text-gray-950 font-semibold -translate-y-1 text-sm">مدیر</span>
                </div>
                <div className="border-gray-300 pr-3 border-r">
                    <button className=" hidden sm:block" onClick={handleClick}>
                        <img src={defaultUser} alt="User Image" className="rounded-full w-12 h-12 " />
                    </button>
                    <button className="sm:hidden" onClick={handleClick}>
                        <img src={defaultUser} alt="User Image" className="rounded-full w-12 h-12 translate-y-1 " />
                    </button>
                    <div className={`w-52 ${showModal ? 'show' : 'hide'} sm:left-[120px] md:left-[104px] lg:left-[120px] h-36 p-3 border border-black bg-rose-500 rounded-xl absolute left-0 top-[67px]`}>
                        <ul className="before:bg-rose-500 modal relative" dir="rtl">
                            <li><h2 className="text-xl text-white text-center mb-2">{username}</h2></li>
                            <hr />
                            <li className="list-disc mt-2 mx-2 text-xl text-white"><Link to={'/'}>خانه</Link></li>
                            <li className="list-disc mt-2 mx-2 text-xl text-white"><button onClick={()=>logOut()}><Link to={'/'}>خروج <i className="fa fa-sign-out" aria-hidden="true"></i></Link></button></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <section className="flex items-center w-[calc(100%-80px)] sm:w-7/12 md:w-2/3 xl:w-5/6">
                <label htmlFor="searchInput" className="w-full">
                    <input type="text" className="w-[calc(100%-40px)] active:outline-none focus:outline-none h-12 mr-2 px-3 text-xl " dir="rtl" placeholder="جست و جو کالا" id="searchInput" />
                    <i className="fa fa-magnifying-glass ml-1 text-xl text-gray-500"></i>
                </label>
            </section>
        </nav>
    )
}

export default Nav