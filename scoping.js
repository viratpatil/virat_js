/**
 * let var const
 * In JavaScript, you can declare variables with the var, let, and const keywords
 * Differences
 * 1. var declarations are globally scoped or function scoped while let and const are block-scoped.
 * 2. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
 * 3. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
 * 4. While var and let can be declared without being initialized, const must be initialized during declaration
 */

var number = 50 // Globally Scoped

function print() {
    var square = number * number
    console.log(square)
}
  
console.log(number)

function print() {
    var num = 50
    var square = num * num
    console.log(square) // Block Scoped
}

var number = 100; // var can be reassigned

// let reassignment

// let value = 10; // uncomment and verify
// let value = 20; // let cannot be reassigned

