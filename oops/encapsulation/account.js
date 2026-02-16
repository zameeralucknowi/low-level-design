class BankAccount{
    static #balance=0;
    constructor(initialDeposit){
        BankAccount.#balance = initialDeposit
    }

    addMoney(money){
        BankAccount.#balance = BankAccount.#balance + money;
    }

    getBalance(){
        return BankAccount.#balance;
    }
}

const account = new BankAccount(500);
account.addMoney(1000);
console.log(account.getBalance()) 