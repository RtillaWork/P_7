import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (

            <header className='mb-5'>  
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary  text-white">
                <div className="container">
                    <Link className="navbar-brand" to='/'><i className="fas fa-biking text-primary"></i> <span className="h4">Boulder Bike Tour</span> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="  ml-auto">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item h4" >   <Link className="nav-link" to='/'>Home</Link> </li>
                            <li className="nav-item h4" >   <Link className="nav-link" to='/contest'>Contest</Link></li>
                            <li className="nav-item h4" >   <Link className="nav-link" to='/location'>Location</Link></li>
                            <li className="nav-item h4" >   <Link className="nav-link" to='/photos'>Photos</Link></li>
                            <li className="nav-item h4" >   <Link className="nav-link" to='/riders'>Riders</Link></li>
                        </ul>
                    </div>

                    </div>
                    </div>
                </nav>
            </header>
        )
    }
}
