const binarySearch = function (arr, x){
    let s = 0;
    let h = arr.length - 1;

    while( s<= h){
        let mid = s + Math.floor((h-s)/2);

        if(arr[mid] === x) return mid;
        else if(arr[mid] < x){
            s = mid +1;
        } else {
            h = mid -1;
        }
    }

    return undefined;
}

export default binarySearch; // default exporting