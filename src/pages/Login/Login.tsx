import { FC, useEffect, useState } from "react"
import viteImage from "../../../public/vite.svg"
import { Link, useNavigate } from "react-router"
import fetchLogin from "./fetchLogin"
import { useUserDispatch } from "../../Context/UserContext"
import { actionTypes } from "../../Context/reducer"

const LoginUser :FC= () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState<any>(undefined)
    const [error, setError] = useState<boolean>()
    const [userExist, setUserExist] = useState<any>(null)
    const dispatch = useUserDispatch();
    const navigate = useNavigate()
    function handleSubmit(){
        fetchLogin({username,password}).then((res:string)=>{
            if(typeof res === 'string'){
                setToken(res)
                setUserExist(true)
            } else {
                setUserExist(false)
            }
        },(err)=>{
            console.log(err)
            setError(true)
        })
    }
    useEffect(()=>{
        if(token && !error){
            dispatch({
                type:actionTypes.LOGIN_USER_SUCCESS,
                payload:{
                    token,
                    username
                }
            })
            navigate('/dashboard')
        }
        if(error){
            alert('ببخشید یه مشکلی پیش آمد!\nلطفا دوباره امتحان کنید!')
        }
        if(userExist === false){
            alert('حساب کاربری وارد شده معتبر نیست!\nلطفا ابتدا ثبت نام کنید!')
            navigate('/sign-up')
        }
    },[token,error,userExist])
    return (
        <main className="flex min-h-screen w-screen justify-center items-center">
            <div className=" h-auto w-screen sm:w-[550px] py-6 px-4 bg-white rounded-3xl border mx-auto">
                <div className="w-full my-10"> <img src={viteImage} className="w-1/4 mx-auto" alt="my logo" /> </div>
                <h1 className="text-2xl text-center mb-10">ورود</h1>
                <div className="px-4">
                    <input type="text" className="w-full bg-stone-100 p-3 text-black placeholder:text-zinc-500 font-semibold rounded-2xl mb-4" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="نام کاربری" />
                    <input type="password" className="w-full bg-stone-100 p-3 text-black placeholder:text-zinc-500 font-semibold rounded-2xl mb-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="رمز عبور" />
                    <button type="button" onClick={handleSubmit} className="bg-rose-500 w-full p-3 rounded-xl text-xl text-white"><div className="-translate-y-1">ورود</div></button>
                </div>
                <Link to={'/sign-up'}><div className="text-rose-500 mt-2 mx-4 font-semibold">ایجاد حساب کاربری!</div></Link>
            </div>
        </main>
    )
}

export default LoginUser