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
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
            {props.name}
            </span>
            <Counter 
            /> 
        </div>
    );
}

class App extends React.Component {
    // {/* PARENT COMPONENT PASSES DOWN INFO TO CHILDREN COMPONENT */}

    state = {
        players: [
                {
                    name: "Guil",
                    id: 1
                  },
                  {
                    name: "Treasure",
                    id: 2
                  },
                  {
                    name: "Ashley",
                    id: 3
                  },
                  {
                    name: "James",
                    id: 4
                  }
                ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter( player => player.id !== id)
            }
        });
    }

    render() {
        return (
            <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={this.state.players.length}
                isFun
            />
    
            {/*Player list*/}
            {/* ADD KEY PROPS WHEN ITERATING OVER AN ARRAY OF ITEMS
            THAT WILL BE REARANGED, ADDED, OR DELETED IN YOUR UI*/}
            {this.state.players.map( player =>
            <Player 
                name={player.name}
                key={player.id.toString()}
                id={player.id}
                removePlayer={this.handleRemovePlayer}
            /> 
            )}
            </div>
        );
    }
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
        this.setState( prevState => ({
                score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( prevState => ({
                score: prevState.score - 1
        }));
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
   <App />,
    document.getElementById('App')
);