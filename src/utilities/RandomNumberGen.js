export function randomNumberGenerator(start, end, total) {
    var arr = []
    for(let i = 0; i < total; i++) {
        arr.push(Math.floor(Math.random() * (end - start + 1) + start));
    }
    return arr;
}