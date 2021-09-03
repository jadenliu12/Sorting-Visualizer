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

export function changeSpeed(val) {
    return {
        type: '@SORT_BAR/CHANGE_SPEED',
        val,
    }
}

export function changeColorPrimary(color) {
    return {
        type: '@SORT_BAR/CHANGE_COLOR_PRIMARY',
        color,
    }
}

export function changeColorSecondary(color) {
    return {
        type: '@SORT_BAR/CHANGE_COLOR_SECONDARY',
        color,
    }
}

export function changeColorTertiary(color) {
    return {
        type: '@SORT_BAR/CHANGE_COLOR_TERTIARY',
        color,
    }
}

export function changeColorDone(color) {
    return {
        type: '@SORT_BAR/CHANGE_COLOR_DONE',
        color,
    }
}

export function changeToSorted() {
    return {
        type: '@SORT_BAR/CHANGE_TO_SORTED',
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