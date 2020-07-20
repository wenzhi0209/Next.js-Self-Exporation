import Link from 'next/link'



const linkStyle = {

  display: 'block',
  float: 'right',
  margin: '0 auto',
  fontSize: '20px',
  padding: '20px'



}

const titleSty = {
  float: 'left'

}

const headerSty =
{
  height: '60px'
}




export default function Header() {
 


  return (
    <div style={headerSty}>

      <h1 style={titleSty}>Weather App</h1>

     

      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>


    </div>

  )
}






