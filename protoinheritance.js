/**
 * Prototypical Inheritance in Javascript
 * Prototypical inheritance refers to the ability to access object properties from another object.
 */
class shape {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class circle extends shape {
    constructor(name) {
        super(name);
    }
}

var c = new circle('circle');
console.log(c.getName()); // getName is inherited protypically
