import React, {Component} from 'react';

export default class ContestInfo extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron bg-info ">
                    <h2 className="display-4">Do you have a slogan? </h2>
                    <hr/>
                    <p className="lead text-justify">The Organizers of the Boulder Bike Race are inviting you this season to come up with a slogan for the race.
                                        Everyone is invited to participate and the best slogan will be the official one for the Boulder Bike Race 2020.
                    </p>

                    <hr className="my-2"/>
                    <p className='lead text-justify font-weight-bold'>
                        To participate, it's easy: just provide your first name, last name, email address, and a slogan idea under 50 characters.
                    </p>                      
                </div>
            </div>
        );
    }
}
