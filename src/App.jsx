import { useState } from 'react'
import './App.css'
import BG from './components/BG'
import FG from './components/FG'

function App() {
  return (
    <>
      <div className='w-full h-screen relative'>
        <BG />
        <FG />
      </div>
    </>
  )
}

export default App
