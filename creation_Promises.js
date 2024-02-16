// It is very simple to create a promise

function createPromise(){
    return new Promise(function exec(resolve, reject) {
        console.log("Inside promise Object");
        resolve("Done");
    });
}

let p = createPromise(); // return promise object is stored in variable p



