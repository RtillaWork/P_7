import React, {Component} from 'react'

import {Route} from 'react-router-dom';
import Home from './Home';
import Contest from './Contest';
import Photos from './Photos';
import Riders from './Riders';
import Location from './Location';


export default class Main extends Component {

    render() {
        return (
            <main className='container'>
                <Route exact path='/' component={Home}/>
                <Route path='/contest' component={Contest}/>
                <Route path='/location' component={Location}/>
                <Route path='/photos' component={Photos}/>
                <Route path='/riders' component={Riders}/>
            </main>
        )
    }
}
