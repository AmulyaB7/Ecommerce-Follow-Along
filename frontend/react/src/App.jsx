/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {CreateProduct, Login, MyProducts, Signup} from './Routes/Routes'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/createProduct' element={<CreateProduct/>}/>
      <Route path='/MyProducts' element={<MyProducts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App