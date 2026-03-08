class DatabaseConnection{
    static #instance=null;
    constructor(){
        if(DatabaseConnection.#instance){
            return DatabaseConnection.#instance;
        }
        DatabaseConnection.#instance = this;
        return DatabaseConnection.#instance;
    }

    static getInstance(){
        if(!DatabaseConnection.#instance){
            DatabaseConnection.#instance = new DatabaseConnection()
        }

        return DatabaseConnection.#instance;
    }
}


const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2)