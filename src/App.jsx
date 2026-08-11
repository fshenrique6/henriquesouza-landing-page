import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const randomPhrases = [
  "Se rodou de primeira, desconfia.",
]

function App() {
  const [count, setCount] = useState(0)
  const [phrase] = useState(
    () => randomPhrases[Math.floor(Math.random() * randomPhrases.length)]
  )

  return (
    <>
      <section id="center">
        <div className="hero">
          <img
            src="https://images2.alphacoders.com/941/thumb-1920-941898.jpg"
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>{phrase}</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* ... resto do código continua igual ... */}
    </>
  )
}

export default App