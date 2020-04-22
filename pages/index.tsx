import Link from 'next/link'
import { Button } from 'antd'
import { useState, useEffect } from 'react'
import useRandomStatus from '../hooks/useRandomStatus'

const Index = () => {
  const type = 'home'
  const [count, setCount] = useState(0)
  const isLarge = useRandomStatus()

  useEffect(() => {
    document.title = `You clicked ${count} times!`
  })

  return (
   <>
    <div>
      <Link href={`/home?type=${type}`}>
        <Button>home</Button>
      </Link>
      <Link href='/list'>
        <Button>list</Button>
      </Link>
    </div>
    <Button type="primary" size="large" onClick={() => setCount(count+ 1)}>
      {count} --- {isLarge ?? 'Loading' + ''}
      </Button>
   </>
  )
}


export default Index
