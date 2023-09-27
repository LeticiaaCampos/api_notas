import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    
  })

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
