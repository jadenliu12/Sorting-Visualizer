import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Home from './Home.jsx';

//redux
import {changeTotal, changeArray, changeLB, changeUB} from '../states/SortBar-actions.js';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        arrayStr: PropTypes.string,
        lowerBound: PropTypes.number,
        upperBound: PropTypes.number,         
        total: PropTypes.number,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)

        this.toggleAlgo = this.toggleAlgo.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeArrText = this.onChangeArrText.bind(this);
        this.onChangeSliderOne = this.onChangeSliderOne.bind(this);
        this.onChangeSliderTwo = this.onChangeSliderTwo.bind(this);
        this.fillColor = this.fillColor.bind(this);
    }

    render() {
        const {arrayBar, arrayStr, lowerBound, upperBound, total} = this.props;

        return (
            <Router>
                <div className='main'>                    
                    <div className='left'>
                        <button className='navBut' id='leftButt' onClick={() => this.toggleAlgo()}>+</button>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='insert hiddenLeft'>
                                <button className='algoBut'>I.S</button>
                            </div>
                            <span className='insertTitle'>Insertion Sort</span>
                        </div>

                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='selection hiddenLeft'>
                                <button className='algoBut'>S.S</button>
                            </div>
                            <span className='selectionTitle'>Selection Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='bubble hiddenLeft'>
                                <button className='algoBut'>B.S</button>
                            </div>
                            <span className='bubbleTitle'>Bubble Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='quick hiddenLeft'>
                                <button className='algoBut'>Q.S</button>
                            </div>
                            <span className='quickTitle'>Quick Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='merge hiddenLeft'>
                                <button className='algoBut'>M.S</button>
                            </div>
                            <span className='mergeTitle'>Merge Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='heap hiddenLeft'>
                                <button className='algoBut'>H.S</button>
                            </div>
                            <span className='heapTitle'>Heap Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='radix hiddenLeft'>
                                <button className='algoBut'>R.S</button>
                            </div>
                            <span className='radixTitle'>Radix Sort</span>
                        </div>
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='bucket hiddenLeft'>
                                <button className='algoBut'>B.S</button>
                            </div>
                            <span className='bucketTitle'>Bucket Sort</span>
                        </div>
                    </div>
                    <div className='right'>
                        <button className='navBut' id='rightButt' onClick={() => this.toggleRight()}>+</button>

                        <div className='vertLine hiddenRight'>&nbsp;</div>
                        <div className='input hiddenRight'>
                            <button className='inSetBut' id='inSetBut' onClick={() => this.toggleInput()}>In</button>
                        </div>                            

                        <div className='vertLine hiddenRight'>&nbsp;</div>
                        <div className='settings hiddenRight'>
                            <button className='inSetBut'><i class="fas fa-cog"></i></button>
                        </div>

                        <div className='inputContainer hiddenIn'>
                            <div className='numOfInContainer'>
                                <p className='inputTitle'>Number of Inputs</p>                                
                                <input type='number' className='numOfInput' min='1' value={total} onChange={(e) => this.onChangeNumber(e)} />
                            </div>                            

                            <div className='inContainer'>
                                <p className='inputTitle'>Inputs <span className='inputSubTitle'>(Separated by ',' or ' ')</span></p>
                                <textarea className='inputArea' value={arrayStr} onChange={(e) => this.onChangeArrText(e)}></textarea>
                                <button className='inputBut'>RANDOMIZE!</button>
                                <button className='inputBut'>SHUFFLE!</button>
                                <button className='setBut'>SET</button>
                                <div className="sliderContainer">
                                    <div className="slider-track"></div>
                                    <input type="range" min="0" max="1000" value={lowerBound} id="slider-1" onChange={() => this.onChangeSliderOne()} />
                                    <input type="range" min="0" max="1000" value={upperBound} id="slider-2" onChange={() => this.onChangeSliderTwo()} />                                 
                                </div>                                
                                <div className="sliderValueLeft" ><div className="valueLeft"><p className="valLeft">{lowerBound}</p></div></div> 
                                <div className="sliderValueRight"><div className="valueRight"><p className="valRight">{upperBound}</p></div></div>                                   
                            </div>

                            <div className='speedContainer'>
                                <p className='inputTitle'>Speed</p>
                                <div className='butContainer'>
                                    <button className='speedBut'>0.25x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut'>0.5x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut'>1x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut'>1.5x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut'>2x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Route exact path="/" render={() => (                    
                        <Home />                        
                )}/>
            </Router>
        )
    }

    toggleAlgo() {
        const arrHidden = document.getElementsByClassName('hiddenLeft');
        const button = document.getElementById('leftButt');

        button.textContent = button.textContent == '+' ? '-' : '+';

        for(let item of arrHidden) {                          
            item.classList.toggle('showLeft');
        }            
    }

    toggleRight() {
        const arrHidden = document.getElementsByClassName('hiddenRight');
        const button = document.getElementById('rightButt');

        button.textContent = button.textContent == '+' ? '-' : '+';

        for(let item of arrHidden) {                          
            item.classList.toggle('showRight');
        }         
    }

    toggleInput() {
        const arrHidden = document.getElementsByClassName('hiddenIn');
        const button = document.getElementById('inSetBut');
                
        if(button.style.backgroundColor == 'rgb(255, 255, 255)' || button.style.backgroundColor == '') {            
            button.style.backgroundColor = '#707070';
            button.style.color = '#FFFFFF';
        }
        else {                        
            button.style.backgroundColor = '#FFFFFF';
            button.style.color = '#707070';
        }

        for(let item of arrHidden) {                          
            item.classList.toggle('showIn');
        }      
        
        this.fillColor();
    }   
    
    onChangeNumber(e) {            
        this.props.dispatch(changeTotal(e.target.value));
    }

    onChangeArrText(e) {
        this.props.dispatch(changeArray(e.target.value));
    }

    onChangeSliderOne() {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let sliderValue = document.querySelector(".valueLeft");
        let sliderVal = document.querySelector(".valLeft");

        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) >= 0){
            let val = parseInt(sliderOne.value);
            this.props.dispatch(changeLB(val));
            sliderVal.textContent = val;
            sliderValue.style.left = (val/10) + "%";
        }

        this.fillColor();                
    }

    onChangeSliderTwo() {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");  
        let sliderValue = document.querySelector(".valueRight");
        let sliderVal = document.querySelector(".valRight");

        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) >= 0){
            let val = parseInt(sliderTwo.value);
            this.props.dispatch(changeUB(val));
            sliderVal.textContent = val;
            sliderValue.style.left = (val/10) + "%";                        
        }

        this.fillColor();        
    }


    fillColor() {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2"); 
        let sliderTrack = document.querySelector(".slider-track");
        
        let percent1 = (sliderOne.value / 1000) * 100;
        let percent2 = (sliderTwo.value / 1000) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #707070 ${percent1}% , #707070 ${percent2}%, #dadae5 ${percent2}%)`;        
    }
}

export default connect(state => ({
    ...state.sortBar,
}))(Main);