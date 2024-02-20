const linearSearch = function (arr, value) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === value ) return i;
    }
    return undefined;
}

module.exports = {
    linearSearch
}