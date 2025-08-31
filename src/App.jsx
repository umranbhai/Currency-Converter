import { useEffect, useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Counter from './pages/Counter.jsx'
import Weather from './pages/Weather.jsx'
import CharacterCounter from './pages/CharacterCounter.jsx'
import InterestCalculator from './pages/InterestCalculator.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import './App.css'
import './components/auth/Auth.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [Menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState("hidden")
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const landelNav = () => {
    if (Menu !== true) {
      setMenu(true)
      setShowMenu("flex")
    } else {
      setMenu(false)
      setShowMenu("hidden")
    }
  }
  useEffect(() => {

  }, [])

  return (
    <>
      <div className='px-5 py-5 flex justify-between items-start bg-white text-black'>
        <div>NS <span className='text-bold text-2xl'><label className='relative display-inline-block w-10 h-5'><input type="checkbox" className='absolute top-0 left-0 right-0 bottom-0 bg-black transition-all duration-300 ease-in-out w-10 h-5' /><span className=''></span></label></span></div>
        <div className={`lg:flex ${showMenu} flex-col lg:flex-row gap-10 items-center`}>
          <Link to='/' className='hover:text-blue-600'><h1>Home</h1></Link>
          <Link to='/about' className='hover:text-blue-600'><h1>BMI Calculator</h1></Link>
          <Link to='/counter' className='hover:text-blue-600'><h1>Counter</h1></Link>
          <Link to='/weather' className='hover:text-blue-600'><h1>Weather App</h1></Link>
          <Link to='/charactercounter' className='hover:text-blue-600'><h1>Character Counter</h1></Link>
          <Link to='/interestcalculator' className='hover:text-blue-600'><h1>Interest Calculator</h1></Link>
          <div className='flex gap-4'>
            {isAuthenticated ? <Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700'>Sign out</Link>
              : <Link onClick={() => loginWithRedirect()} className='px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50'>Log in</Link>}
          </div>
        </div>
        <div className='lg:hidden block'>
          <button
            className='p-2 text-gray-600 hover:text-gray-900 focus:outline-none'
            onClick={landelNav}
            aria-label='Toggle menu'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              {Menu ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
              )}
            </svg>
          </button>
        </div>
      </div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/charactercounter" element={<CharacterCounter />} />
        <Route path="/interestcalculator" element={<InterestCalculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
