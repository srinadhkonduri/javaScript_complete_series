var c = 200

if (true) {
    const a = 10
    let b = 20
    var c = 30
    // here it shows the output values because these are inside the scope of a declaration
    console.log(a)
}

// these three are undefined because these are out of the scope 
// console.log(a)
// console.log(b)
// console.log(c)