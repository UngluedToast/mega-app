import React from 'react'
import axios from 'axios'

class iDontCareAboutGameOfThronesJesus extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            pageNumber: 1,
            character: {}
        };
    }

    componentDidMount() {
        console.log(`componentDidMount`);
        this._getCharactersForPage();
    }

    _getCharactersForPage = async () => {
        const response = await axios.get(`https://www.anapioficeandfire.com/api/characters/${this.state.pageNumber}`);
        console.log(response.data);
        // console.log(`_getCharactersForPage`);
        this.setState({
            character: response.data
        }, () => {
            console.log('done setting state');
        });
    }

    _incrementPageNumber = () => {
        console.log(`_incrementPageNumber`);
        this.setState({
            pageNumber: this.state.pageNumber + 1   
        }, () => {
            this._getCharactersForPage();
        });
    }
    _decrementPageNumber = () => {
        console.log(`_decrementPageNumber`);
        // let whatToChange = {
        //   pageNumber: this.state.pageNumber - 1   
        // };
        // let whatToDoAfter = this._getCharactersForPage();
        // this.setState(whatToChange, whatToDoAfter);    // equivalent alternative version to the one in _incrementPageNumber
    
        this.setState({
            pageNumber: this.state.pageNumber - 1   
        }, this._getCharactersForPage);    // equivalent alternative version to the one in _incrementPageNumber
    }

    render () {
        return (
            <div>
                <ul>
                    <li> Id: {this.state.pageNumber}</li>
                    <li>name: {this.state.character.name}</li>
                    <li>born: {this.state.character.born}</li>
                    <li>culture: {this.state.character.culture}</li>
                </ul>
                <button onClick={this._decrementPageNumber}>previous</button>
                <button onClick={this._incrementPageNumber}>next</button>
            </div>
        );
    }
}



export default iDontCareAboutGameOfThronesJesus