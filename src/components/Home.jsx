import React from 'react';

import SortBar from './SortBar.jsx';

import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home'>
                <SortBar />
                <h1>S O R T I N G - V I S U A L I Z E R</h1>     
                <div className='algo'>
                    <h2>Available Algorithm</h2>
                    <ul className='algo-left'>
                        <li>Insertion Sort</li>
                        <li>Bubble Sort</li>
                        <li>Merge Sort</li>
                        <li>Radix Sort</li>
                    </ul>
                    <ul className='algo-right'>
                        <li>Selection Sort</li>
                        <li>Quick Sort</li>
                        <li>Heap Sort</li>
                        <li>Bucket Sort</li>
                    </ul>                    
                </div>                       
            </div>
        )
    }
}