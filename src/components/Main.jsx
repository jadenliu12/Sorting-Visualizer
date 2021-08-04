import { Button } from 'bootstrap';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Home from './Home.jsx';

import './Main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props)

        this.toggleAlgo = this.toggleAlgo.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
    }

    render() {
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
                            <button className='inSetBut' onClick={() => this.toggleInput()}>In</button>
                        </div>                            

                        <div className='vertLine hiddenRight'>&nbsp;</div>
                        <div className='settings hiddenRight'>
                            <button className='inSetBut'><i class="fas fa-cog"></i></button>
                        </div>

                        <div className='inputContainer hiddenIn'>
                            <div className='numOfInContainer'>
                                <p className='inputTitle'>Number of Inputs</p>                                
                                <input type='number' className='numOfInput' min='1' />
                            </div>                            

                            <div className='inContainer'>
                                <p className='inputTitle'>Inputs <span className='inputSubTitle'>(Separated by ',' or ' ')</span></p>
                                <textarea className='inputArea'></textarea>
                                <button className='inputBut'>RANDOMIZE!</button>
                                <button className='inputBut'>SHUFFLE!</button>
                            </div>

                            <div className='speedContainer'>
                                <p className='inputTitle'>Speed</p>
                                <div className='butContainer'>
                                    <button className='speedBut'>0.25x</button>
                                    <button className='speedBut'>0.5x</button>
                                    <button className='speedBut'>1x</button>
                                    <button className='speedBut'>1.5x</button>
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

        for(let item of arrHidden) {                          
            item.classList.toggle('showIn');
        }         
    }    
}