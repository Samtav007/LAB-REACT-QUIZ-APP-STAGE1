import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './Components/HomeComponent'
import QuizComponent from './Components/QuizComponent'
import ResultComponent from './Components/ResultComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeComponent />
      <QuizComponent />
      <ResultComponent />
    </>
  )
}

export default App
