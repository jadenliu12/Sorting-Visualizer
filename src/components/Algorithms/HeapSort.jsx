import React from 'react';

import SortBar from '../SortBar.jsx';

import './HeapSort.css';

export default class HeapSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='HeapSort'>
                <SortBar />                                    
            </div>
        )
    }
}