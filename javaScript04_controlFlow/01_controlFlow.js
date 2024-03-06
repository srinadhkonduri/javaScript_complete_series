// if

if(2==2){
    // console.log("both are same")
} else{
    // console.log("both are not same")
}

// operators = > < >= <= != == ===

// block scope in conditionals

const score = 50
if(score > 45){
    const power = "fly"
    // console.log("score is greater")
    // console.log(`here the score is greater then user can ${power}`)
} else{
    // console.log("score is not greater")
}


// implicity scope in javascript 

const balance = 1000
if (balance < 500) {
//     console.log("your balance is less than 500")
} else if (balance < 750){
//     console.log("your balance is more than 750")
} else{
//     console.log("youe balance is leess than 1200")
}


// real life example of if and else condition

const ifUserLoggedIn = true
const debitCard = true
// using and condition checking the both the conditions 
// if they are true
if(ifUserLoggedIn && debitCard){
    // console.log("allow to do shopping")
} else{
    // console.log("not allowed to do shopping")
}


// or symbol
const loggedFromGoogle = false
const loggedFromGmail = true
if(loggedFromGmail || loggedFromGoogle){
    // console.log("allow to do work")
} else{
    // console.log("not allowed to do work")
}


// using switch case and checking the month 
const month = 3
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        // console.log("mar")
        break;
    case 4:
        console.log("apr")
        break;
    case 5:
        console.log("may")
        break;

    default:
        break;
}



// control flow in strings 
// in strings there is an empty string it takes as false value
// in strings if there is some value it takes as true value
const email = "alluarjun@gmail.com"
// empty string value is also taken as true
const mails = []
if(mails){
    // console.log("email is present")
} else{
    // console.log("email is not present")
}


// falsy values
// false 0 -0 "" undefined NaN bigint 0n

// truthy values

// "0" 'false' "" [] {} function() {} 

// false as returned as truye because it is present in the strings


// checking wheather the object is empty or not
const myObject = {
    // inside the object everything we write are called keys
    name :"srinadh",
    age : 20
}
if (Object.keys(myObject).length === 0) {
    // console.log("object is empty")
}else{
    // console.log("object is not empty")
}


// nullish coalescing operator ?? null or undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? undefined
// console.log(val1)


// ternary operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80")