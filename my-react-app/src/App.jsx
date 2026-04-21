import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [state, setState] = useState({
    bootcamp: 'Rookies'
  });

  return (
    <div className='App'>
      <Navbar />
      <Home bootcampName={state.bootcamp} />
    </div>
  )
}

export default App
