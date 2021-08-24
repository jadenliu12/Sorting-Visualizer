// SortBar Actions
export function set(arr, start, end, separator) {
    return {
        type: '@SORT_BAR/SET',
        arr, 
        start,
        end,
        separator,
    };
}

export function setArray(start, end, num) {
    return {
        type: '@SORT_BAR/SET_ARRAY',
        start, 
        end,
        num,
    };
}

export function shuffleArray(arr) {
    return {
        type: '@SORT_BAR/SHUFFLE_ARRAY',
        arr,
    };
}

export function changeTotal(val) {
    return {
        type: '@SORT_BAR/CHANGE_TOTAL',
        val,
    }
}

export function changeArray(val) {
    return {
        type: '@SORT_BAR/CHANGE_ARRAY',
        val,
    }
}

export function changeLB(val) {
    return {
        type: '@SORT_BAR/CHANGE_LB',
        val,
    }
}

export function changeUB(val) {
    return {
        type: '@SORT_BAR/CHANGE_UB',
        val,
    }
}

export function changeColor(color) {
    return {
        type: '@SORT_BAR/CHANGE_COLOR',
        color,
    }
}

// Algo Actions
export function setToHome() {
    return {
        type: '@ALGO/SET_TO_HOME',
    }
}

export function setToInsert() {
    return {
        type: '@ALGO/SET_TO_INSERT',
    }
}