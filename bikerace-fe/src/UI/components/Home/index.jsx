import React, { Component } from 'react';
import ContestCounter from './ContestCounter';
import EventInformation from './EventInformation';
import Hero from './Hero';

export default class Home extends Component {
    render() {
        return (  
            <React.Fragment>
                <div className='d-flex flex-column align-content-between  align-items-stretch mb-5'>
                    <div className='d-flex flex-row align-content-between align-items-stretch mb-5'>
                        <div className='d-flex flex-column align-content-between  align-items-start w-50 mr-1'>
                            <Hero />
                        </div>
                        <div className='w-50 ml-1'>
                            <ContestCounter />
                        </div>
                    </div>                
                  <EventInformation />                                    
                </div>
            </React.Fragment>           
        )
    }
}
