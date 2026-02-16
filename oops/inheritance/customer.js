class Customer{
    constructor(id,name,address){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    getDiscount(){
        console.log('discount : 10% ')
    }
}

class EliteCustomer extends Customer{
    constructor(id,name,address){
        super(id,name,address);
    }

    getDiscount(){
        console.log('discount : 20%')
    }
}

class PremiumCustomer extends Customer{
    constructor(id,name,address){
        super(id,name,address)
    }

    getDiscount(){
        console.log('discount : 30% ')
    }
}

const customer = new Customer(1234,"zameer",'dvg');
customer.getDiscount()

const eliteCustomer = new EliteCustomer(987,"xyz",'goa');
eliteCustomer.getDiscount();

const premiumCustomer = new PremiumCustomer(999,"gigi",'chicago');
premiumCustomer.getDiscount()