// we use conditional operators when we have to change the action according to the condition

let age = 18;

// we can use if how many no. of times we want
if( age >= 18){
    console.log("You can give vote.");
}

if( age < 18){
    console.log("You can't give vote yet");
}

// ifElse 

let isUserPrime = true;
// else can not exist without if
if(isUserPrime){
    console.log("Enjoy the prime content");
} else{
    console.log("Buy a subscription to enjoy the content");
}

// ifElseifElse

let isUserVip = true;

if(isUserPrime){
    console.log("Enjoy the prime content");
} else if(isUserVip){
    console.log("Enjoy the vip content");
} else{
    console.log("Buy a subscription to enjoy the content");
}

// we can have nested if elseif 

let isUserDiscovery = true;
let isUserAccorn = true; 

if(isUserPrime){
    if(isUserDiscovery){
        if(isUserAccorn){
            console.log("Enjoy the all accorn, prime and discovey content");
        } else{
            console.log("Enjoy the prime and discovery content");
        }
    } else if(isUserAccorn){
        console.log("Enjoy the prime and accorn content");
    } else {
        console.log("Enjoy the prime content");
    }
} else{
    console.log("Buy a subcription");
}

// if can exist without else if anf else
// else if can't exist without if but can exist without else
// else if and else don't depend on each other
