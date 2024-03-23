//ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptpassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const ClassData = new User("priyal", "priyal@gmai.com", 123)
console.log(ClassData.encryptpassword());
console.log(ClassData.changeUsername());

//behind the seen

function Username(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}
Username.prototype.encryptpassword = function(){
    return `${this.password}abc`
}

Username.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}
const functionData = new Username("GAUTAM", "gautam@gmail.com", 123)
console.log(functionData.encryptpassword());
console.log(functionData.changeUsername());