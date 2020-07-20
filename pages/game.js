function Game() {


    return (
        <>
            <ComGame></ComGame>

            <style jsx global>{`
                #areaA button {
                    display: inline-block;
                    width:50px;
                    height:100%;
            
                   
                }
                #areaA div{
                    height:50px;
                }
               

            `}</style>
        </>

    )
}

function Square(props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    )
}
class ComGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                stoSquare: Array(9).fill(null)
            }],
            stepNum:0,
            xNext: true
        }

    }

    jumpTo(step){
        this.setState({
            stepNum:step,
            xNext:(step % 2)==0
        })
    }

    CusClick(i) {
       
        const history = this.state.history.slice(0,this.state.stepNum+1)
        const current = history[history.length - 1]
        const hClick = current.stoSquare.slice()
        if (calculateWinner(hClick) || hClick[i]) {
            return;
        }
        hClick[i] = this.state.xNext ? 'x' : 'o';
        this.setState({
            history: history.concat([{ stoSquare: hClick }]),
            stepNum:history.length,
            xNext: !this.state.xNext
        })
        console.log(this.state.history)
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        const winner = calculateWinner(current.stoSquare);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move # ' + move : 'Go to game start'

            return(
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            )

        })

        let status;

        if (winner) {
            status = 'Winner is ' + winner;
        }
        else {
            status = 'Next player: ' + (this.state.xNext ? 'x' : 'o');
        }


        return (
            <>
                <div>{status}</div>
                <Board stoSquare={current.stoSquare} onClick={(i) => this.CusClick(i)}></Board>
                <br></br>
                <div>{moves}</div>
            </>
        )
    }

}

class Board extends React.Component {


    DispSquare(i) {
        return <Square
            value={this.props.stoSquare[i]}
            onClick={() => this.props.onClick(i)}
        />
    }

    render() {

        return (
            <div id='areaA'>
                <div>
                    {this.DispSquare(0)}
                    {this.DispSquare(1)}
                    {this.DispSquare(2)}
                </div>
                <div>
                    {this.DispSquare(3)}
                    {this.DispSquare(4)}
                    {this.DispSquare(5)}
                </div>
                <div>
                    {this.DispSquare(6)}
                    {this.DispSquare(7)}
                    {this.DispSquare(8)}
                </div>
            </div>
        );
    }
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}



export default Game