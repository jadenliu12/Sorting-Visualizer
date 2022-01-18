import React from 'react';

import SortBar from './SortBar.jsx';

import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home'>
                <SortBar />
                <h1>S O R T I N G - V I S U A L I Z E R</h1>                           
            </div>
        )
    }
}