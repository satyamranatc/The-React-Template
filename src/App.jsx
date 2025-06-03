import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Home from './Pages/Home'

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            
        </BrowserRouter>
    </div>
  )
}
