import Link from 'next/link'
import { Button, Select } from 'antd'
// const styles = require('../styles/index.css')

// import * as css from '../styles/index.css'

const Option = Select.Option
const Index = () => {
  const type = 'home'
  return (
    <div>
      <Link href={`/home?type=${type}`} as={`home/${type}`}>
        <Button>home</Button>
      </Link>
      <Link href='/list'>
        <Button>list</Button>
      </Link>
      <Select>
        <Option value={1}>111</Option>
        <Option value={2}>222</Option>
        <Option value={3}>333</Option>
        <Option value={4}>444</Option>
      </Select>
    </div>
  )
}


export default Index
