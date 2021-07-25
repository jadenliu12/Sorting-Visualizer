export function bubbleSort(arr, n) {
    //Outer loop goes from 0 until n-1
    for(var i = 0; i < n; i++) {       
        //Loop from 0 until n-i-1, because the last i index are already sorted         
        for(var j = 0; j < (n-i-1); j++){
            //Check if index j is greater than index j+1
            if(arr[j] > arr[j+1]){
                //Swap if it is greater
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }    
    return arr
}