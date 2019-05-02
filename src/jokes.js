import React from 'react'
import axios from 'axios';


class Jokes extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            jokeies: {}

        };
    }
    async componentDidMount () {
        const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/https://api.icndb.com/jokes/random')
        this.setState({
            jokeies: response.data.value
        }, () => {
            console.log(this.state)
        });
    }

    getNewJoke = () => {
        console.log(`refreshing Joke`);
        this.setState({
            // pageNumber: this.state.pageNumber + 1   
        }, () => {
            this.componentDidMount();
        });
    }

    render () {
        return (
            <div>
                <ul>
                    Mr. Norris : {this.state.jokeies.joke}
                </ul>
                <button onClick={this.getNewJoke}> New Joke </button>
            </div>
        );
    }
}




export default Jokes