const players =   [
{
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
]

const Header = (props) => {
    console.log(props)
    return (
        <header>
        {/* JSX expressions wrapped in {} */}
            <h1>{ props.title }</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    console.log(props)
    return (
        <div className="player">
            <span className="player-Name">{props.name}</span>

            <Counter 
            /> 
        </div>
    );
}

const App = (props) => {
    {/* PARENT COMPONENT PASSES DOWN INFO TO CHILDREN COMPONENT */}
    return (
        <div className="scoreboard">
        <Header 
            title="Scoreboard" 
            totalPlayers={props.initialPlayers.length}
            isFun
        />

        {/*Player list*/}
        {/* ADD KEY PROPS WHEN ITERATING OVER AN ARRAY OF ITEMS
        THAT WILL BE REARANGED, ADDED, OR DELETED IN YOUR UI*/}
        {props.initialPlayers.map( player =>
        <Player 
            name={player.name}
            key={player.id.toString()}
        /> 
        )}
        </div>
    );
}

 {/* this.setState lets react know when state changes and to re-render
    and make changes to the component based on the changes in state 
    LINE 83*/}
class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = {
            score: 0
        };
    }

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score"> {this.state.score} </span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

ReactDOM.render(
   <App initialPlayers={players}/>,
    document.getElementById('App')
);