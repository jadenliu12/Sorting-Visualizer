import {randomNumberGenerator} from '../utilities/RandomNumberGen';

const initSortBarState = {
    arrayBar: [],
    total: 0
}

export function sortBar(state = initSortBarState, action) {
    switch (action.type) {
        case '@SORT_BAR/SET_ARRAY':
            return {
                arrayBar: randomNumberGenerator(action.start, action.end, action.num),
                total: action.num
            };
        default:
            return state;        
    }
}