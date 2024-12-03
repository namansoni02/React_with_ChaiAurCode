import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  const addVal = () => {
    console.log("Value Added", Math.random());
    if(counter<20){
    setCounter(counter+1)
    }
  }

  const decreaseVal = () => {
    console.log("Value Decreased", Math.random());
    if(counter>0){
    setCounter(counter-1)
    }
  }
  const Alertt = () => {
    alert(`Counter is ${counter}`);
  }
  
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addVal}>Add Value</button>
      <br />
      <br />
      <button onClick={decreaseVal}>Remove Value</button>
      <br />
      <br />
      <button onClick={Alertt}>Show Alert</button>
    </>
  );
}

export default App;
