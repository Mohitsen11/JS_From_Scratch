// Generator object is returned by the generator function.

// we make generator function using (function*)

function* fetchNextElement(){
    yield 1;
    yield 2;
    console.log("I'm in the middle");
    yield 3;
    yield 4;
}

let iter = fetchNextElement(); // we need a iterator for execution of the generator function ( returned generator object {})

// console.log(iter);

// now for the execution of this generator function we use iter.next() method

console.log("First ", iter.next());
console.log("Second ", iter.next());
console.log("Third ", iter.next());
console.log("Fourth ", iter.next());
console.log("Fifth ", iter.next());
