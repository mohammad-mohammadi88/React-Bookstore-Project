import axios from "axios";

async function fetchLogin({username,password}:Record<string,string>) {
        return await axios.post(`${import.meta.env.VITE_SERVER}auth/login`,{
            username,
            password
        })
        .then((res)=>res.data.token,(err)=>err)

}

export default fetchLogin