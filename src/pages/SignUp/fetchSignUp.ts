import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_VERCEL_SERVER

async function fetchSighUp(Info:any) {
    return await axios.post(`auth/register`,{
        username:Info.username,
        password:Info.password
    });   
}

export default fetchSighUp