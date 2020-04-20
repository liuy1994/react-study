
const List = props => {
  return (
    <ul>
      {
        (props.list || []).map(v => <li key={v}>{v}</li>)
      }
    </ul>
  )
}

List.getInitialProps = async () => {
  const list = '12345'.split('').map(v => v.repeat(30))
  return Promise.resolve(list)
}

export default List


