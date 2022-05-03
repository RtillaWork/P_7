import React, {Component} from 'react';
import axiosInstance from '../../Utils/axiosInstance';

export default class SloganForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            slogan: '',
            submitStatus: 'NOT_SUBMIT',  // NOT_SUBMIT->SUBMIT_IN_PROGRESS->SUBMIT_SUCCESS | SUBMIT_FAILURE
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSloganChange = this.handleSloganChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value});
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleSloganChange(e) {
        this.setState({slogan: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = JSON.stringify({
            slogan_submission: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                slogan: this.state.slogan,
            }
        });

        axiosInstance.post('/contest', data)
            .then(res => {
                const submitStatus = (res.status == 200 ? 'SUBMIT_SUCCESS' : 'SUBMIT_FAILURE')

                this.setState({submitStatus: submitStatus});
            })
            .catch(err => {
                this.setState({submitStatus: 'SUBMIT_FAILURE'});
            });
    }


    render() {
        let message = '';
        let submitButtonDiv = (
            <input type="submit" className="btn btn-warning btn-lg mx-auto" value="Submit my slogan"/>);


        if (this.state.submitStatus === 'SUBMIT_SUCCESS') {
            message = (
                <h1 className="font-weight-bold text-white text-left bg-info p-2">Thank you for your submission!</h1>);
            submitButtonDiv = (
                <p className="font-weight-bold text-white h2 bg-info p-2 text-center">Your submission has been received
                    successfully!</p>);
        }


        return (
            <div className=" ">
                {message}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName" className="font-weight-bold text-white p-2 h2 bg-secondary ">First
                            name</label>
                        <input type="text" className="form-control form-control-lg rounded" id="firstName"
                               placeholder="Please enter your first name"
                               required="required" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName" className="font-weight-bold  text-white p-2 h2 bg-secondary  ">Last
                            name</label>
                        <input type="text" className="form-control form-control-lg rounded" id="lastName"
                               placeholder="Please enter your last name"
                               required="required" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold text-white p-2 h2 bg-secondary ">Email
                            address</label>
                        <input type="email" className="form-control form-control-lg rounded" id="email"
                               placeholder="email@address.com"
                               required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                               value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sloganText" className="font-weight-bold text-white p-2 h2 bg-secondary  ">Your
                            Slogan</label>
                        <input type="text" className="form-control form-control-lg rounded" id="sloganText"
                               required="required"
                               pattern=".{1,50}" placeholder="Please enter your slogan here. Maximum 50 characters."
                               value={this.state.slogan} onChange={this.handleSloganChange}/>
                    </div>
                    <br/>
                    <div>
                        {submitButtonDiv}
                    </div>
                </form>
            </div>
        );
    }
}
