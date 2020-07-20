import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '4px solid #DDD',
  height: '600px'
}

export default function Layout(props) {
  return (
    <>
    <Header />
    <div style={layoutStyle}>
      {props.children}
    </div>
    </>
  )
}
