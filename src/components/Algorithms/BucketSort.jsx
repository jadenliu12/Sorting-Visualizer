import React from 'react';

import SortBar from '../SortBar.jsx';

import './BucketSort.css';

export default class BucketSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='BucketSort'>
                <SortBar />                                    
            </div>
        )
    }
}