class IPaymentStrategy{
    pay(){
        throw new Error('implement pay')
    }
}

class CreditCard extends IPaymentStrategy{
    pay(){
        console.log('paying through credit card')
    }
}

class Crypto extends IPaymentStrategy{
    pay(){
        console.log('paying through crypto')
    }
}

class UPI extends IPaymentStrategy{
    pay(){
        console.log('paying through upi')
    }
}

class PaymentProcessor{
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    setPaymentMethod(strategy) {
        this.paymentMethod = strategy; 
    }

    makePayment(){
        this.paymentMethod.pay()
    }
}

const processPayment = new PaymentProcessor(new UPI());
processPayment.makePayment()
processPayment.setPaymentMethod(new CreditCard());
processPayment.makePayment()