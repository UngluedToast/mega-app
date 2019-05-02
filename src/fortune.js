import React from 'react'
import axios from 'axios'


class Fortune extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            id: 1,
            fortune: {}
        };
    }

    componentDidMount () {
        this._getFortuneForPage();
    }


    _getFortuneForPage = async () => {
        const response = await axios.get(`http://yerkee.com/api/fortune`)
        // console.log(response)
        // console.log(this.state);
        this.setState({
            fortune: response.data
        }, () => {
            console.log(this.state)
            console.log('done setting fortune state');
        });
    }

    // This function inrements the page number

    _incrementPageNumber = () => {
        console.log(`_incrementPageNumber`);
        this.setState({
            // pageNumber: this.state.pageNumber + 1
        }, () => {
            this._getFortuneForPage();
        })
        
    }

// and this one decrements it

    // _decrementPageNumber = () => {
    //     console.log(`_decrementPageNumber`);
    //     this.setstate({
    //         pageNumber: this.state.pageNumber - 1
    //     }, this._getFortuneForPage);
    // }

    render () {
        return (
            <div>
                <ul>
                    <li>
                        Fortune:  {this.state.fortune.fortune}
                    </li>
                </ul>
                {/* <button onClick={this._decrementPageNumber}>previous</button> */}
                <button onClick={this._incrementPageNumber}>new fortune</button>
            </div>
        )
    }
        


}


export default Fortune