import React, {Component} from 'react';
import axios from 'axios';

export default class Riders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riders: [],
        };

    }


    componentDidMount() {
        const API_URL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;


        const axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {'Content-Type': 'application/json'}
        });

        axiosInstance.get('/riders')
            .then(res => {
                this.setState({riders: res.data});
                console.log("AXIOS GET RIDERS: res", res, this.state);
            })
            .catch(err => console.error(err));
    }

    renderRiders(list) {
        return (
            list.map(rider => {
                return (

                    <li key={rider.riderID.toString()} className="media border-bottom border-secondary p-3 mb-4">
                        <img src="bouldercoloradobikerider-3.jpg"
                             className="align-self-start mr-3 img-thumbnail rounded" alt="Bike Rider"/>
                        <div className="media-body py-2 mb-2">
                            <div className='d-flex flex-row justify-content-between align-items-baseline'>
                                <div className=''>
                                    <h2 className="mt-0 text-secondary font-weight-bolder h1 bg-light p-2">{rider.lastName}, {rider.firstName}</h2>
                                </div>
                                <div className=''>
                                    <p className="lead text-white bg-warning p-2 font-weight-bold">{rider.city}, {rider.state}</p>
                                </div>
                            </div>
                        </div>
                    </li>

                );
            })
        );
    }


    render() {
        return (
            <>

                <div className="jumbotron bg-warning text-white mb-3">
                    <h2 className="display-4">Riders' info page</h2>
                    <hr className="my-1"/>
                    <p className="lead font-weight-bold">Here are our contestants</p>
                    <p className="lead font-weight-bold">-There are 20 riders participants in total this season.
                        you can find details about each rider, including their first name, last name and city of origin.
                    </p>
                </div>

                <div className="  ">
                    <ul className="list-unstyled">
                        {this.renderRiders(this.state.riders)}
                        {console.log("RIDERS RENDER: ", this.state.riders)}
                    </ul>
                </div>


            </>
        );
    }
}
