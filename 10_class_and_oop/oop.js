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

    return this
}

const userdata = User("priyal",2,true)
console.log(userdata);