import React, {Component} from 'react'

import {Route} from 'react-router-dom';
import Home from './Home';
import Contest from './Contest';
import Photos from './Photos';
import Riders from './Riders';
import Location from './Location';


export default class Main extends Component {
    constructor(props) {
        super(props);
        // console.log("MAIN CONSTRUCTOR: this.props.data ", this.props.data );
    }

    render() {
        return (
            <main className='container'>  {/* flex-grow-1*/}
                {/* <Switch> */}
                <Route exact path='/' component={Home}/>
                <Route path='/contest' component={Contest}/>
                <Route path='/location' component={Location}/>
                <Route path='/photos' component={Photos}/>
                <Route
                    path='/riders'
                    render={props => <Riders {...props} data={this.props.data}/>}
                />
                {/* </Switch> */}
            </main>
        )
    }
}
