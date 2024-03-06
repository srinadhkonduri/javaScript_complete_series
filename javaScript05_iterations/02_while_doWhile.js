// while condition
let i = 0
while (i <= 10) {
    console.log(`the value if i is ${i}`)
    // we can also increament by assigning
    // i = i+1
    // we can increament directly 
    i++
}

// while condition in the array
// initialize an array
// initialize another array with zero
// using while loop run the array through its length
// print array inside myArray
// increament array 
let myArray = ["apple","banana","camel","dog","elephant"]
let array = 0 
while (array < myArray.length) {
    console.log(myArray[array])
    array = array+1
}
// while loop in js 

let number = [1,2,3,4,5,6,7]

let num = 0
while (num < number.length) {
    console.log(number[num])
    num = num + 1
}



// do while in for loop

// initialize first
let count = 0 
do {
    console.log(count) // print
    count++ // increament
} while (count<=10); // write condition