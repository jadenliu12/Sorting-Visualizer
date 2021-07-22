export function insertionSort(arr, n) {
    //Outer loop goes from 1 until n-1
    for (let i = 1; i < n; i++) {
        //Temporary variables
        let cur = arr[i];
        let j = i-1; 

        //Inner loop runs until j is -1 or current number is bigger than arr[j]
        while ((j > -1) && (cur < arr[j])) {
            arr[j+1] = arr[j]; //Position bigger value number behind smaller value number
            j--;
        }

        //Final swap 
        arr[j+1] = cur;
    }
    return arr;
}