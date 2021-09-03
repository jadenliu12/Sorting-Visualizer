import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import Home from './Home.jsx';
import InsertionSort from './InsertionSort.jsx';

//redux
import {
    set, setArray, shuffleArray, changeTotal, changeArray, changeLB, changeUB, changeSpeed, changeColorPrimary, changeColorSecondary, changeColorTertiary, changeColorDone,
    setToHome, setToInsert
} from '../states/SortBar-actions.js';

import './Main.css';

class Main extends React.Component {
    static propTypes = {
        arrayBar: PropTypes.array,
        arrayStr: PropTypes.string,
        lowerBound: PropTypes.number,
        upperBound: PropTypes.number,         
        total: PropTypes.number,
        sorted: PropTypes.bool,
        speed: PropTypes.number,
        color: PropTypes.object,
        algo: PropTypes.string,
        algoClosedSym: PropTypes.string,
        algoOpenedSym: PropTypes.string,
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props)

        this.toggleAlgo = this.toggleAlgo.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
        this.toggleSetting = this.toggleSetting.bind(this);
        this.toggleMode = this.toggleMode.bind(this);

        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeArrText = this.onChangeArrText.bind(this);
        this.onChangeSliderOne = this.onChangeSliderOne.bind(this);        
        this.onChangeSliderTwo = this.onChangeSliderTwo.bind(this);
        this.onChangeColorPrimary = this.onChangeColorPrimary.bind(this);
        this.onChangeColorSecondary = this.onChangeColorSecondary.bind(this);
        this.onChangeColorTertiary = this.onChangeColorTertiary.bind(this);
        this.onChangeColorDone = this.onChangeColorDone.bind(this);

        this.fillColor = this.fillColor.bind(this);
        this.fillColorWithVal = this.fillColorWithVal.bind(this);

        this.randomize = this.randomize.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.set = this.set.bind(this);
        this.changeSpeed = this.changeSpeed.bind(this);

