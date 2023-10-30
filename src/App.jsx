import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Navbar isMobile={false} darkBtn={true}/>
    </>
  )
}

export default App
