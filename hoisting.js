/**
 * Hoisting : Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution
 * 
 */
count = 5;
function displayCount() {
    console.log(count)
}

var count; // count declaration is moved at top 

displayCount();