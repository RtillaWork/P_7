import React, { Component } from 'react';
import moment from 'moment';
import './ContestCounter.css';

export default class ContestCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contestDate: moment("2020-04-01"),
            nowDate: moment(),
            milsecondsTillTheRace: 0,           
    };

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({nowDate: moment()});
        this.setState({milsecondsTillTheRace:
            this.state.contestDate.diff(this.state.nowDate)
    })
    }

 

    render() {
        
        return ( 
        <div className='bg-cool'>
        <div className="d-flex flex-column bg-gr p-4">
         <div className="display-1 text-warning d-flex flex-row justify-content-around align-items-baseline"><span className='mr-auto'>{moment.duration(this.state.milsecondsTillTheRace).months()}</span> <span className="display-4 ">Months</span></div>
          <div className="display-1  d-flex flex-row justify-content-around align-items-baseline"><span className=' mr-auto'>{moment.duration(this.state.milsecondsTillTheRace).days()}</span> <span className="display-4 ">Days</span></div>
          <div className="display-1  d-flex flex-row justify-content-around align-items-baseline"><span className=' mr-auto'>{moment.duration(this.state.milsecondsTillTheRace).hours()}</span> <span className="  display-4">Hours</span></div>
          <div className="display-1  d-flex flex-row justify-content-around align-items-baseline"><span className='mr-auto'>{moment.duration(this.state.milsecondsTillTheRace).minutes()}</span> <span className="   display-4">Minutes</span></div>
          <div className="display-1 text-primary  d-flex flex-row justify-content-around align-items-baseline"><span className='mr-auto'>{ moment.duration(this.state.milsecondsTillTheRace).seconds()  }</span>  <span className="  display-4">Seconds</span></div>
       </div>
      </div> 
        );
    }
}
