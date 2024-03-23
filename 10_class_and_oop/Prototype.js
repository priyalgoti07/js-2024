let myGod = "Mahadev"
// console.log(myGod.length);

let Myheros = ["Mahadev", "Ram"]

let heroPower = {
    Mahadev: "parvtima",
    Ram: "Sitama",
     getGodpower : function(){
        // console.log(`god power is ${this.Ram}`);
     }
}

Object.prototype.God = function(){
    // console.log(`my god is Present in all objects`);
}

Array.prototype.heygod =function(){
    // console.log(`Bhagvan is always Right`);
}
Myheros.God()
Myheros.heygod()
// heroPower.heygod()

let anotherUsername = "Priyal with JavaSacript"

String.prototype.trLength = function(){
    console.log( `${this}`)
    console.log(`True length is : ${this.length}`)
}
anotherUsername.trLength()
"om".trLength()