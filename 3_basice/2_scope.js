let a = 300;
//GOBAL SCOPE
if (true) {
    //BLOCK SCOPE
    let a = 30;
    const b = 40;
    var c = 50;
    // console.log("INNER SCOPE", a);
}
// console.log("a", a);
// console.log("b",b);
// console.log("c", c);


// ++++++++++++++++++++++++intrestingTopics++++++++++++++++++

console.log("addone", addone(5))
function addone(num) {
    return num + 1
}



console.log("addtwo", addtwo(7))
let addtwo = function (num) {
    return num + 2
}