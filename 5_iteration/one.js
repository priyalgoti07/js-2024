// let n =10;
// for(let i =0 ; i <= 10 ; i++){
//     console.log("i",i);
//     for(let j=0 ; j<=10; j++){
//         console.log(i + "*"+ j + "="+ i*j);
//     }
// }

for (let index = 1; index <=20; index++) {
    const element = index;
    if(element === 5){
        console.log(`value is ${index}`);
        // break;
        continue;
    }
    console.log("element",element);
    
}