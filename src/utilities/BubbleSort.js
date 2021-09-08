export function bubbleSort(arr, n) {
    const animations = [];

    //Outer loop goes from 0 until n-1
    for(var i = 0; i < n; i++) {       
        //Loop from 0 until n-i-1, because the last i index are already sorted         
        for(var j = 0; j < (n-i-1); j++){
            //Check if index j is greater than index j+1
            animations.push({arr: [j, j+1], message: `Compare ${arr[j]} with ${arr[j+1]}`, color: true});                
            animations.push({arr: [j, j+1], message: `Compare ${arr[j]} with ${arr[j+1]}`, color: false});              
            if(arr[j] > arr[j+1]){
                //Swap if it is greater
                animations.push({arr: [j, arr[j+1]], message: `Swap ${arr[j]} with ${arr[j+1]}`});
                animations.push({arr: [j+1, arr[j]], message: `Swap ${arr[j]} with ${arr[j+1]}`});                
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
        animations.push({arr: [n-i-1], message: `Set ${arr[n-i-1]}`, color: true})
    }    
    return animations
}