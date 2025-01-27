/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import {Login} from './Routes/Routes'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <h1>hi</h1> */}
      <Route path='/' element={<h1>welcome </h1>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App