import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import moment from 'moment';

function Page(props)
 {
    return(
    <>
        <Link href="/"><h1>Weather</h1></Link>

            {props.w.map(w=>(<h6>{moment(w.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6> ))}
            {props.times.map(w=>(<h3>{w.precipProbability}</h3>))}
            {props.dat.minutely.summary}
            {props.dat.latitude}
          
    </>
    )
}



Page.getInitialProps = async function () {
    const res = await fetch('https://api.darksky.net/forecast/ae536321615dfb0cb98603d0c85826ea/37.8267,-122.4233');
    const dat = await res.json();
    const w= dat.minutely.data;

    return {dat,w,times: dat.minutely.data.map(entry =>entry)
    
    }
}


export default Page



