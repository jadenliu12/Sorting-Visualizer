import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//algorithms
import {insertionSort} from '../utilities/InsertionSort.js';

//redux
import {setArray} from '../states/SortBar-actions.js';

import './SortBar.css';

//Sorting settings
var SORT_SPEED = 10;

var TOTAL_ARRAY = 10;
var ARRAY_LB = 100;
var ARRAY_UB = 500;

var PRIMARY_COLOR = '#BBECFF';
var SECONDARY_COLOR = '#FF7878';
var TERTIARY_COLOR = '#FFD83E';
var SORTED_COLOR = '#88FFB8';

class SortBar extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        total: PropTypes.number,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)
        
        this.sort = this.sort.bind(this);
        this.sorted = this.sorted.bind(this);
        this.checkArray = this.checkArray.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setArray(ARRAY_LB, ARRAY_UB, TOTAL_ARRAY));
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
                        backgroundColor: PRIMARY_COLOR,
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
        if(!this.check()) {
            var animations = insertionSort(this.props.arrayBar, this.props.total);

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                    if(i === animations.length-1)
                        this.sorted();
                }, i * SORT_SPEED);
                } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;

                    if(i === animations.length-1)
                        this.sorted();                
                }, i * SORT_SPEED);
                }
            } 
        }   
    }

    sorted() {
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let item of arrayBars)
            item.style.backgroundColor = SORTED_COLOR;
    }

    check() {
        var testArr = this.props.arrayBar.slice().sort((a,b) => a-b);
        return this.checkArray(this.props.arrayBar, testArr);
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