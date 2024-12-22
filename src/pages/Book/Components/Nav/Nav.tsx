import { FC, useState } from "react"
import { Link } from "react-router"
import { useUserDispatch, useUserInfo } from "../../../../Context/UserContext"
import "./style.scss"
import { actionTypes } from "../../../../Context/reducer"

const Nav: FC = () => {
    const {IsLogin,username} = useUserInfo();
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
        <nav className="container flex mx-auto mt-12 px-4 justify-end">
            <div> 
                { !IsLogin ?
                <Link to={'/login'}>
                    <button className="px-4 pb-3 mx-3 pt-1 rounded-lg border-black border font-semibold hover:text-white hover:bg-rose-500 duration-200 " type="button">ورود</button>
                </Link>
                : <div className="relative">
                    <button onClick={()=>handleClick()} className="rounded-full mx-4 h-10 w-10  border-black border font-semibold hover:text-white hover:bg-rose-500 duration-200" type="button"><i className="fa fa-user -translate-y-[1px]"></i></button>
                    <div className={`w-52 ${showModal ? 'show' : 'hide'} h-36 p-3 border border-black bg-rose-500 rounded-xl absolute left-0 top-14`}>
                        <ul className="before:bg-rose-500 modal relative">
                            <li><h2 className="text-xl text-white text-center mb-2">سلام {username}</h2></li>
                            <hr />
                            <li className="list-disc mt-2 mx-2"><Link to={'/dashboard'}><span className="text-xl  text-white">داشبورد</span></Link></li>
                            <li className="list-disc mt-2 mx-2 text-xl text-white"><button onClick={()=>logOut()}><Link to={'/'}>خروج <i className="fa fa-sign-out" aria-hidden="true"> </i></Link>
                            </button></li>
                        </ul>
                    </div>
                </div>
                }
            </div>
            <div>
                <Link to={'/shopping-card'}>
                    <button className="px-4 py-2 rounded-lg border-black font-medium border  hover:text-white hover:bg-rose-500 duration-200 " type="button"><i className="fa fa-shopping-cart"></i></button>
                </Link>
            </div>
            
        </nav>
    )
}

export default Nav