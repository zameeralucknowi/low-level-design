// class PaymentProcessor {
//     processPayment(type, amount) {
//         if (type === 'creditCard') {
//             console.log(`Processing $${amount} via Credit Card`);
//         } else if (type === 'paypal') {
//             console.log(`Processing $${amount} via PayPal`);
//         } else if (type === 'crypto') {
//             console.log(`Processing $${amount} via Crypto`);
//         }
//     }
// }

// Tomorrow: Add UPI (common in India) → Must modify existing class!

// open close principle
// software entities(classes,function) should be open for extenstion but closed for modification


class PaymentProcessor{
    constructor(paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount){
        this.paymentMethod.pay(amount)
    }
}

class CreditPayment{
    pay(amount){
        console.log('paid through credit card -'+amount)
    }
}

class CryptoPayment{
    pay(amount){
        console.log('paid through crypto -'+amount)
    }
}

class UpiPayment{
    pay(amount){
        console.log('paid through upi -'+amount)
    }
}

const paymentProcessor = new PaymentProcessor(new UpiPayment());
paymentProcessor.processPayment(1000)

