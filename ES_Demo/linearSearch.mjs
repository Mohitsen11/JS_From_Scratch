export const linearSearch = function (arr,x) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x) return i;
    }

    return undefined;
}

