import './App.css'
import eruda from 'eruda'
import HomePage from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Betting from './pages/betting'

function App() {
    eruda.init()

    return (
        <Routes> 
            <Route path='/' element={<HomePage />} ></Route>
            <Route path='/betting' element={<Betting />} ></Route>
        </Routes>
    )
}

export default App
