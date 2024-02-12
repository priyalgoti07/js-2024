function calculatorecartprice(val1, val2, ...num) {
    return val1
}
console.log("calculatorecartprice", calculatorecartprice(200, 300, 400, 500, 8000));

const user = {
    userName: "Priyal",
    price: 200
}
function handleobject(anyobject){
    console.log(`UserName is ${anyobject.userName} and ${anyobject.price}`);
}
 
// handleobject(user)
handleobject({
    userName: "Guatam",
    price: 400
})

myArray=[200,300,400,500,600]

function returnNewArray(myArray){
    return myArray[3]
}

console.log("newArray",returnNewArray([200,600,800,900]))