import { FC } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Book from './pages/Book'

const App :FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/book/:slug' Component={Book}/>
            </Routes>
        </>
    )
}

export default App