// we should not design fat interfaces it should be thinne and segregated

// interfaces should have methods that its subclasses dont use

// failure

// class Animal{
//     eat(){
//         console.log('eating')
//     }

//     groom(){
//         console.log('grooming')
//     }
// }

// class Dog extends Animal{
//     // holds good
// }

// class Tiger extends Animal{
//     // breaks
// }

class Animal{
    eat(){
        console.log('eating')
    }
}

class Pet extends Animal{
    groom(){
        console.log('grooming')
    }
}

class Dog extends Pet{
    // holds good
}

class Tiger extends Animal{

}

const dog = new Dog();
dog.eat();
dog.groom()

const tiger = new Tiger();
tiger.eat()