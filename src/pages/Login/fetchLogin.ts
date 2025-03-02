import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_VERCEL_SERVER

async function fetchLogin({username,password}:Record<string,string>) {
        return await axios.post(`auth/login`,{
            username,
            password
        })
        .then((res)=>res.data.token,(err)=>err)

}

export default fetchLogin