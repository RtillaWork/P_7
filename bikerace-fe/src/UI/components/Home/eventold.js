import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class EventInformation extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-content-stretch">


                    <div className="col-md-3 d-flex flex-column justify-content-between ">
                        <div className="p-2 bg-info">
                            <h2 className="font-weight-bold ">Got a slogan?</h2>
                            <p className="lead">
                                We want to hear from you!
                            </p>
                            <p>
                                Submit your for our contest here slogan in 50 characters or less and it might be
                                selected
                            </p>
                        </div>

                        <div className="">
                            <Link className="btn btn-secondary btn-md text-light" to='/contest'>Contest details</Link>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className="">
                            <h2 className="font-weight-bold ">Live riders' map</h2>
                            <p className="lead">Map of bike riders' position </p>
                            <p>
                                Once every decade, an exciting, prestigious, and inspiring bike race takes place in
                                Colorado at the foot of the Rocky Mountains. Check the live map here </p>
                        </div>

                        <div className="">
                            <Link className="btn btn-secondary btn-md text-light" to='/location'>Location</Link>

                        </div>
                    </div>


                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className="">
                            <h2 className="font-weight-bold ">Photo stream</h2>
                            <p className="lead">
                                Follow the photo coverage
                            </p>
                            <p>
                                You can follow us on flikr through the hashtags #bikerace and #BoulderBikeTour or check
                                our photos page </p>
                        </div>

                        <div className="">
                            <Link className="btn btn-secondary btn-md text-light" to='/photos'>Photos</Link>
                        </div>
                    </div>


                    <div className="col-md-3 d-flex flex-column justify-content-between">
                        <div className="">
                            <h2 className="font-weight-bold ">About the riders</h2>
                            <p className="lead">Information about Boulder Bike Race contestants</p>
                            <p>
                                This season, 20 riders are competing for the title. Find out more about them here </p>
                        </div>

                        <div className="">
                            <Link className="btn btn-secondary btn-md text-light" to='/riders'>Riders list</Link>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
