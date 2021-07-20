import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div className='main'>                    
                    <div className='left'><button className='navBut'>+</button></div>
                    <div className='right'><button className='navBut'>+</button></div>
                </div>
            </Router>
        )
    }
}