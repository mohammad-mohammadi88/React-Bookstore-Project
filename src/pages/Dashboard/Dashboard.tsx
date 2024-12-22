import { FC } from "react"
import { useUserInfo } from "../../Context/UserContext"

const Dashboard: FC = () => {
    const userInfo = useUserInfo()
    console.log("🚀 ~ userInfo:", userInfo)
   
    return (
        <>
            <div>Dashboard</div>
        </>
    )
}

export default Dashboard