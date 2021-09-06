import React from 'react';

import SortBar from '../SortBar.jsx';

import './InsertionSort.css';

export default class InsertionSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='InsertionSort'>
                <SortBar />                                    
            </div>
        )
    }
}