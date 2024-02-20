const binarySearch = function (arr, value) {
    let s = 0;
    let e = arr.length - 1;

    while(s <= e){
        let mid = s + Math.floor((e - s)/2);

        if(arr[mid] === value) return mid;
        else if(arr[mid] < value){
            s = mid+1;
        } else{
            e = mid-1;
        }
    }
    return undefined;
}

module.exports = binarySearch;