function multipalby5(num) {
    return num * 5
}
multipalby5.p = 20000000000
// console.log(multipalby5(5));
// console.log(multipalby5.p);
// console.log(multipalby5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
    // console.log(this.score);
}
createUser("Mahadev", 200)

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printme = function () {
console.log(`dreink is ${this.username}`);
}

const chai = new createUser("chai", 20)
const tea = new createUser("tea", 250)

chai.increment()
tea.printme()