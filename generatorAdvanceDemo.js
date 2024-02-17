
function* fetchNextElement(){
    const x = 5;
    console.log(yield 6);
    console.log("Entering after a yield");
    const y = x + (yield 7);
    console.log("Value of y is ", y);
}

let iter = fetchNextElement();

console.log("First ", iter.next());
console.log("Second ", iter.next(100));
console.log("Third ", iter.next(10));
