export function setArray(start, end, num) {
    return {
        type: '@SORT_BAR/SET_ARRAY',
        start, 
        end,
        num,
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