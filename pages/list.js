import { timeout } from '../services/request';

const List = props => {
  return <ul>
    {
      props.list.map(v => <li key={v}>{v}</li>)
    }
  </ul>
}

List.getInitialProps = async () => {
  let list = '12345'.split('').map(v => v.repeat(30))
  
  return await timeout(200, { list })
}

export default List


