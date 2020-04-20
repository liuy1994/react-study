import request from '../request'
import { withRouter } from 'next/router'

const Home = (props) => {
  const { type } = props.router.query
  return (
    <div>
      Hello {props.userName} - {type}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await request.login({
    password: '12345678',
    userName: '测试用户'
  })
  console.log(res)
}

export default withRouter(Home)
