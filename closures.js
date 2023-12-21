/**
 * Definition : A closure is the combination of a function bundled together (enclosed) with references 
 * to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope from an inner function
 * Closures are nothing but functions with preserved data.
 */

// value in below function would be available as mulitplier in multiplyByTwo and multiplyByThree
function multiplier(value) {
    return function (num) {
        return num * value;
    }
}

let multiplyByTwo = multiplier(2);
let multiplyByThree = multiplier(3);

console.log(multiplyByTwo(5)) // answer would be 10
console.log(multiplyByThree(5)) // answer would be 15

