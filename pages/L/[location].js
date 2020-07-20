import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import Layout from '../../components/MyLayout'



function post(props) {

    const x = (props.dat.main.temp - 273.15).toFixed(2)
    const conBox ={
        margin : '0 auto',
        width : '450px',
        height : '100%'

    }

    return (
            <Layout>
                <div style={conBox}>
                    <h1>Current weather information</h1>
                    <h2>{props.dat.name}</h2>
                    <h3>Weather:{props.des.map(w => w.description)}</h3>
                    <img src={"http://openweathermap.org/img/wn/" + props.des.map(w => w.icon) + "@2x.png"}></img>
                    <h3>Temperature : {x} C</h3>

                    <h3>Humidity : {props.dat.main.humidity}</h3>
                    <h4>Sunrise: {moment(props.dat.sys.sunrise).utcOffset(props.dat.timezone).format('h:mm a')}</h4>
                    <h4>Sunset: {moment(props.dat.sys.sunset).utcOffset(props.dat.timezone).add('12', 'h').format('h:mm a')}</h4>
                </div>
            </Layout>
    )

}



post.getInitialProps = async function (context) {
    const location=context.query
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5c35420ab45e04fa2684d9504a94ad1b`);
    const dat = await res.json();
    console.log(dat)


}

export default post;