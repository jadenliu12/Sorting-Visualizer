import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//algorithms
import {insertionSort} from '../utilities/InsertionSort.js';

//redux
import {setArray} from '../states/SortBar-actions.js';

import './SortBar.css';

class SortBar extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        total: PropTypes.number,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)
        
        this.sort = this.sort.bind(this);
        this.checkArray = this.checkArray.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setArray(100, 500, 10));
    }

    render() {
        const {arrayBar, total} = this.props;  
        
        let children = (<div></div>);
        if (arrayBar.length) {
            children = arrayBar.map((val, idx) => (
                <div 
                    className='array-bar' 
                    key={idx}
                    style={{
                        backgroundColor: '#BBECFF',
                        height: `${val}px`,
                    }}
                />
            ))
        }
        
        return (
            <div className="sortBar">
                <div className="sortBarContainer">
                    {children}
                </div>
                <button type='button' className='button' onClick={() => this.sort()}>
                    <span className='innerButton'>SORT</span>
                </button>                
            </div>
        )
    }

    sort() {
        var algoArr = insertionSort(this.props.arrayBar, this.props.total);
        var testArr = this.props.arrayBar.slice().sort((a,b) => a-b);
        console.log(this.checkArray(algoArr, testArr));
    }

    checkArray(arr1, arr2) {
        if(arr1.length != arr2.length) 
            return false;

        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i])
                return false;
        }

        return true;
    }
}

export default connect(state => ({
    ...state.sortBar,
}))(SortBar);