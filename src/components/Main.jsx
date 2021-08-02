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
                        <button className='navBut'>+</button>

                        <div className='vertLine hidden'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='bucket hidden'>
                                <button className='algoBut'>B.S</button>
                            </div>                            
                        </div>

                        <div className='vertLine hidden'>&nbsp;</div>
                        <div className="btnContainer">
                            <div className='bucket hidden'>
                                <button className='algoBut'>B.S</button>
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
}