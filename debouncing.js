/**
 * Debounce function is a javascript programming pattern for delaying execution of a function
 */

function debounceFn(fn, delay=300) {
    let timer;
    return (args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function callme() {
    console.log('I am debounced')
}

document.addEventListener(keyup, debounceFn(() => callme(), 1000));