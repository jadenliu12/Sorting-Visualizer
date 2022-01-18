import React from 'react';

import SortBar from '../SortBar.jsx';

import './BubbleSort.css';

export default class BubbleSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='BubbleSort'>
                <SortBar />                                    
            </div>
        )
    }
}