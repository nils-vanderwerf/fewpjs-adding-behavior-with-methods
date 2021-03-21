// Your code here

class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`
        } else {
        return `${this.name} says squawk!`
        }
    }
}

let George = new Cat("George", 'male')
let Bob = new Dog("Bob", 'male')
let Steve = new Bird("Steve", 'male')
let Mable = new Bird("Mable", 'female')

console.log(`George: ${George}, Bob: ${Bob}, Steve: ${Steve}, Mable: ${Mable}`)