var count = 0;
function *generatorFunc() {
    while(true) {
        yield count++;
    }
}

const genFunc = generatorFunc();
console.log(genFunc.next()); // 1
console.log(genFunc.next()); // 2