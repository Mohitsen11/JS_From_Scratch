// How can we consume promises

function createPromise(){
    return new Promise(function exec(resolve, reject) {
        setTimeout(function exec() {
            console.log("Timer done!");

            resolve("Done");
        }, 1000);
    });
}

function createPromise1(){
    return new Promise(function exec(resolve, reject) {
        console.log("New timer Done!");
        resolve("Done1");
    })
}

setTimeout(function exec(){
    console.log("This timer is done also");
}, 0);

let p = createPromise1();

p
.then(function fulfillHandler(val) {
    console.log("We are fulfilling this handler with value ", val);
    console.log("Promise object is ", p);
},
    function rejectionHandler(val) {
    console.log("We are rejecting the handler with value ", val);
    console.log("Promise object is ", p);
    }
);

for(let i=0; i<100000000; i++){
    // some task
}

console.log("End!");

// Note :- when event loop has a choice to execute whether eventQueue functions or microTask Queue function it will always prioritize microTask queue function to execute first then after it takes callback/even Queue functions for executions 