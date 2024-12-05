import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className='flex justify-center mx-4 my-2 absolute bottom-20 w-full'>
            <button className='mx-3 p-2 bg-red-500 rounded-xl' onClick={() => { setColor("red") }}>Red</button>
            <button className='mx-3 p-2 bg-blue-500 rounded-xl' onClick={() => { setColor("blue") }}>Blue</button>
            <button className='mx-3 p-2 bg-green-500 rounded-xl' onClick={() => { setColor("green") }}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
