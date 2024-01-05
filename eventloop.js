/**
 * Event Loop : The event loop is the secret behind JavaScript’s asynchronous programming. 
 * JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading
 */
function eventloop() {
    console.log("I am first");
    setTimeout(() => {
        console.log("I am last always"); // browser api
    }, 1000);
    console.log('I am second')
}

eventloop();