import moment from 'moment'
import { useState } from 'react'


function Time() {

    const [nowTime, setTime] = useState(Date.now())

    const changeT = () => {
        setTime(moment(nowTime).format("dddd, MMMM Do YYYY, h:mm:ss a"))
    }
    return (
        <>
            <div> TIME is :: {nowTime}</div>
            <div><button onClick={changeT}>change</button></div>
            <br/>
        </>

    )


}
export default Time