const marve_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
// marve_heros.push(dc_heros)
// console.log("marvel",marve_heros[3]);

const allHeros= marve_heros.concat(dc_heros)
// console.log("marvel to allHeros",allHeros);

const allnewheros = [...marve_heros,...dc_heros]
// console.log("allnewheros",allnewheros);

const anotherArray =[1,2,3 ,[4,5],6,[7,3,[8,9]]]
// console.log("anotherArray",anotherArray.flat(2));


console.log(Array.isArray("priyal"));
console.log(Array.from("priyal"));
console.log(Array.from({name:"priyal"}));

let score1= 100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));
