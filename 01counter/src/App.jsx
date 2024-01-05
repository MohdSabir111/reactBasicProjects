import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const increment = ()=>{
    setCount(count+1);
   }
  const decrement = ()=>{
    if(count > 0){
      setCount(count-1)
    }else{
      setCount(0)
    }
    // using ternary operator 
    //setCount(count > 0 ? count - 1 : 0);

  }
  return (
    <>
      <h1> Counter {count} </h1>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>

    </>
  )
}

export default App
