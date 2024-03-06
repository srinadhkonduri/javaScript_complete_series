const num = [1,2,3,4,5,6,7]
// filter is used to returns the element of the array which
// meets the condition in callback function
const nums = num.filter( (item) => {
    console.log(item)
} )

console.log(nums)


const number = [1,2,3,4,5,6,7,8,9]
const numbers = number.forEach( (values) => {
    console.log(values)
    return values > 4
} )

console.log(numbers)


// using filter in the best way
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]


// accesing a data from a particular database
const nameOfBook = books.filter( (bk) => {bk.genre >= 2000})

// if we want to create a variable that is used before 
// we can use it without declaring a  datatype 
// this is called variable overriding

// { special case
// nameOfBook = books.filter( (bk) => bk.publish >= '1999' )
// }
console.log(nameOfBook);