"use strict";
// Abstract class Animal
class Animal {
    // Method with implementation
    move(distance) {
        console.log(`This animal moved ${distance} meters.`);
    }
}
// Class Dog extends from Animal
class Dog extends Animal {
    makeSound() {
        console.log("Woof woof!");
    }
}
// Class Cat extends from Animal
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
const dog = new Dog();
dog.makeSound(); // Output: Woof woof!
dog.move(10); // Output: This animal moved 10 meters.
const cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move(5); // Output: This animal moved 5 meters.
