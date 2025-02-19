import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="bg-green-600 text-black p-4 rounded-xl">Tailwind</h1>
      <Card userName="Ankit" btnText='Know More'/>
      <Card userName="Raj" btnText='View More'/>

      
    </>
  )
}

export default App
