export function selectionSort(arr, n) {  
    const animations = [];

    //Outer loop goes from 0 to n-1      
    for(let i = 0; i < n; i++) {
        // Finding the index of the smallest number in the subarray
        animations.push({arr: [i], message: `Set ${arr[i]} as min`});
        let min = i;
        for(let j = i+1; j < n; j++) {
            animations.push({arr: [j], message: `Compare ${arr[min]} with ${arr[j]}`, color: true});                
            animations.push({arr: [j], message: `Compare ${arr[min]} with ${arr[j]}`, color: false});                
            if(arr[j] < arr[min]) {                
                animations.push({arr: [min, j], message: `Change ${arr[min]} with ${arr[j]}`});
                min=j; 
            }
         }

         //Swap the smallest number to index i, if it is not the same index
         if (min != i) {        
            animations.push({arr: [i, arr[min]], message: `Swap ${arr[i]} with ${arr[min]}`, color: true});
            animations.push({arr: [min, arr[i]], message: `Swap ${arr[i]} with ${arr[min]}`, color: false});
            let tmp = arr[i]; 
            arr[i] = arr[min];
            arr[min] = tmp;      
        }
    }
    return animations;
}