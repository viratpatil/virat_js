/**
 * Generator Functions
 * Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances
 */
var count = 0;
function *generatorFunc() {
    while(true) {
        yield count++;
    }
}

const genFunc = generatorFunc();
console.log(genFunc.next()); // { value: 0, done: false }
console.log(genFunc.next()); // { value: 1, done: false }