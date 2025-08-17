import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Counter from './pages/Counter.jsx'
import Weather from './pages/Weather.jsx'
import CharacterCounter from './pages/CharacterCounter.jsx'
import './App.css'

function App() {

  return (
    <>
      <div className='flex gap-10 justify-center paddingHorizontal  bg-white text-black '>
        <Link to='/'><h1>Currency Converter</h1></Link>
        <Link to='/About'><h1>BMI Calculator</h1></Link>
        <Link to='/Counter'><h1>Counter</h1></Link>
        <Link to='/Weather'><h1>Weather App</h1></Link>
        <Link to='/charactercounter'><h1>Character Counter</h1></Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="counter" element={<Counter />} />
        <Route path="weather" element={<Weather />} />
        <Route path='charactercounter' element={<CharacterCounter />} />
      </Routes>
    </>
  )
}

export default App
