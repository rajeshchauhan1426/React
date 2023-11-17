import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length , setlength] = useState(12)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password , setpassword] = useState(" ")


  //using useref
  const passwordRef = useRef(null)
  

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },
  [password])
  


  const passwordGenerator = useCallback(() => {
    let pass = ' '
    let str = "ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopurstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()+{}[]~`"
    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random()* str.length+1) 

      pass += str.charAt(char)

      setpassword(pass)
    }
   },[length, numberAllowed, charAllowed,setpassword])
   

   useEffect(() =>{
    passwordGenerator()
   }, [length,numberAllowed,charAllowed,passwordGenerator])




  return (
    <>
     <div className='width-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-blue-500'>
      <h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-4'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipBoard} 
        className='outline-none bg-yellow-300 text-white px-3 py-0.5'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='charInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev);
          }}/>
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
     </div>
    </>
  )
}


export default App
