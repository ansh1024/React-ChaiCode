import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[colour,setcolour] = useState('olive')

  function changecolour(colour) {
    setcolour(colour)
  }

  return (
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colour }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolour('red')}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: 'red'}}>
            red
          </button>
            <button onClick={() => setcolour('skyblue')}
                className="outline-none px-4 py-1 rounded-full text-black sh adow-lg"
                    style={{backgroundColor: 'deepskyblue'}}>
              blue
            </button>
        </div>
        </div>
      </div>
  )
}

export default App
