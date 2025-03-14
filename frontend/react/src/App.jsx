/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {Login,Signup,Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress, SelectAddress} from "./Routes/Routes"
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
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/ProductDetails' element={<ProductDetails/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/CreateAddress' element={<CreateAddress/>}/>
      <Route path='/SelectAddress' element={<SelectAddress/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App