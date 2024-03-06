// for syntax
// index is strated and iterated upto 10 
// then the index is increamented
for (let index = 0; index <= 10; index++) {
    // noe assign index value to a variable you want 
    const element = index;
    // finally print the element
    // console.log(element)
    
}


// here we are assiging a array and creataing and 
// iterating it into the for loop
const array = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    // console.log(i)
    
}

// nested for loop
// printing a star pattern using nested for loop
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        // console.log("*")
    }
    // console.log(" ")
}


// printing table using nested for loop
// printing 19 th table using nested for loop
for (let i = 19; i <= 19; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(i + " * " + j + " = " +  i*j)
    }
    
}



// printing numbers from 1 to 20 using break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 10){
        console.log("detected 10")
        // while using the break case the numbers will stop
        // run upto 10 and then stop running
        break
        // while using continue the number 10 runs through 
        // given condition and remaining numbers run through
        // the given loop
        continue
    }
    console.log(`the value of i is ${i}`)
}