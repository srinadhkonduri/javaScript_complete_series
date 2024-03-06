// objects can be defined in two ways 
// singleton classes and objects using {}

// creating a symbol using symbol syntax
const mySymbol = Symbol("srinadh")
const myObj = {
    name : "srtinadh",
    age : 20,
    // here this is the syntax to accesss the key and symbols
    [mySymbol] : "srinadh",
    gmail : "srinadh@gmail.com",
    "place" : "chowtapaleam",
    state : "andhrapradesh",
    isLoggedIn : ["monday","wednesday","friday"],
    isLoggedOff : false
}

// by using this syntax we can access this syntax og my symbol
// console.log(myObj[mySymbol])

// if key is declared in string and we can access it in the 
// string format using brackets

// console.log(myObj["place"])
// console.log(myObj)

// refernce an object using this keyword 

myObj.greeting = function () {
    // console.log("hi this is srinadh ")
}

myObj.greetingTwo = function () {
    // console.log(`hi this srinadh and his email id is ${this.gmail}`)
} 


// for accesing the creawted functios we can use the following 
// functions methods and call the methods 

// console.log(myObj.greeting())
// console.log(myObj.greetingTwo())


// part 2 of objects 

const tinderUser = new Object() // this is a singleton object

const tinderUser2 = {} // tjhis is a non singleton object

tinderUser2.id = "srinadh@gmail.com"
tinderUser2.place = "chowtapaleam"

// console.log(tinderUser2.place)
// console.log(tinderUser2)


// combining objects

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "c" , 4 : "d"}

// here obj3 combines obj1 and obj2 
const obj3 = Object.assign({}, obj1,obj2)
const obj4 = {...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)

// objects destructuring

const object = {
    name : "srinadh",
    email : "srinadh@gmail.com",
    age : 20
}

// here this is the old method to access the object classes
console.log(object.name)

// the new method for accessing for the method is 
// creating the const and array object call the wanted
// object in the array and from where do you call the object
// this method is used for calling the object simply 
const {name} =  object
console.log(name)


// {JSON = JAVASCRIPT OBJECT NOTATATION}