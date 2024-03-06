const myNums = [1,2,3,4,5,6,7,8]

// const value = myNums.map( (num) => {return num + 20})

const value = myNums
// in the brackets initialization is more important
// if it doesnt decalre it will throw an array
            .map( (value) => value*20)
            .map( (value) => value + 20)
            .filter( (value) => value>=40)
// console.log(value)


// reduce method in javascript

const myArray = [1,2,3,4,5,6,7,8,9]
// const result = myArray.reduce(function (acc,currval) {
//     console.log(`acc = ${acc} and currval is ${currval}` )
//     return acc + currval
// })

// if arrow function is used we dont use function keyword
const result = myArray.reduce( (acc,addition) => acc + addition,0)
console.log(result)

// applying reduce in an object a person who is doing shooping

const myObject = [
    {
        course : "java",
        price : 3499
    },
    {
        course : "javascript",
        price : 6999
    },
    {
        course : "python",
        price : 4999
    },
    {
        course : "cpp",
        price : 3999
    }
]

// add all items use a callBack function in it and 
// finally return it in after callback function

const totalPrice = myObject.reduce( (acc,item) => acc+item.price ,0)
console.log(totalPrice)
