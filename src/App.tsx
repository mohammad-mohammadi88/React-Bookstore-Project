import { FC } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Book from './pages/Book'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

const App :FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/book/:slug' Component={Book}/>
                <Route path='/login' Component={Login}/>
                <Route path='/sign-up' Component={SignUp}/>
                <Route path='/dashboard' Component={Dashboard}/>
            </Routes>
        </>
    )
}

export default App