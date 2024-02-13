const user = {
    userName: "priyal",
    price: 199,
    wlecomeMessage: function () {
        // console.log(`${this.userName} Welcome to wensite`);
        // console.log("this",this);
    }
}
user.wlecomeMessage()
user.userName = "gautam"
user.wlecomeMessage()
// console.log("this",this);

function clientName() {
    let userName = "priyal"
    console.log(this.userName);

}
clientName()

const client = () => {
    let user = "gautam"
    console.log(this.user);
}
client()
//This is explicitly return
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }

// const addtwo = (num1,num2) =>  num1 + num2
//This is implicitly
// const addtwo = (num1,num2) =>  (num1 + num2)

const addtwo = (num1,num2) => ({userName: "priyal"})


console.log(addtwo(2,9))