import Time from '../components/time';
import Link from 'next/link';

const Index =() => (

    <div>
        <h1>Time display and change demo</h1>
    <Time/>
        <Link href="/current"><a>Go to Current Weather</a></Link>
        <br/>
        <Link href="/game"><a>Go to React Game</a></Link>
        <br/>
        <Link href="/sign"><a>Go to Sign test</a></Link>
    </div>

);



export default Index;