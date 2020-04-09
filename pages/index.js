import { timeout } from '../services/request'
const Home = (props) => (
  <div>
    Hello {props.userName}
  </div>
)

Home.getInitialProps = async () => {
  return await timeout(200, { userName: 'Java' })
}

export default Home
