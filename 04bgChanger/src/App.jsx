import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    
      <div class="w-full h-screen duration-200"
      style={{backgroundColor : color}}
      >
        
        <div class="flex flex-wrap  w-auto h-14 mt-40 bg-red-200 rounded-2xl px-2">
            <button class="m-2 mx-3 border-black  bg-red-700 rounded-4xl" onClick={()=>setColor("Red")} >Red</button>
            <button class="m-2 mx-3 border-black  bg-green-500 rounded-4xl " onClick={()=>setColor("Green")}>Green</button>
            <button class="m-2 mx-3 border-black  bg-blue-500 rounded-4xl" onClick={()=>setColor("Blue")} > Blue</button>
            <button class="m-2 mx-3 border-black  bg-green-800 rounded-4xl"onClick={()=>setColor("Olive")}>Olive</button>
            <button class="m-2 mx-3 border-black  bg-gray-500 rounded-4xl"onClick={()=>setColor("Gray")}>Gray</button>
            <button class="m-2 mx-3 border-black  bg-yellow-500 rounded-4xl"onClick={()=>setColor("Yellow")}>Yellow</button>
            <button class="m-2 mx-3 border-black  bg-pink-500 rounded-4xl"onClick={()=>setColor("Pink")}>Pink</button>
            <button class="m-2 mx-3 border-black  bg-purple-500 rounded-4xl"onClick={()=>setColor("Purple")}>Purple</button>
            <button class="m-2 mx-3 border-black  bg-rose-400 rounded-4xl"onClick={()=>setColor("Lavender")}>Lavender</button>
            <button class="m-2 mx-3 text-black border-black  bg-white rounded-4xl"onClick={()=>setColor("White")}>White</button>
            <button class="m-2 mx-3 border-black  bg-black rounded-4xl"onClick={()=>setColor("Black")}>Black</button>

        </div>
         
      </div>
     
    
  )
}

export default App
