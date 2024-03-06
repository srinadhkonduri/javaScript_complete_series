// creating a function
function myname() {
    console.log("s")
    console.log("r")
    console.log("i")
    console.log("n")
    console.log("a")
    console.log("d")
    console.log("h")
}
// exeguting a function
myname()


// adding two numbers using function

function addTwoNumbers(num1 , num2 ){
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    // the two stars indicates the power symbol
    console.log(num1 ** num2)
    return num1 ** num2
}

// calling the function
addTwoNumbers(3 , 5)


// creating a function with parameters
function loggedIn(username){
    return `${username} just logged in`
}
console.log(loggedIn("srinadh"))




// using rest opetator in the function
function addItems(...items){
    return items
    // when return is used we should call functions by consolo.log
    // because we just returning the value not printing
    // the value
}
console.log(addItems(200,344,567))


// handling objects in functions

const user = {
    name : "srinadh",
    price : 199
}

function handleObject(anyObject){
        console.log(`the name is ${anyObject.name} and the price is ${anyObject.price}`)
}

handleObject(user)
// this is method calling created method

// now another method is calling function and making objects in it

handleObject({
    name : "srinadh",
    price : 399
})