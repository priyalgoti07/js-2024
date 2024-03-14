const gloable = "Mahadev"
const user = {
    username: "priyal",
    logincount: 8,
    signedIn: true,
    getUserDeails: function () {
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.signedIn);
// console.log(user.getUserDeails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userdata = new User("priyal", 2, true)
const userTwo = new User("gautam", 3, true)
console.log(userdata.constructor);
console.log(userTwo);
