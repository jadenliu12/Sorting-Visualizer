import {randomNumberGenerator} from '../utilities/RandomNumberGen.js';
import {shuffleArray} from '../utilities/NumberShuffler.js';

const initSortBarState = {
    arrayBar: [],
    arrayStr: '',
    lowerBound: 100,
    upperBound: 500,
    total: 10,
    color: '#BBECFF'
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
            };        
        case '@SORT_BAR/SET_ARRAY':
            const arr = randomNumberGenerator(action.start, action.end, action.num);
            return {
                ...state,
                arrayBar: arr,
                arrayStr: arr.join(','),
                lowerBound: action.start,
                upperBound: action.end,                
                total: action.num
            };
        case '@SORT_BAR/SHUFFLE_ARRAY':
            const shuffledArr = shuffleArray(action.arr);
            return {
                ...state,
                arrayBar: shuffledArr,
                arrayStr: shuffledArr.join(','),
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
        case '@SORT_BAR/CHANGE_COLOR':
            return {
                ...state,
                color: action.color,
            };            
        default:
            return state;        
    }
}