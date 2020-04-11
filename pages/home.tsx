import { timeout } from '../request'
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
  return await timeout(200, { userName: 'Java' })
}

export default withRouter(Home)
