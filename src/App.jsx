import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
import NavBar from './component/Navbar'
import SignIn from './authentication/Signin'
import Authentication from './authentication/Authentication'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/about' element= {<About />}/>
      <Route path='/sign-in' element= {<Authentication />}/>

    </Routes>
    </>

  )
}

export default App


