const myArr = [11,12,13,14,15,16,]
const myArr2 = ["aggipidugu","pottodu","astronaunt"]
// console.log(myArr2[2])

// array methods
// 1 . push

// add elements in the array in the last index
myArr.push(6)
// console.log(myArr)

// removes elements from the given index
myArr.pop(1)
// console.log(myArr)

// adds elements in the array in the starting index
myArr.unshift(0)
// console.log(myArr)


// Returns a copy of a section of an array. 
// For both start and end, a negative index
// can be used to indicate an offset from the end of the array. 
// For example, -2 refers to the second to last element of the array.


const myArray1 = myArr.slice(1,3)
console.log(myArray1)

// Removes elements from an array and, if necessary, 
// inserts new elements in their place, returning the
// deleted elements.


const myArray2 = myArr.splice(1,3)
console.log(myArray2)