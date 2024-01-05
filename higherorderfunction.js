/**
 * Higher Order Function 
 * A higher order function is a function that takes a function as an argument, or returns a function
 */
const mulitplier = (factor) => {
    return function(number) {
        factor * number;
    }
}

const two_multiplier = mulitplier(2);

console.log(two_multiplier(5)) // 10

const three_multiplier = mulitplier(3);

console.log(two_multiplier(5)) // 15