import Link from 'next/link'
import { Button } from 'antd'

const styles = require('../styles/index.css')

const Index = () => {
  const type = 'home'
  return (
    <div className={styles.box}>
      <Link href={`/home?type=${type}`} as={`home/${type}`}>
        <Button>home</Button>
      </Link>
      <Link href='/list'>
        <Button>list</Button>
      </Link>
    </div>
  )
}


export default Index
