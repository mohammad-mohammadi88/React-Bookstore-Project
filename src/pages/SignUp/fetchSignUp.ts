import axios from "axios";

async function fetchSighUp(Info:any) {
        return await axios.post(`${import.meta.env.VITE_SERVER}auth/register`,{
            username:Info.username,
            password:Info.password
        });   
}

export default fetchSighUp