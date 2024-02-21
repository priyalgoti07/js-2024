// const userEmail =[]
// console.log("userEmail",userEmail.length);
// if(userEmail.length === 0){
//     console.log("value is empty")
// }
// else{
//     console.log("value is here");
// }

// const objempty ={}

// if(Object.keys(objempty).length === 0){
//     console.log("empty object");
// } else{
//     console.log(`i am object ${objempty.name}`);
// }
//falsy vale

// false, 0, BigInt, "", null, undefined, NaN, -0

//truthy   value

// '0', "0", "false", " ",[],{}, function(){}

//Nullish coalescing operator (??) null & undefined
let value1
// value1 = null ?? 10
value1 = undefined ?? 100 ?? 15
console.log(value1);
