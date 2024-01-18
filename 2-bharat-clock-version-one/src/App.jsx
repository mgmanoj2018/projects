import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './component/ClockHeading'
import ClockSlogan from './component/ClockSlogan'
import ClockTime from './component/ClockTime'
// import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockHeading/>
      <ClockSlogan/>
      <ClockTime/>
    </>
  )
}

export default App
