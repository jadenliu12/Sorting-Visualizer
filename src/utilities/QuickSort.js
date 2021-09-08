import { setArray } from "../states/SortBar-actions";

function partition(arr, left, right, animations) {
    var pivot = Math.floor((right + left) / 2); //Middle index value
    var i = left; //Left pointer
    var j = right; //Right pointer
    
    animations.push({arr: [pivot], message: `Set ${arr[pivot]} as pivot`});

    //Loop until i is greater than j
    while (i <= j) {
        //Find the index on the left where the value is smaller than the pivot
        animations.push({arr: [i], message: `Compare ${arr[i]} with pivot`, color: true});
        while (arr[i] < arr[pivot]) {
            animations.push({arr: [i], message: `Compare ${arr[i]} with pivot`, color: false});
            i++;
            animations.push({arr: [i], message: `Compare ${arr[i]} with pivot`, color: true});
        }

        //Find the index on the right where the value is bigger than the pivot
        animations.push({arr: [j], message: `Compare ${arr[j]} with pivot`, color: true});
        while (arr[j] > arr[pivot]) {
            animations.push({arr: [j], message: `Compare ${arr[j]} with pivot`, color: false});
            j--;
            animations.push({arr: [j], message: `Compare ${arr[j]} with pivot`, color: true});
        }

        //Swap if index i is on the left of index j
        if (i <= j) {            
            animations.push({arr: [i, arr[j]], message: `Swap ${arr[i]} with ${arr[j]}`});
            animations.push({arr: [j, arr[i]], message: `Swap ${arr[i]} with ${arr[j]}`});
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;            
            i++; j--;
        }
    }
    return i;
}

export function quickSort(arr, start, end, animations) {        
    console.log(arr, start, end);
    if (arr.length > 1) {
        //Parition the array and get the index return
        var index = partition(arr, start, end, animations); 
        console.log(index);

        //more elements on the left side of the pivot
        if (start < index - 1) {
            quickSort(arr, start, index - 1, animations);
        }

        //more elements on the right side of the pivot
        if (index < end) { 
            quickSort(arr, index, end, animations);
        }
    }    
}