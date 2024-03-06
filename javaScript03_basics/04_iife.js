// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION

// IIFE function syntax =>
//  (function(){
    // write the output function
// })();

(function(){
    console.log(`db connected`)
})();

// if we wanted to run two iife functions side by side
// we need to put a semicolon before the first iife function

// if function is not used we need to defined an arrow fun
( (name) => {
    console.log(`db connected to ${name}`)
})('srinadh')

// the name exegutes here