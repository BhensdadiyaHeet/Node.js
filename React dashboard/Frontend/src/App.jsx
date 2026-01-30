import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import AddAdmin from './Component/AddAdmin'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='/AddAdmin' Component={AddAdmin}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
