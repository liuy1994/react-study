import { useState, useEffect } from 'react'

const useRandomStatus = () => {
  const [isLarge, setLarge] = useState(null)
  let timer = null
  
  const handleLarge = () => {
    setLarge(Math.random() > 0.5)
    
  }

  useEffect(() => {
    timer = setInterval(() => {
      handleLarge()
    }, 10000)
    return () => {
      clearInterval(timer)
    }
  })


  return isLarge
}

export default useRandomStatus