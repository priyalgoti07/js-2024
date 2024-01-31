//Premitive

//type 7 : String,Number,boolean,null,undefiend,BigInt

// Reference (Non Premitive)

// Array, object,function

const bigNumber = 122313132131331n
console.log("bigNumber", typeof (bigNumber));

//Stack(Primtive) and Heap(Non-Primitive)

//Stack : copy to  variable 

//Heap: original value reference

let myname = "Priyal"
let copyName = myname
console.log("myname",myname);
console.log("copyName",copyName);

let userOne ={
    emil: "priyalgoti@gmial.com",
    upi: "123123"
}
let userTwo = userOne
userTwo.emil= "GheavriyaPriyal@gmail.com"
console.log("userOne",userOne);
console.log("userTwo",userTwo);