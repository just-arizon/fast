import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
import NavBar from './component/Navbar'
import Features from './component/Features'

import Authentication from './authentication/Authentication'
function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/about' element= {<About />}/>
      <Route path='/sign-in' element= {<Authentication />}/>

    </Routes>
    <Features />
    <Authentication />
    </>

  )
}

export default App