        this.changeToInsert = this.changeToInsert.bind(this);
    }

    render() {
        const {arrayBar, arrayStr, lowerBound, upperBound, total, sorted, speed, color, algo, algoClosedSym, algoOpenedSym} = this.props;

        return (
            <Router>
                <div className='main'>                    
                    <div className='left'>
                        <button className='navBut' id='leftButt' onClick={() => this.toggleAlgo()}>{algoClosedSym}</button>
                        {
                            algo == 'insert' && 
                            <div className='navButSubtitle'>
                                Insertion Sort
                            </div>
                        }
                        
                        <div className='vertLine hiddenLeft'>&nbsp;</div>
                        <Link to='/insertion-sort' onClick={() => this.changeToInsert()}>
                            <div className="btnContainer">
                                <div className='insert hiddenLeft'>
                                    <button className='algoBut'>I.S</button>
                                </div>
                                <span className='insertTitle'>Insertion Sort</span>
                            </div>
                        </Link>

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
                                    <button className='speedBut' value='0.25' onClick={(e) => this.changeSpeed(e)}>0.25x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut' value='0.5' onClick={(e) => this.changeSpeed(e)}>0.5x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut activeSpeed' value='1' onClick={(e) => this.changeSpeed(e)}>1x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut' value='1.5' onClick={(e) => this.changeSpeed(e)}>1.5x</button>
                                    <div className='horLine'>&nbsp;</div>
                                    <button className='speedBut' value='2' onClick={(e) => this.changeSpeed(e)}>2x</button>
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
                                <div className='colorInputContainer'>
                                    <input type="color" id="head" name="color" value={color.primary} className="colorInput" onChange={(e) => this.onChangeColorPrimary(e)} />    
                                    <div className="textContainer">
                                        <label for="head" className="colorLabel"><span className="dash">-</span>Base Color</label>
                                    </div>
                                    <br />
                                    <input type="color" id="head" name="color" value={color.secondary} className="colorInput" onChange={(e) => this.onChangeColorSecondary(e)} />
                                    <div className="textContainer">
                                        <label for="head" className="colorLabel"><span className="dash">-</span>Selected (1) Color</label>
                                    </div>
                                    <br />    
                                    <input type="color" id="head" name="color" value={color.tertiary} className="colorInput" onChange={(e) => this.onChangeColorTertiary(e)} />
                                    <div className="textContainer">
                                        <label for="head" className="colorLabel"><span className="dash">-</span>Selected (2) Color</label>
                                    </div>
                                    <br />                                                                    
                                    <input type="color" id="head" name="color" value={color.done} className="colorInput" onChange={(e) => this.onChangeColorDone(e)} />
                                    <div className="textContainer">
                                        <label for="head" className="colorLabel"><span className="dash">-</span>Finished Color</label>                                                                
                                    </div>
                                </div>
                            </div>

                            <div className='modeContainer'>
                                <p className='SettingTitle'>Mode</p>
                                <div className="switchContainer">
                                    <div className='switch'>
                                        <input type="checkbox" onClick={() => this.toggleMode()} />
                                        <span class="slider round"></span>
                                    </div>
                                    <label className="switchLabel">Light/Dark Mode</label>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>

                <Route exact path="/" render={() => (                    
                        <Home />                        
                )}/>
                <Route exact path="/insertion-sort" render={() => (                    
                        <InsertionSort />                        
                )}/>                
            </Router>
        )
    }

    toggleAlgo() {
        const arrHidden = document.getElementsByClassName('hiddenLeft');
        const button = document.getElementById('leftButt');

        if(this.props.algo !== 'home' && button.innerHTML == this.props.algoOpenedSym) {
            window.location.href = '/'; 
            return
        }        

        button.textContent = button.textContent == `${this.props.algoClosedSym}` ? `${this.props.algoOpenedSym}` : `${this.props.algoClosedSym}`;
        if(button.textContent == this.props.algoOpenedSym && this.props.algo !== 'home') document.getElementById('leftButt').innerHTML = this.props.algoOpenedSym;

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

    toggleMode() {
        const bodyDOM = document.body;
        bodyDOM.classList.toggle('dark-theme');
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

    onChangeColorPrimary(e) {
        this.props.dispatch(changeColorPrimary(e.target.value));
    }

    onChangeColorSecondary(e) {
        this.props.dispatch(changeColorSecondary(e.target.value));
    }
    
    onChangeColorTertiary(e) {
        this.props.dispatch(changeColorTertiary(e.target.value));
    }
    
    onChangeColorDone(e) {
        this.props.dispatch(changeColorDone(e.target.value));
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
        const wrapper = document.getElementById("movesWrapper");
        wrapper.style.display = 'none';
        
        this.props.dispatch(setArray(this.props.lowerBound, this.props.upperBound, this.props.total));
    }

    shuffle() {     
        const wrapper = document.getElementById("movesWrapper");
        wrapper.style.display = 'none';
        
        this.props.dispatch(shuffleArray(this.props.arrayBar));
    }

    set() {
        const comma = this.props.arrayStr.split(',');
        const space = this.props.arrayStr.split(' ');
        const arr = comma.length > space.length ? comma : space;
        const sep = comma.length > space.length ? ',' : ' ';

        const min = Math.min.apply(null, arr);
        const max = Math.max.apply(null, arr);

        const wrapper = document.getElementById("movesWrapper");
        wrapper.style.display = 'none';        

        this.props.dispatch(set(arr, min, max, sep));
        this.fillColorWithVal(min, max);
    }

    changeSpeed(e) {
        const speedBut = document.getElementsByClassName('speedBut');
        for(let item of speedBut)
            item.className = 'speedBut';

        e.target.className = 'speedBut activeSpeed';
        this.props.dispatch(changeSpeed(Number(e.target.value)));
    }

    changeToInsert() {        
        const arrHidden = document.getElementsByClassName('hiddenLeft');
        for(let item of arrHidden) {                          
            let itemClassArr = item.className.split(' ');
            item.className = `${itemClassArr[0]} hiddenLeft`;
        }         

        this.props.dispatch(setToInsert());        

        const button = document.getElementById('leftButt');
        button.textContent = `${this.props.algoClosedSym}`;
    }
}

export default connect(state => ({
    ...state.sortBar,
    ...state.algo,
}))(Main);