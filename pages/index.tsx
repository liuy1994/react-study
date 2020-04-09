import Link from 'next/link'
import { Button } from 'antd'

const Index = () => {
  return (
    <div>
      <Link href='/home?type=home'>
        <Button>home</Button>
      </Link>
      <Link href='/list'>
        <Button>list</Button>
      </Link>
    </div>
  )
}


export default Index