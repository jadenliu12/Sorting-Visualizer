import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//algorithms
import {insertionSort} from '../utilities/InsertionSort.js';
import {selectionSort} from '../utilities/SelectionSort.js';
import {bubbleSort} from '../utilities/BubbleSort.js';
import {quickSort} from '../utilities/QuickSort.js';
import {mergeSort} from '../utilities/MergeSort.js';

//redux
import {setArray, changeColorDone, changeToSorted} from '../states/SortBar-actions.js';

import './SortBar.css';

//Sorting settings
var SORT_SPEED = 1000;

class SortBar extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        arrayStr: PropTypes.string,
        lowerBound: PropTypes.number,
        upperBound: PropTypes.number,        
        total: PropTypes.number,
        sorted: PropTypes.bool,
        speed: PropTypes.number,
        color: PropTypes.Object,
        algo: PropTypes.string,
        algoClosedSym: PropTypes.string,
        algoOpenedSym: PropTypes.string,        
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
        
        this.insertSort = this.insertSort.bind(this);
        this.selectSort = this.selectSort.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.mergeSort = this.mergeSort.bind(this)

        this.sorted = this.sorted.bind(this);
        this.checkArray = this.checkArray.bind(this);

        this.addClass = this.addClass.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(setArray(this.props.lowerBound, this.props.upperBound, this.props.total));
    }

    render() {
        const {arrayBar, arrayStr, lowerBound, upperBound, total, sorted, speed, color, algo, algoClosedSym, algoOpenedSym} = this.props;
        
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
                        algo != "home" &&
                        <div className="movesWrapper" id="movesWrapper">
                            <p className="movesTitle">Current Move:</p>
                            <div className="movesContainer" id="movesContainer" onScroll={() => this.handleScroll()}> 
                            </div>
                        </div>
                    }
                    <button 
                        type='button' 
                        className='button' 
                        onClick={() => 
                            this.props.algo == 'insert' || this.props.algo == 'home' ? this.insertSort() : 
                            this.props.algo == 'select' ? this.selectSort() : 
                            this.props.algo == 'bubble' ? this.bubbleSort() : 
                            this.props.algo == 'quick' ? this.quickSort() : this.mergeSort()
                        }>
                            <span className='innerButton'>SORT</span>
                    </button>    
                </div>
            </div>
        )
    } 

    insertSort() {
        if(!this.props.sorted) {            
            console.log(`[INSERT] sorting at speed of ${this.props.speed}`);
            var animations = insertionSort(this.props.arrayBar, this.props.total);
            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");            

            if(this.props.algo !== "home")
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

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                } 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = `${this.props.color.tertiary}`;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }                        

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * (SORT_SPEED / this.props.speed));
                }                
            } 
        } 
    }

    selectSort() {
        if(!this.props.sorted) {            
            console.log(`[SELECT] sorting at speed of ${this.props.speed}`);
            var animations = selectionSort(this.props.arrayBar, this.props.total);
            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");            

            if(this.props.algo !== "home")
                wrapper.style.display = 'block';

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const state = animations[i].message.split(' ')[0];

                if (state === 'Compare') {
                    const [barOneIdx, barTwoIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;                    
                    const color = animations[i].color ? this.props.color.secondary : this.props.color.primary;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;                        

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }
                else if (state === 'Set') {
                    const [barOneIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;                                        
                    setTimeout(() => {
                        barOneStyle.backgroundColor = this.props.color.tertiary;                        

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }                   
                else if (state === 'Change') {
                    const [barOneIdx, barTwoIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;                    
                    setTimeout(() => {
                        barOneStyle.backgroundColor = this.props.color.primary;
                        barTwoStyle.backgroundColor = this.props.color.tertiary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }                 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = animations[i].color ? `${this.props.color.tertiary}` : `${this.props.color.primary}`;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }                        

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * (SORT_SPEED / this.props.speed));
                }                
            } 
        } 
    }

    bubbleSort() {
        if(!this.props.sorted) {            
            console.log(`[bubble] sorting at speed of ${this.props.speed}`);
            var animations = bubbleSort(this.props.arrayBar, this.props.total);
            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");            

            if(this.props.algo !== "home")
                wrapper.style.display = 'block';

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const state = animations[i].message.split(' ')[0];

                if (state === 'Compare') {
                    const [barOneIdx, barTwoIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = animations[i].color ? this.props.color.secondary : this.props.color.primary;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }
                else if (state === 'Set') {
                    const [barOneIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = this.props.color.tertiary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }                 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = `${this.props.color.primary}`;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }                        

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * (SORT_SPEED / this.props.speed));
                }                
            } 
        }
    }

    quickSort() {
        if(!this.props.sorted) {            
            console.log(`[quick] sorting at speed of ${this.props.speed}`);
            var animations = [];
            quickSort(this.props.arrayBar, 0, this.props.total - 1, animations);
            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");            

            if(this.props.algo !== "home")
                wrapper.style.display = 'block';

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const state = animations[i].message.split(' ')[0];

                if (state === 'Compare') {
                    const [barOneIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;                                        
                    setTimeout(() => {
                        barOneStyle.backgroundColor = animations[i].color ? this.props.color.secondary : this.props.color.primary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }
                else if (state === 'Set') {
                    const [barOneIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = this.props.color.secondary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }                 
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = `${this.props.color.primary}`;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }                        

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * (SORT_SPEED / this.props.speed));
                }                
            } 
        }        
    }

    mergeSort() {
        if(!this.props.sorted) {            
            console.log(`[merge] sorting at speed of ${this.props.speed}`);
            var animations = [];
            mergeSort(this.props.arrayBar, animations);
            
            const moves = document.getElementById("movesContainer");
            const wrapper = document.getElementById("movesWrapper");            

            if(this.props.algo !== "home")
                wrapper.style.display = 'block';

            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');            
                const state = animations[i].message.split(' ')[0];

                if (state === 'Compare') {
                    const [barOneIdx, barTwoIdx] = animations[i].arr;
                    const barOneStyle = arrayBars[barOneIdx].style;     
                    const barTwoStyle = arrayBars[barTwoIdx].style;                                        
                    setTimeout(() => {
                        barOneStyle.backgroundColor = animations[i].color ? this.props.color.secondary : this.props.color.tertiary;
                        barTwoStyle.backgroundColor = animations[i].color ? this.props.color.secondary : this.props.color.tertiary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }        
                else if (state === 'Sort') {
                    const [left, right] = animations[i].arr;
                    const barStyle = [];

                    for(let j = left; j <= right; j++)
                        barStyle.push(arrayBars[j].style);                    

                    setTimeout(() => {
                        for(let j = 0; j < barStyle.length; j++)
                            barStyle[j].backgroundColor = animations[i].color ? this.props.color.tertiary : this.props.color.primary;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }

                        if(i === animations.length-1)
                            this.sorted();
                    }, i * (SORT_SPEED / this.props.speed));
                }       
                else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].arr;
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;  
                        barOneStyle.backgroundColor = `${this.props.color.tertiary}`;

                        if(this.props.algo !== "home") {
                            moves.innerHTML += `<div class="moves">${animations[i].message}</div>`;
                            moves.scrollTop = moves.scrollHeight;
                        }                        

                        if(i === animations.length-1)
                            this.sorted();                
                    }, i * (SORT_SPEED / this.props.speed));
                }                
            } 
        }        
    }

    sorted() {
        const arrayBars = document.getElementsByClassName('array-bar');
        const moves = document.getElementById("movesContainer");

        for(let item of arrayBars)
            item.style.backgroundColor = this.props.color.done;
            
        if(this.props.algo !== "home") {
            moves.innerHTML += '<div class="moves">Finished</div>';
            moves.scrollTop = moves.scrollHeight;
        }   
             
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