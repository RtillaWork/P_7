import React, {Component} from 'react';


import {Link} from 'react-router-dom'

export default class Hero extends Component {
    render() {
        return (
            <div className="jumbotron bg-secondary text-white">
                <h1 className="display-4">Welcome to the Boulder Bike Tour!</h1>
                <hr className="my-2"/>

                <p className="lead">
                    Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado
                    at the foot of the Rocky Mountains.
                </p>
                <p className="">
                    It's the Boulder Bike Tour, and it's coming up in 2020!
                </p>
                <hr className="my-4"/>
                <Link className="btn btn-dark" to='/location'>Find our live map here</Link>
            </div>
        );
    }
}
