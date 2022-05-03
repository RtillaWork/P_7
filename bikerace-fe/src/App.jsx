import React, {Component} from 'react'
import {BrowserRouter as Router} from "react-router-dom";

import Header from './UI/components/Header';
import Main from './UI/components/Main';
import Footer from './UI/components/Footer';

import axios from 'axios';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventDate: new Date(),
            API_URL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
            riders: [],
            photoTags: [],
            locations: [],
        }
    }

    componentDidMount() {
        const axiosInstance = axios.create({
            baseURL: this.state.API_URL,
            headers: {'Content-Type': 'application/json'}
        });

        axiosInstance.get('/')
            .then(res => {
                this.setState({eventDate: res.data.date});

            })
            .catch(err => console.error(err));

    }

    render() {
        return (
            <Router>
                <div className=' mb-5'><Header/></div>
                <div className='  mb-5'><Main/></div>
                <div className=' '><Footer/></div>
            </Router>
        );
    }
}
