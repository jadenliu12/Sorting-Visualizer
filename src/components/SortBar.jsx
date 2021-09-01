import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//algorithms
import {insertionSort} from '../utilities/InsertionSort.js';

//redux
import {setArray, changeColorDone, changeToSorted} from '../states/SortBar-actions.js';

import './SortBar.css';

//Sorting settings
var SORT_SPEED = 10;

var TOTAL_ARRAY = 10;
var ARRAY_LB = 100;
var ARRAY_UB = 500;

class SortBar extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        arrayStr: PropTypes.string,
        lowerBound: PropTypes.number,
        upperBound: PropTypes.number,        
        total: PropTypes.number,
        sorted: PropTypes.bool,
        color: PropTypes.Object,
        algo: PropTypes.string,
        algoClosedSym: PropTypes.string,
        algoOpenedSym: PropTypes.string,        
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.sort = this.sort.bind(this);
        this.sorted = this.sorted.bind(this);
        this.checkArray = this.checkArray.bind(this);

        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setArray(ARRAY_LB, ARRAY_UB, TOTAL_ARRAY));
    }

    render() {
        const {arrayBar, arrayStr, lowerBound, upperBound, total, sorted, color, algo, algoClosedSym, algoOpenedSym} = this.props;
        
        let children = (<div></div>);
        if (arrayBar.length) {
            children = arrayBar.map((val, idx) => (
                <div 
                    className='array-bar' 
                    key={idx}
                    style={{
                        backgroundColor: sorted ? color.done : color.primary,
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
                <div className="botContainer">
                    {
                        <div className="movesWrapper" id="movesWrapper">
                            <p className="movesTitle">Current Move:</p>
                            <div className="movesContainer" id="movesContainer" onScroll={() => this.handleScroll()}> 
                            </div>
                        </div>
                    }
                    <button type='button' className='button' onClick={() => this.sort()}>
                        <span className='innerButton'>SORT</span>
                    </button>    
                </div>
            </div>
        )
    } 

    sort() {
        if(!this.props.sorted) {            
            var animations = insertionSort(this.props.arrayBar, this.props.total);            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");

            wrapper.style.display = 'block';

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const isColorChange = i % 3 !== 2;

                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i % 3 === 0 ? this.props.color.secondary : this.props.color.primary;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                        moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                        moves.scrollTop = moves.scrollHeight;

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * SORT_SPEED);
                } 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = `${this.props.color.tertiary}`;
                        moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;        
                        moves.scrollTop = moves.scrollHeight;            

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * SORT_SPEED);
                }                
            } 
        } 
    }

    sorted() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const moves = document.getElementById("movesContainer");

        for(let item of arrayBars)
            item.style.backgroundColor = this.props.color.done;
            
        moves.innerHTML += '<div class="moves">Finished</div>';
        moves.scrollTop = moves.scrollHeight;        
        this.props.dispatch(changeColorDone(this.props.color.done));        
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

    addClass = function(el,cl) {
        var re = new RegExp('(^|\\s)'+cl+'(\\s|$)');
        if (!el.className.match(re)) el.className += " "+cl;
    };
         
    removeClass = function(el,cl) {
        var re = new RegExp('(^|\\s)'+cl+'(\\s|$)');
        if (el.className.match(re))
        el.className=el.className.replace(re,' ');
    };    

    handleScroll() {        
        const moves = document.querySelectorAll('div.moves');
        const container = document.getElementById('movesContainer');

        const topLimit = container.scrollTop + 10;
        const botLimit = container.scrollTop + 150;

        for(let item of moves) {
            var thisTop = (item.style.top || item.style.pixelTop || item.offsetTop || 0) - (window.pageXOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);        
            if (thisTop >= topLimit && (thisTop + (item.offsetHeight || item.clipHeight || 0)) <= botLimit) {                
                this.addClass(item,'highlight');
            } 
            else {
		        this.removeClass(item,'highlight');
           }
        }    
    }
}

export default connect(state => ({
    ...state.sortBar,
    ...state.algo,
}))(SortBar);