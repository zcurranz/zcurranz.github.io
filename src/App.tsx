
import Button from '@mui/material/Button'
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  useEffect(() => {console.log(count)},[count])

  return (
    <>
      <Button variant='outlined' onClick={() => {setCount(count + 1)}}>increment</Button>
      <Button variant='outlined' onClick={() => {setCount(count - 1)}}>deccrement</Button>
      <Button variant='outlined' onClick={() => {setCount(0)}}>reset</Button>

    </>
  )
}

export default App
