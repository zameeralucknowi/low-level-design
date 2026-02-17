
// Single responsibility principle 
// a class should have only one reason to change

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

class UserRepository{
    save(user){
        console.log('user saved to db')
    }
}

class EmailService{
    send(email){
        console.log('mail sent to user')
    }
}

const user = new User("zameer","zameer@gmail.com")
const repo = new UserRepository();
repo.save(user);
const emailservice = new EmailService();
emailservice.send(user.email);
