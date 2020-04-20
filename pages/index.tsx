import Link from 'next/link'
import { Button } from 'antd'

const Index = () => {
  const type = 'home'
  return (
    <div>
      <Link href={`/home?type=${type}`}>
        <Button>home</Button>
      </Link>
      <Link href='/list'>
        <Button>list</Button>
      </Link>
    </div>
  )
}


export default Index
