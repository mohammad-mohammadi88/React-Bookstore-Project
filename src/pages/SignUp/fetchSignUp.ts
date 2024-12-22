import axios from "axios";

async function fetchSighUp(Info:any) {
    try{

        const User = await axios.post(`${import.meta.env.VITE_SERVER}auth/register`,{
            username:Info.username,
            password:Info.password
        });
        return User.data.message
    } catch(err:any){
        return err.response.data.message
    }
    
}

export default fetchSighUp