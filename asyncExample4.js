console.log("Hello World 4!");

setTimeout(function exec() {
    console.log("Timer done!");
    setTimeout(function exec(){
        console.log("I'm in inside!");
    }, 3000);
}, 0);

for(let i=0; i<10000000; i++){
    
}

console.log("End!");