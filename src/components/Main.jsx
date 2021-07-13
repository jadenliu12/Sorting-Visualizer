import React from 'react';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='main'>
                <h1>Hello, World!</h1>
            </div>
        )
    }
}