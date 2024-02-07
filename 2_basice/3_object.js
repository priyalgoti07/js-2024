//singleton
//Constructor

//object literals
const mysym = Symbol("key1")
const jsUser={
    name:"priyal",
    "full name": "priyal Ghevariya",
    [mysym]: "mykey1",
    age: 27,
    location: "Surat",
    email:"priay@goggle.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturdays"]

}
// console.log("user",jsUser.email);
// console.log("emialUser",jsUser["email"]);
// console.log("fullName",jsUser["full name"]);
// console.log("mysymbol", jsUser[mysym]);
// Object.freeze(jsUser)
jsUser.email= "gautam@gogole.com"

jsUser.greeting = function(){
    console.log("om namaha Shivay");
}
jsUser.greetingtwo = function(){
    console.log(`om namaha shivay ${this.name}`)
} 

console.log("user",jsUser.greeting());
console.log("user",jsUser.greetingtwo());

