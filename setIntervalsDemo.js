// HOF ( Higher Order Function)

let counter = 0;

let x = setInterval(function exec() {
    counter++;
    console.log("hi");
    if(counter > 3){
        clearInterval(x);
    }
}, 3000);

console.log(typeof(x));

console.log(x);