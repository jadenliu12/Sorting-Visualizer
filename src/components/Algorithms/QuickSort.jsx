import React from 'react';

import SortBar from '../SortBar.jsx';

import './QuickSort.css';

export default class QuickSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='QuickSort'>
                <SortBar />                                    
            </div>
        )
    }
}