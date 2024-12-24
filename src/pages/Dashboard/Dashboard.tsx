import { FC } from "react"
import Nav from "./Components/Nav"
import Body from "./Components/Body"
import PageProvider from "./context"
import Footer from "./Components/Footer"

const Dashboard: FC = () => {
    return (
        <>
            <PageProvider>
                <Nav />
                <Body />
                <Footer />
            </PageProvider>
        </>
    )
}

export default Dashboard