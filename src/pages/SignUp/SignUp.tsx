import { FC, useEffect, useState } from "react"
import viteImage from "../../../public/vite.svg"
import { Link, useNavigate } from "react-router"
import fetchSighUp from "./fetchSignUp"
import { useUserDispatch } from "../../Context/UserContext"
import { actionTypes } from "../../Context/reducer"
const SignUpUser :FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [userExist, setUserExist] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useUserDispatch()
    const [message, setMossage] = useState<string|null>(null)
    function handleSubmit(){
        if(password === repeatPassword){
            setShow(false);
            fetchSighUp({
                "username" : username.trim(),
                "password" : password.trim()
            }).then((res:any)=>setMossage(res.data.message),(err:any)=>setMossage(err.response.data.message))
        } else {
            setShow(true)
        }
    }
    
    useEffect(()=>{
        if(message){
            if(message === "User already exists"){
                setUserExist(true)
            } else if(message === "User registered successfully"){
                dispatch({
                    type:actionTypes.USER_CREATED,
                    payload:username
                })
                setUserExist(false)
                navigate('/dashboard')
            } else {
                alert('ببخشید در حین درخواست مشکلی پیش آمد!\n لطفا دوباره تلاش کنید!')
            }
        }
    },[message])
    return (
        <main className="flex min-h-screen w-screen justify-center items-center">
            <div className=" h-auto w-screen sm:w-[550px] py-6 px-4 bg-white rounded-3xl border mx-auto">
                <div className="w-full my-10"> <img src={viteImage} className="w-1/4 mx-auto" alt="my logo" /> </div>
                <h1 className="text-2xl text-center mb-10">ثبت نام</h1>
                <div className="px-4">
                    <input type="text" className="w-full bg-stone-100 p-3 text-black placeholder:text-zinc-500 font-semibold rounded-2xl mb-4" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="نام کاربری" />
                    <div className={`text-rose-500 mb-4 ${!userExist ? 'hidden' : ''}`}>این نام کاربری وجود دارد!</div>
                    <input type="password" className="w-full bg-stone-100 p-3 text-black placeholder:text-zinc-500 font-semibold rounded-2xl mb-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="رمز عبور" />
                    <input type="password" className="w-full bg-stone-100 p-3 text-black placeholder:text-zinc-500 font-semibold rounded-2xl mb-4" value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)} placeholder="رمز عبور" />
                    <div className={`text-rose-500 mb-4 ${show ? '' : 'hidden'}`}>رمز عبور را دقیق تکرار کنید!</div>
                    <button type="button" onClick={handleSubmit} className="bg-rose-500 w-full p-3 rounded-xl text-xl text-white"><div className="-translate-y-1">ورود</div></button>
                </div>
                <Link to={'/login'}><div className="text-rose-500 mt-2 mx-4 font-semibold">حساب کاربری دارید؟</div></Link>
            </div>
        </main>
    )

}

export default SignUpUser