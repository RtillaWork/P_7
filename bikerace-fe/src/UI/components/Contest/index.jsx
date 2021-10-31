import React, { Component } from 'react';
import ContestInfo from './ContestInfo';
import SloganForm from './SloganForm';

export default class Contest extends Component {
    render() {
        return (
            <div>
                <ContestInfo />
                <SloganForm />
            </div>
        );
    }
}
