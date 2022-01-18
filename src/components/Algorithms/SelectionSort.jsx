import React from 'react';

import SortBar from '../SortBar.jsx';

import './SelectionSort.css';

export default class SelectionSort extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='SelectionSort'>
                <SortBar />                                    
            </div>
        )
    }
}