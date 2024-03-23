function SetUsername(username){
    console.log(username);
    //complex DB calls
    this.username = username
}

function createusername(username, emil, password){
    SetUsername.call(this,username)
    this.emil = emil
    this.password = password
}
const DataPrint = new createusername("priyal", "priyal@gmil.com",123)
console.log(DataPrint);