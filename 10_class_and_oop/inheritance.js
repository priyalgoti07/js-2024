class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(usrname, email, passwor) {
        super(usrname)
        this.email = email;
        this.password = passwor;
    }
    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const Data = new Teacher("priyal", "priyal@gmial.com",654987)

Data.addCourse()