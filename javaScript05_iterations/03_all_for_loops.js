// for of loop in js 

// [{},{},{}]
const array = [1,2,3,4,5,6,]
for (const num of array) {
    // console.log(num)
}


const greeting = "hello world"
for (const greet of greeting) {
    // console.log(`each value is ${greet}`)
}


// maps in js 
// maps are used to strore unique values in javaScript

const target = new Map()
// here map only stores unique values in it

// here map contains both key and values but only unique elements
target.set('india' , "ap")
target.set('usa','boston')
target.set('south korea','seoul')
target.set('south korea','seoul')
// console.log(target)

for (const [key  , values ] of target) {
    // console.log(key + " " + values)
}

// maps are iterataabale but objects are not 
// there are some other objects for iterating objects


// for in loop for objects
const objects = {
    name : "srinadh",
    age : 21,
    place : "kdkr"
}

for (const value in objects) {
    // console.log(objects)
}


// for iterating an array directly we can use for each loop
// in the array for each loop uses a function without an 
// argument name in it and iterarates through the array

const myArray = ["java","c","python","ruby","html"]
// created array . foreach inside create a function in it
// with a name and console log it 
myArray.forEach(function (value){
    // console.log(value)
})

// if we are using an arrow symbol we do not return a function in it

// syntax = forEach((value) => {
        // console.log(output)
// })
// in foreach the only parameter is not item it can acces 
// index and total array which is created


myArray.forEach((item , index , array) => {
    // console.log(item,index,array)
})

myArray.forEach((item) => {
    // console.log(item)
})


// accesing multiple values in objects by using foreach loop
// for creating multiple objects one by one below an 
// object at first we need to create an array instance in
// the object
const values = [
    {
        language : "java",
        filename : "srinadh"
    },
    {
        language: "python",
        filename: "srinadh1"
    },
    {
        language: "c",
        filename: "srinadh2"
    },
    {
        language: "javascript",
        filename: "srinadh3"
    }
]


// we can access all these objects by using for each loop

values.forEach((srinadh) => {
    console.log(srinadh.language)
    console.log(srinadh.filename)
})