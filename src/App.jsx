import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Test from './components/Test';
import Input from './components/Input';
import Navbar from "./components/Navbar";
import { Button } from './components/Button';


function App() {

  const [person, setPerson] = useState({name:"Zokir", age:22});


  return (
    <>
    <Navbar />
    <h2>Name:{person.name}</h2>
      <button>btn{person.address ? person.address : null}</button>
    </>
  )
}

export default App
