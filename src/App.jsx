import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <div className="h-screen bg-amber-50">
        <div className="my-auto h-25 mx-auto p-2 bg-gray-50 border border-gray-200 w-75 rounded">
          <p className='font-medium mb-4 uppercase font-mono text-center'>Count : {count}</p>

          <button
            className="p-2 bg-blue-500 rounded-md font-medium text-white w-full"
            onClick={increment}
          >Click Me
          </button>
        </div>
      </div>
    </>
  )
}

export default App
