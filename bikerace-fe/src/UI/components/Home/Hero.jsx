import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Hero extends Component {
    render() { 
        return (    
            
      		  <div className=" d-flex flex-column justify-content-between bg-warning p-4 h-100">             
              <h1 className="display-4 font-weight-bold font-italic text-secondary ">Welcome to the Boulder Bike Tour!</h1>
                <p className="lead">
                  Once every decade, an exciting, prestigious, and inspiring bike race takes place in Colorado 
                  at the foot of the Rocky Mountains.
                </p>
                <p className="lead font-italic">
                  It's the Boulder Bike Tour, and it's coming up in 2020! 
                </p>
              <hr className=" "/>
              <Link className="btn btn-dark align-self-start " to='/location'>Find our live map here</Link>
              </div>
         );
    }
}
