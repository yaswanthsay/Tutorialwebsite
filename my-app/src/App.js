import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Footer from './components/Footer'
import Home from './components/Home'
import Signup from './components/Signup'
import Blog from './components/Blog'


function App() {

  return (
    <div>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App