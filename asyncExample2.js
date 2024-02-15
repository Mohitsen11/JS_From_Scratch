console.log("Hello World 2!");

setTimeout(function exec() {
    console.log("Time done2!");
}, 0);

for(let i=0; i<1000000000; i++){
    // time taken maybe 8-9 sec
}

console.log("End 2!");