function doMerge(arr, left, mid, right, fakeArr, animations) {
    let k = left;
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        animations.push({arr: [i, j], message: `Compare ${fakeArr[i]} with ${fakeArr[j]}`, color: true});                
        animations.push({arr: [i, j], message: `Compare ${fakeArr[i]} with ${fakeArr[j]}`, color: false});   

      if (fakeArr[i] <= fakeArr[j]) {
        animations.push({arr: [k, fakeArr[i]], message: `Change ${fakeArr[k]} with ${fakeArr[i]}`});
        arr[k++] = fakeArr[i++];
      } else {
        animations.push({arr: [k, fakeArr[j]], message: `Change ${fakeArr[k]} with ${fakeArr[j]}`});
        arr[k++] = fakeArr[j++];
      }
    }
    while (i <= mid) {

        animations.push({arr: [i, i], message: `Compare ${fakeArr[i]} with ${fakeArr[i]}`, color: true});                
        animations.push({arr: [i, i], message: `Compare ${fakeArr[i]} with ${fakeArr[i]}`, color: false}); 

        animations.push({arr: [k, fakeArr[i]], message: `Change ${fakeArr[k]} with ${fakeArr[i]}`});
        arr[k++] = fakeArr[i++];
    }
    while (j <= right) {

        animations.push({arr: [j, j], message: `Compare ${fakeArr[j]} with ${fakeArr[j]}`, color: true});                
        animations.push({arr: [j, j], message: `Compare ${fakeArr[j]} with ${fakeArr[j]}`, color: false}); 

        animations.push({arr: [k, fakeArr[j]], message: `Change ${fakeArr[k]} with ${fakeArr[j]}`});
        arr[k++] = fakeArr[j++];
    }
}  

function mergeSortHelper(arr, left, right, fakeArr, animations) {
    if (left === right) return;
    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(fakeArr, left, mid, arr, animations);
    mergeSortHelper(fakeArr, mid + 1, right, arr, animations);
    doMerge(arr, left, mid, right, fakeArr, animations);
}


export function mergeSort(arr, animations) {
    if (arr.length <= 1) 
        return arr;
    const fakeArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, fakeArr, animations);
    return animations;
}