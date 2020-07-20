import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import Layout from '../components/MyLayout'
import Link from 'next/link';
import { useState } from 'react'
import React from 'react'

function current(props) {
    const [nowl, setl] = useState('setapak')

    const changeL = () => {
        setl(document.getElementById("myText").value)
    }

    const conBox = {
        margin: '0 auto',
        width: '450px',
        height: '100%'

    }

    

    return (
        
        <Layout>
             
            <div style={conBox}>
                <h1>Weather in your city</h1>
                <input type="text" id="myText" onChange={changeL} placeholder='setapak'></input>
                <Link href="/L/[id]" as={`/L/${nowl}`}><button>Searh it</button></Link>
    
            </div>
        </Layout>
        
    )

}


export default current;