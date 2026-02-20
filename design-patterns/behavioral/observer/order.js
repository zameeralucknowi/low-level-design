class IObserver {
    update(order) {
        throw new Error('implement update')
    }
}

// observers
class Customer extends IObserver {
    constructor(name) {
        super()
        this.name = name;
    }

    update(order) {
        console.log(`Hi ${this.name} your order with ${order.id} has an status update : ${order.status}`)
    }
}

class Restaurant extends IObserver {
    constructor(restaurantName) {
        super()
        this.restaurantName = restaurantName
    }

    update(order) {
        console.log(`Hi ${this.restaurantName} your order with ${order.id} has an status update : ${order.status}`)
    }
}

class Rider extends IObserver {
    constructor(name) {
        super()
        this.name = name
    }

    update(order) {
        console.log(`Hi ${this.name} your order with ${order.id} has an status update : ${order.status}`)
    }
}


// subject
class Order {
    constructor(id) {
        this.id = id;
        this.status = 'order placed'
        this.observers = []
    }

    addObservers(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((o) => o !== observer)
    }

    setStatus(newStatus) {
        this.status = newStatus;
        this.notifyObservers()
    }

    notifyObservers() {
        this.observers.forEach(o => o.update(this))
    }

}

const customer = new Customer("zameer")
const restaurant = new Restaurant('rocking')
const rider = new Rider('sham')

const order = new Order(123);

order.addObservers(rider);
order.addObservers(restaurant)
order.addObservers(customer)

order.setStatus('pending')
order.setStatus('out for delivery')
order.setStatus('delivered')
