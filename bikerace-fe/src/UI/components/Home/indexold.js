import React, {Component} from 'react';
import ContestCounter from './ContestCounter';


import EventInformation from './EventInformation';
import Hero from './Hero';

export default class Home extends Component {
    render() {
        return (            
            <React.Fragment>
                <div className='row align-items-stretch mt-1'>
                    <div className='col-md-6 align-self-stretch'>
                        <Hero />
                    </div>
                    <div className='col-md-6'>
                        <ContestCounter />
                    </div>
                </div> 
                
                <div className='row align-items-end mt-4'>
                    <div className='col-md-12'>
                        <EventInformation />
                    </div>
                </div>
            </React.Fragment>           
        )
    }
}
