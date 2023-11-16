import { green, red } from '@mui/material/colors'
import { useState } from 'react'


function App() {
  const [color, setColour] = useState("olive")
  return (
     <div className='w-full h-screen duration-200 '
     style={{backgroundColor: color}}
     >
      <div className='fixed flex flex-wrap 
      justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap  justify-center
        gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl'>
          <button 
          onClick={() => setColour("red")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{background: 'red'}}>red</button>
          <button 
          onClick={() => setColour("green")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{background: 'green'}}>green</button>
          <button 
          onClick={() => setColour("blue")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{background: 'blue'}}>blue</button>
          <button 
          onClick={() => setColour("yellow")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{background: 'yellow'}}>yellow</button>
        </div>
      </div>
     </div>
  )
}

export default App
