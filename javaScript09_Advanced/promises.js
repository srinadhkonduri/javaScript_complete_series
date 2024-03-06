// fetch('https://google.com').then().catch().finally()

// there are three types of promises 
// 1 . then , 2 . catch , 3 . finally

// promises has two variables resolve and reject 
// do an asyn task 
// db calls , cryptography calls ,network calls
// .then is directly has connection to resolve
// here while running the code only one function is called 
// because here the is not competed connected to the resolve function
// to connect the function of then we should call the resolve function()


// promise one 
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async is called after one second");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise completed");
})


// PROMISE TWO  
// promise ke andhar hamesha function likna jaruri hai
// kuki vahi exegute hota hai 
// here we dont need to call the then function by using promise keyword
// we need print the message after one second
// we need to call resolve function to connect both resovle and then
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2")
        resolve();
    }, 1000);
}).then(function(){
    console.log("async task 2 is running here")
})


// PROMISE THREE
// in promise three we are creating objects in resolve function

const promiseThree = new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("promise three is exeguting")
            resolve({
                name : "srinadh",
                email : "srinadh@gmail.com",
                age : 21,
                village : "chowtapaleam"
            })
        }, 1000);
})

// for taking object as inputs in resolve method we can give any name in the function for consoling.log it prints the parameters in the resolve
promiseThree.then(function(user){
    console.log(user)
})


// PROMISE FOUR
// using both resolve and reject


const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                name : "srinadh",
                age : 21
            })
        } else {
            reject("something went wrong");
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.name
}).then((name) => {
    console.log(name)
    // The callback to execute when the Promise is rejected.(for cathch)
}).catch((error) => {
    console.log(error);
    // here finally is a default condition it is exeguted everytime
    // The callback to execute when the Promise is settled (fulfilled or rejected).
}).finally(() => {
    console.log("the promise is either resolved or rejected")
})




// PROMISE FIVE USING ASYNC FUNCTION
const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                name : "srinadh",
                age : 21
            })
        } else {
            reject("js went wrong");
        }
    }, 1000);
})

async function consumerPromiseFive() {
    try {
    const respone = await promiseFive
    console.log(respone)
    } catch (error) {
        console.log(error)
    }
}
consumerPromiseFive()


async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }

getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    // here respone is the user input as per the programmer
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))