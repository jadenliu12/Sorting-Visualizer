export function setArray(start, end, num) {
    return {
        type: '@SORT_BAR/SET_ARRAY',
        start, 
        end,
        num,
    };
}