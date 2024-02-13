// basic question where we use functions to complete them

// check whether a number is prime or not

function isPrime(num){

    for(let i = 2; i<num; i++){
        if( num%i == 0 ){
            return false;
        }
    }

    return true;
}

let num1 = 32;

if(isPrime(num1)){
    console.log(`${num1} is Prime`);
} else{
    console.log(`${num1} is not a Prime`);
}

// print the pattern 
// when n = 4
// ****
// ****
// ****
// ****

function makePattern(value){

    for(let row=0; row<value; row++){
        let pattern = "";
        for(let col=0; col<value; col++){
            pattern += " * "
        }
        console.log(pattern);
    }
}

// calling the makePattern function
makePattern(6);

// when n = 4
// *
// **
// ***
// ****

function pattern(n){

    for(let row = 0; row<n; row++){
        let str = "";
        // loop for printing the stars
        for(let col = 0; col<row+1; col++){
            str+= " * ";
        }
        console.log(str);
    }
}

pattern(2);
pattern(4);
pattern(6);

// when n = 4;
//    *
//   **
//  ***
// ****

function pattern2(n){

    for(let row=0; row<n; row++){

        // loop for printing spaces
        let str = "";
        for(let space=0; space<n-row-1; space++){
            str+= " ";
        }
        // loop for printing stars
        for(let col=0; col<row+1; col++){
            str+= "*";
        }
        console.log(str);
    }
}

pattern2(2);
pattern2(4);
pattern2(6);

//     *
//    ***
//   *****
//  *******
// *********

function pattern3(n){

    // outer loop for printing rows
    for(let rows=0; rows<n; rows++){

        let str = "";
        let spaces = n-rows-1;
        //loop for printing spaces
        for(let k=0; k<spaces; k++){
            str+=" ";
        }

        // loop for printing stars( stars are in odd series)
        let stars = 2*rows+1;
        for(let col=0; col<stars; col++){
            str+= "*";
        }

        console.log(str);
    }
}

pattern3(5);

// *****
// ****
// ***
// **
// *

function pattern4(n){

    for(let rows=0; rows<n; rows++){

        let str = "";

        for(let col=0; col<n-rows; col++){
            str+="*";
        }
        console.log(str);
    }
}

pattern4(5);

//    *
//   ***
//  *****
//   ***
//    *

function pattern5(n){

    let value;
    if(n % 2 == 0){
        value = n/2;
    } else{
        value = n/2 + 1;
    }

    value = Math.floor(value);
    let  stars = 0;

    for(let row=0; row<value; row++){
        let str = "";
        let spaces = value-row-1;

        for(let k=0; k<spaces; k++){
            str += " ";
        }

        stars = 2*row+1;

        for(let col=0; col<stars; col++){
            str += "*";
        }

        console.log(str);
        
    }

    let newValue = n-value;

    for(let row=0; row<newValue; row++){

        let str = "";
        let spaces = row+1;

        for(let k=0; k<spaces; k++){
            str += " ";
        }

        for(let col=0; col<stars-2*row-2; col++){
            str += "*";
        }
        console.log(str);
    }

}

pattern5(7);

// we can solve pattern5 in other way too

function upperTriangle(n){
         // outer loop for printing rows
        for(let rows=0; rows<n; rows++){

        let str = "";
        let spaces = n-rows-1;
        //loop for printing spaces
        for(let k=0; k<spaces; k++){
            str+=" ";
        }

        // loop for printing stars( stars are in odd series)
        let stars = 2*rows+1;
        for(let col=0; col<stars; col++){
            str+= "*";
        }

        console.log(str);
    }
}

function lowerTriangle(n){

    for(let row=0; row<n-1; row++){

        let str = "";
        let spaces = row+1;

        for(let k=0; k<spaces; k++){
            str += " ";
        }

        let stars = 2*(n-row-1)-1;

        for(let col=0; col<stars; col++){
            str += "*";
        }

        console.log(str);

    }
}

function pattern6(n){
    upperTriangle(n);
    lowerTriangle(n);
}

pattern6(5);

// Butterfly pattern

// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *

function upperPart(n){

    for(let row=1; row<=(n-1)/2; row++){

        let str = "";
        let leftStar = row;

        for(let k=1; k<=leftStar; k++){
            str += "*";
        }

        // spaces
        let spaces = n-2*row;

        for(let k=1; k<=spaces; k++){
            str += " ";
        }

        // right stars
        let rightStar = row;
        for(let k=1; k<=rightStar; k++){
            str += "*";
        }

        console.log(str);
    }
}

function middlePart(n){

    let str = "";
    for(let i=1; i<=n; i++){
        str += "*";
    }

    console.log(str);
}

function lowerPart(n){

    for(let row=1; row<=(n-1)/2; row++){
        let str = "";
        let leftStar = (n-1)/2-row+1;

        for(let k=1; k<=leftStar; k++){
            str += "*";
        }

        // spaces
        let spaces = 2*row-1;

        for(let k=1; k<=spaces; k++){
            str += " ";
        }

        let rightStar = (n-1)/2-row+1;

        for(let k=1; k<=rightStar; k++){
            str += "*";
        }

        console.log(str);
    }
}

function pattern7(n){
    upperPart(n);
    middlePart(n);
    lowerPart(n);
}

pattern7(7);

//    1
//   121
//  12312
// 1234123

function pattern8(n){

    for(let row=1; row<=n; row++){

        let str = "";
        let spaces=n-row;
        let num = 1;

        for(let k=1; k<=spaces; k++){
            str += " ";
        }

        let value = 2*row-1;

        for(let col=1; col<=value; col++){
            if(col == row+1){
                num = 1;
            }
            str += num;
            num++;
        }
        console.log(str);
    }
}

pattern8(4);