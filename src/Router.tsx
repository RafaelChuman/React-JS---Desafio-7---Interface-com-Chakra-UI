import {Routes, Route} from 'react-router-dom'
import { Europa } from './pages/europa'
import { Home } from './pages/home'

export function Router()
{
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/europa' element={<Europa/>} />
        </Routes>
    )
}