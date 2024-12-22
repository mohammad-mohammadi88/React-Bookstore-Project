import { FC } from 'react'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Footer from './Components/Footer/Footer'

const Home :FC = () => {
    return (
        <>
            <Nav />
            <Body />
            <Footer />
        </>
    )
}

export default Home