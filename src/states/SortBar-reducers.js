import {randomNumberGenerator} from '../utilities/RandomNumberGen.js';
import {shuffleArray} from '../utilities/NumberShuffler.js';

const initSortBarState = {
    arrayBar: [],
    arrayStr: '',
    lowerBound: 100,
    upperBound: 500,
    total: 10,
    sorted: false,
    speed: 1,
    color: {
        primary: '#BBECFF',
        secondary: '#FF7878',
        tertiary: '#FFD83E',
        done: '#88FFB8'
    }
}

export function sortBar(state = initSortBarState, action) {
    switch (action.type) {
        case '@SORT_BAR/SET':       
            return {
                ...state,
                arrayBar: action.arr.map(val => parseInt(val)),
                arrayStr: action.arr.join(action.separator),
                lowerBound: action.start,
                upperBound: action.end,                                
                total: action.arr.length,
                sorted: false,
            };        
        case '@SORT_BAR/SET_ARRAY':
            const arr = randomNumberGenerator(action.start, action.end, action.num);
            return {
                ...state,
                arrayBar: arr,
                arrayStr: arr.join(','),
                lowerBound: action.start,
                upperBound: action.end,                
                total: action.num,
                sorted: false,                  
            };
        case '@SORT_BAR/SHUFFLE_ARRAY':
            const shuffledArr = shuffleArray(action.arr);
            return {
                ...state,
                arrayBar: shuffledArr,
                arrayStr: shuffledArr.join(','),
                sorted: false,
            };        
        case '@SORT_BAR/CHANGE_TOTAL':            
            return {
                ...state,
                total: action.val
            };
        case '@SORT_BAR/CHANGE_ARRAY':
            return {
                ...state,
                arrayStr: action.val
            };
        case '@SORT_BAR/CHANGE_LB':
            return {
                ...state,
                lowerBound: action.val
            };
        case '@SORT_BAR/CHANGE_UB':
            return {
                ...state,
                upperBound: action.val
            }; 
        case '@SORT_BAR/CHANGE_SPEED':
            return {
                ...state,
                speed: action.val
            }
        case '@SORT_BAR/CHANGE_COLOR_PRIMARY':
            return {
                ...state,
                color: {
                    ...state.color,
                    primary: action.color
                }                    
            };     
        case '@SORT_BAR/CHANGE_COLOR_SECONDARY':
            return {
                ...state,
                color: {
                    ...state.color,
                    secondary: action.color
                }                    
            };
        case '@SORT_BAR/CHANGE_COLOR_TERTIARY':
            return {
                ...state,
                color: {
                    ...state.color,
                    tertiary: action.color
                }                    
            };
        case '@SORT_BAR/CHANGE_COLOR_DONE':
            return {
                ...state,
                sorted: true,
                color: {
                    ...state.color,
                    done: action.color
                }                    
            };      
        case '@SORT_BAR/CHANGE_COLOR_DONE':
            return {
                ...state,
                sorted: true,
                color: {
                    ...state.color,
                    done: action.color
                }                    
            };       
        case '@SORT_BAR/CHANGE_TO_SORTED':
            return {
                ...state,
                sorted: true,                
            };                                                                        
        default:
            return state;        
    }
}

const initAlgoState = {
    algo: 'home',
    algoClosedSym: '+',
    algoOpenedSym: '-'
}

export function algo(state = initAlgoState, action) {
    switch (action.type) {
        case '@ALGO/SET_TO_HOME':       
            return {
                algo: 'home',
                algoClosedSym: '+',
                algoOpenedSym: '-',
            };
        case '@ALGO/SET_TO_INSERT':       
            return {
                algo: 'insert',
                algoClosedSym: 'I.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            };
        case '@ALGO/SET_TO_SELECT':       
            return {
                algo: 'select',
                algoClosedSym: 'S.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            }; 
        case '@ALGO/SET_TO_BUBBLE':       
            return {
                algo: 'bubble',
                algoClosedSym: 'B.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            }; 
        case '@ALGO/SET_TO_QUICK':       
            return {
                algo: 'quick',
                algoClosedSym: 'Q.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            };    
        case '@ALGO/SET_TO_MERGE':       
            return {
                algo: 'merge',
                algoClosedSym: 'M.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            }; 
        case '@ALGO/SET_TO_HEAP':       
            return {
                algo: 'heap',
                algoClosedSym: 'H.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            };
        case '@ALGO/SET_TO_RADIX':       
            return {
                algo: 'radix',
                algoClosedSym: 'R.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            }; 
        case '@ALGO/SET_TO_BUCKET':       
            return {
                algo: 'bucket',
                algoClosedSym: 'B.S',
                algoOpenedSym: '<i class="fas fa-home"></i>',
            };                                                                                                
        default:
            return state;        
    }
}