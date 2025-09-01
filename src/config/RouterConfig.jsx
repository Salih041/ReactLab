import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ToDoList from '../pages/ToDoList'
import Notes from '../pages/Notes' 
import Calculator from '../pages/Calculator'
import CurrencyConverter from '../pages/CurrencyConverter'
import Weather from '../pages/Weather'

function RouterConfig() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/todolist' element={<ToDoList/>}></Route>
        <Route exact path='/notes' element={<Notes/>}></Route>
        <Route exact path='/currency' element={<CurrencyConverter/>}></Route>
        <Route exact path='/weather' element={<Weather/>}></Route>
    </Routes>
  )
}

export default RouterConfig
