import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

function App() {
  const [state, setState] = useState({
    bootcamp: 'Rookies'
  });

  return (
    <div className='App'>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App
