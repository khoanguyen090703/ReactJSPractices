import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path='*' element={<h1>Not Found</h1>}>Not Found</Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>,
)
