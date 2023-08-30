import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function Button({ label, onClick }) {
    return <button onClick={() => onClick(label)}>{label}</button>;
  }

function Display({ input, result }) {
  return (
    <div className='calculator-display'>
      <div className="input">{input}</div>
      <div className='result'>{result}</div>
    </div>
  );
}   

  return (
    <>
    <div className='calculator'>
      <div className='calculator-display'></div>
      <button className='btn-c btn' >c</button>
      <button className='btn-% btn' >%</button>
      <button className='btn-/ btn'>/</button>
      <button className='btn'></button>
      <button className='btn-7 btn'>7</button>
      <button className='btn-8 btn'>8</button>
      <button className='btn-9 btn'>9</button>
      <button className='btn-x btn'>x</button>
      <button className='btn-4 btn'>4</button>
      <button className='btn-5 btn'>5</button>
      <button className='btn-6 btn'>6</button>
      <button className='btn-- btn'>-</button>
      <button className='btn-1 btn'>1</button>
      <button className='btn-2 btn'>2</button>
      <button className='btn-3 btn'>3</button>
      <button className='btn-+ btn'>+</button>
      <button className='btn-0 btn'>0</button>
      <button className='btn-. btn'>.</button>
      <button className='btn'></button>
      <button className='btn-= btn'>=</button>
    </div>
    </>
  )
}


export default App
