export function selectionSort(arr, n) {  
    //Outer loop goes from 0 to n-1      
    for(let i = 0; i < n; i++) {
        // Finding the index of the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++) {
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }

         //Swap the smallest number to index i, if it is not the same index
         if (min != i) {        
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}