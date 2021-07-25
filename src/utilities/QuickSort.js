function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]; //Middle index value
    var i = left; //Left pointer
    var j = right; //Right pointer

    //Loop until i is greater than j
    while (i <= j) {
        //Find the index on the left where the value is smaller than the pivot
        while (items[i] < pivot) {
            i++;
        }
        //Find the index on the right where the value is bigger than the pivot
        while (items[j] > pivot) {
            j--;
        }

        //Swap if index i is on the left of index j
        if (i <= j) {            
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;            
            i++; j--;
        }
    }
    return i;
}

export function quickSort(arr, n, start, end) {    
    if (n > 1) {
        //Parition the array and get the index return
        var index = partition(arr, start, end); 

        //more elements on the left side of the pivot
        if (start < index - 1) {
            quickSort(arr, start, index - 1);
        }

        //more elements on the right side of the pivot
        if (index < end) { 
            quickSort(arr, index, end);
        }
    }
    return arr;
}