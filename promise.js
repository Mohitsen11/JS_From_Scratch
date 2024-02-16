// We use promises to instead of callbacks to avoid callback hell and inversion control problem ( we give a function as an argument to another function which controls this passed function )

// So promises came into the picture

// there is a in-built class of promise so we just have to make an object of promise to use it.

function promiseBasedFunction(){
    return new Promise(function exec(resolve, reject) {
        setTimeout(function exec() {
            console.log("Timer done!");

            resolve("done!"); // it is for promise status that it is successfully executed 
        }, 1000);
    });
}

let p = promiseBasedFunction(); // p will store the returned promise object 

// but the status of the promise will be pending until the time consuming piece of code doesn't get executed 

// after successful execution of that exec function inside the setTimeout it's status will be fulfilled

// We can use this promise object to register future function to be executed after the promise's successful execution

p
.then(function exec(val) {
    console.log("Promise is successfully executed ", val); // this val is argument of resolve function
})
.catch(function exec(val) {
    console.log("Error occurred in execution of promise ", val);
})
.finally(function exec() {
    console.log("Everything went well!!");
})

for(let i=0; i<100000000; i++){

}