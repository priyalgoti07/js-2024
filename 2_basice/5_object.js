// obj1 = { 1: "a", 2: "b" }
// obj2 = { 3: "l", 4: "m" }
// obj3 = { 4: "y", 5: "f" }
  

// obj4 =Object.assign({},obj1,obj2,obj3)
// obj5 ={...obj1,...obj2,...obj3}
// console.log(obj5);

const tindore ={}
tindore.id=123456,
tindore.name="priyal",
tindore.gmail="h@gmail.com"
console.log("tindore",tindore);
console.log("tindoreKey",Object.keys(tindore));
console.log("tindoreObject",Object.values(tindore));
console.log("tindoreenrtire",Object.entries(tindore));
console.log("hasowenProperty",tindore.hasOwnProperty('gmail'));