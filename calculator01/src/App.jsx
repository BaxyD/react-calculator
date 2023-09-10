import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const[result, setResult] = useState('');

  function handleButtonClick(label) {
    if (label === 'c') {
      // Clear the input and result
      setInput('');
      setResult('');
    } else if (label === '=') {
      try {
        // Evaluate the math expression and set the result
        setResult(eval(input));
      } catch (error) {
        // handle invalid expressions
        setResult('Error');
      }
    } else {
      // update the input with the clicked button label
      setInput((prevInput) => prevInput + label);
    }
  }

  const buttons = [
    'c', '%' , '/', '', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '', '='
  ];

  return (
    <>
    <div className='calculator'>
      <div className='calculator-display'>
        <div className='input'>{input}</div>
        <div className='result'>{result}</div>
      </div>
      {buttons.map((label, index) => (
        <button className={`btn-${label} btn`} key={index} onClick={() => handleButtonClick(label)}>
          {label}
        </button>
      ))}
    </div>
    </>
  );
}


export default App
