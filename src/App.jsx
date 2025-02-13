import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      count is {count}
      <div className="card">
        <button onClick={() => setCount((count) => count+20)}>
          +20
        </button>
        <button onClick={() => setCount((count) => count+10)}>
          +10
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => (count<=0?0:count - 1))}>
          -
        </button>
        <button onClick={() => setCount((count) => (count<=10?0:count - 10))}>
          -10
        </button>
        <button onClick={() => setCount((count) => (count<=20?0:count - 20))}>
          -20
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
