import React from 'react';

import SortBar from '../SortBar.jsx';

import './RadixSort.css';

export default class RadixSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='RadixSort'>
                <SortBar />                                    
            </div>
        )
    }
}