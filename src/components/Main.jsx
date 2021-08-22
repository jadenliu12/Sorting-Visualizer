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
import {set, setArray, shuffleArray, changeTotal, changeArray, changeLB, changeUB, changeColor} from '../states/SortBar-actions.js';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        arrayStr: PropTypes.string,
        lowerBound: PropTypes.number,
        upperBound: PropTypes.number,         
        total: PropTypes.number,
        color: PropTypes.string,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)

        this.toggleAlgo = this.toggleAlgo.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
        this.toggleSetting = this.toggleSetting.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeArrText = this.onChangeArrText.bind(this);
        this.onChangeSliderOne = this.onChangeSliderOne.bind(this);
        this.onChangeSliderTwo = this.onChangeSliderTwo.bind(this);
        this.fillColor = this.fillColor.bind(this);
        this.fillColorWithVal = this.fillColorWithVal.bind(this);
        this.randomize = this.randomize.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.set = this.set.bind(this);
    }

    render() {
        const {arrayBar, arrayStr, lowerBound, upperBound, total, color} = this.props;

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
                            <button className='inSetBut' id='inBut' onClick={() => this.toggleInput()}>In</button>
                        </div>                            

                        <div className='vertLine hiddenRight'>&nbsp;</div>
                        <div className='settings hiddenRight'>
                            <button className='inSetBut' id='setBut' onClick={() => this.toggleSetting()}><i class="fas fa-cog"></i></button>
                        </div>

                        <div className='inputContainer hiddenIn'>
                            <div className='numOfInContainer'>
                                <p className='inputTitle'>Number of Inputs</p>                                
                                <input type='number' className='numOfInput' min='1' value={total} onChange={(e) => this.onChangeNumber(e)} />
                            </div>                            

                            <div className='inContainer'>
                                <p className='inputTitle'>Inputs <span className='inputSubTitle'>(Separated by ',' or ' ')</span></p>
                                <textarea className='inputArea' value={arrayStr} onChange={(e) => this.onChangeArrText(e)}></textarea>
                                <button className='inputBut' onClick={() => this.randomize()}>RANDOMIZE!</button>
                                <button className='inputBut' onClick={() => this.shuffle()}>SHUFFLE!</button>
                                <button className='setBut' onClick={() => this.set()}>SET</button>
                                <div className="sliderContainer">
                                    <div className="slider-track"></div>
                                    <input type="range" min="1" max="1000" value={lowerBound} id="slider-1" onChange={() => this.onChangeSliderOne()} />
                                    <input type="range" min="1" max="1000" value={upperBound} id="slider-2" onChange={() => this.onChangeSliderTwo()} />                                 
                                </div>                     
                                <p className="inputSubSubTitle">Input's range: </p>           
                                <div className="sliderValue">
                                    <span>{lowerBound}</span> - <span>{upperBound}</span>
                                </div>
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

                        <div className='settingContainer hiddenSet'>
                            <div className='displayContainer'>
                                <p className='SettingTitle'>Display Styles</p>
                                <label className="container">Bar
                                    <input type="radio" name="display" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Node
                                    <input type="radio" name="display"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Tree
                                    <input type="radio" name="display" />
                                    <span className="checkmark"></span>
                                </label>                                                                                        
                            </div>                            

                            <div className='colorContainer'>
                                <p className='SettingTitle'>Color</p>
                                <input type="color" id="head" name="color" value="#BBECFF" className="colorInput" />    
                                <div className="textContainer">
                                    <label for="head" className="colorLabel"><span className="dash">-</span>Base Color</label>
                                </div>
                                <br />
                                <input type="color" id="head" name="color" value="#FF7878" className="colorInput" />
                                <div className="textContainer">
                                    <label for="head" className="colorLabel"><span className="dash">-</span>Selected (1) Color</label>
                                </div>
                                <br />                                
                                <input type="color" id="head" name="color" value="#88FFB8" className="colorInput" />
                                <div className="textContainer">
                                    <label for="head" className="colorLabel"><span className="dash">-</span>Finished Color</label>                                                                
                                </div>
                            </div>

                            <div className='modeContainer'>
                                <p className='SettingTitle'>Mode</p>
                                <div className="switchContainer">
                                    <div className='switch'>
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </div>
                                    <label className="switchLabel">Light Mode</label>
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
        const inButton = document.getElementById('inBut');
        const setButton = document.getElementById('setBut');
                
        if(inButton.style.backgroundColor == 'rgb(255, 255, 255)' || inButton.style.backgroundColor == '') {            
            inButton.style.backgroundColor = '#707070';
            inButton.style.color = '#FFFFFF';
        }
        else {                        
            inButton.style.backgroundColor = '#FFFFFF';
            inButton.style.color = '#707070';
        }

        if(setButton.style.backgroundColor != 'rgb(255, 255, 255)' || setButton.style.backgroundColor == '') {
            setButton.style.backgroundColor = '#FFFFFF';
            setButton.style.color = '#707070';         
            document.getElementsByClassName('hiddenSet')[0].classList = 'settingContainer hiddenSet';   
        }

        for(let item of arrHidden) {                          
            item.classList.toggle('showIn');
        }      
        
        this.onChangeSliderOne();
        this.onChangeSliderTwo();
    }
    
    toggleSetting() {
        const arrHidden = document.getElementsByClassName('hiddenSet');
        const inButton = document.getElementById('inBut');
        const setButton = document.getElementById('setBut');
                
        if(setButton.style.backgroundColor == 'rgb(255, 255, 255)' || setButton.style.backgroundColor == '') {            
            setButton.style.backgroundColor = '#707070';
            setButton.style.color = '#FFFFFF';
        }
        else {                        
            setButton.style.backgroundColor = '#FFFFFF';
            setButton.style.color = '#707070';
        }

        if(inButton.style.backgroundColor != 'rgb(255, 255, 255)' || inButton.style.backgroundColor == '') {
            inButton.style.backgroundColor = '#FFFFFF';
            inButton.style.color = '#707070';                  
            document.getElementsByClassName('hiddenIn')[0].classList = 'inputContainer hiddenIn';
        }

        for(let item of arrHidden) {                          
            item.classList.toggle('showSet');
        }      
        
        this.onChangeSliderOne();
        this.onChangeSliderTwo();
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

        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) >= 10){
            let val = parseInt(sliderOne.value);
            this.props.dispatch(changeLB(val));
        }

        this.fillColor();                
    }

    onChangeSliderTwo() {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");  

        if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) >= 10){
            let val = parseInt(sliderTwo.value);
            this.props.dispatch(changeUB(val));                       
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

    fillColorWithVal(lb, ub) { 
        let sliderTrack = document.querySelector(".slider-track");
        
        let percent1 = (lb / 1000) * 100;
        let percent2 = (ub / 1000) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #707070 ${percent1}% , #707070 ${percent2}%, #dadae5 ${percent2}%)`;        
    }

    randomize() {
        this.props.dispatch(setArray(this.props.lowerBound, this.props.upperBound, this.props.total));
        this.props.dispatch(changeColor('#BBECFF'));
    }

    shuffle() {
        this.props.dispatch(shuffleArray(this.props.arrayBar));
        this.props.dispatch(changeColor('#BBECFF'));
    }

    set() {
        const comma = this.props.arrayStr.split(',');
        const space = this.props.arrayStr.split(' ');
        const arr = comma.length > space.length ? comma : space;
        const sep = comma.length > space.length ? ',' : ' ';

        const min = Math.min.apply(null, arr);
        const max = Math.max.apply(null, arr);

        this.props.dispatch(set(arr, min, max, sep));
        this.fillColorWithVal(min, max);
        this.props.dispatch(changeColor('#BBECFF'));
    }
}

export default connect(state => ({
    ...state.sortBar,
}))(Main);