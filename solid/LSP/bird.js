// subclasses should be substituable with parent class type


// failure case

// class Bird{
//     eat(){
//         console.log('eating')
//     }

//     fly(){
//         console.log('flying')
//     }
// }

// class Eagle extends Bird{
//     // holds good
// }

// class Duck extends Bird{
//     // breaks here no duck can fly 
// }

class Bird {
    eat(){
        console.log('eating')
    }
}

class FlyingBird extends Bird{
    fly(){
        console.log('flying')
    }
}

class SwimmingBird extends Bird{
    swim(){
        console.log('swimming')
    }
}

class Eagle extends FlyingBird{
    // holds good
}

class Duck extends SwimmingBird{
    // holds good now
}

const eagle = new Eagle();
eagle.eat()
eagle.fly()

const duck = new Duck();
duck.eat()
duck.swim()