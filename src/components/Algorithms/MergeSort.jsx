import React from 'react';

import SortBar from '../SortBar.jsx';

import './MergeSort.css';

export default class MergeSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='MergeSort'>
                <SortBar />                                    
            </div>
        )
    }
}