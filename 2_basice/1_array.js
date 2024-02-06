const myarr = new Array(0,1,2,3,4,5)
// console.log("myarr",myarr);
// myarr.push(12)
// console.log("myarr Second",myarr);

//slice,splice
console.log("A",myarr);

const myarr1 = myarr.slice(1,3)
console.log(myarr1);

const myarr2 =myarr.splice(1,3)
console.log(myarr2);
console.log("original",myarr);