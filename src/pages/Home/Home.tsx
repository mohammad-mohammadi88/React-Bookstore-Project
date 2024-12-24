import { FC } from 'react'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Footer from './Components/Footer/Footer'
import PageProvider from './context'

const Home :FC = () => {
    return (
        <>
            <Nav />
            <PageProvider>
                <Body />
                <Footer />
            </PageProvider>
        </>
    )
}

export default Home