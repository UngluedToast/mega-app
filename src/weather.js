import React from 'react'
import axios from 'axios'


class weatherstuff extends React.Component {
    constructor(props) {
        super(props);


        this.state= {
            ungaDunga: {}
        };
    }

    async componentDidMount () {
        const response = await axios.get('https://my-little-cors-proxy.herokuapp.com/https://api.weather.gov/gridpoints/TOP/50,86')
        this.setState({
            ungaDunga: response.data.properties.temperature.values
        }, () => {
            console.log(this.state)
        });
    };


    render () {
        return (
            <div>
                <ul>
                    Location: Atlanta
                    Temperature: {this.state.ungaDunga.values}
                    Wind speed:
                </ul>
            </div>
        );
    }
}



export default weatherstuff