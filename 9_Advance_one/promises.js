const PromiseOne = new Promise(function (reslove, recject
) {
    // Do asyn 
    //DB calls, cryptography(ex: password: encryption decryption)
    setTimeout(function () {
        reslove()
        console.log("async task is completed")
    }, 1000)
})
PromiseOne.then(function () {
    console.log("Promise consume");
})

new Promise(function (reslove, recject) {
    setTimeout(function () {
        console.log("task is two")
        reslove()
    }, 1000)
}).then(function () {
    console.log("task two reslove");
})

new Promise(function (reslove, recject) {
    setTimeout(function () {
        reslove({ name: "javaScript", emialId: "priyal@gmail.com" })
    }, 1000)
}).then(function (user) {
    console.log("user", user);
})

const PromiseFour = new Promise(function (reslove, recject) {
    setTimeout(function () {
        let error = false
        if (!error) {

            reslove({ name: "priyal", passwor: "123" })
        }
        else {
            recject({ ERROR: "Somthing bad hapen on the Server" })
        }
    }, 1000)
}).then(function (user) {
    console.log(user);
    return user.name
}).then(function (name) {
    console.log(name);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("the promise either reslove or reject");
})

const promiseFive = new Promise(function (reslove, recject) {
    let error = false
    setTimeout(function () {
        if (!error) {
            reslove({ name: "javaScriptFive", active: "true" })
        }
        else {
            recject({ ERROR: "somthing bad hapenon server" })
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const respone = await promiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive()

// async function getallUser() {
//     try {
//         const responData = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responData.json()
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }
// getallUser()

fetch('https://api.github.com/users/priyal07')
    .then(function (respones) {
        return respones.json()
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    })

// fetch('https://api.github.com/users/priyal07').then((respone) => {
//     return respone.json()
// }).then((data) => {
//     console.log(data);
// }).catch((error) => console.log(error))