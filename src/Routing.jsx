import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Landing from './Pages/Landing/Landing'
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing