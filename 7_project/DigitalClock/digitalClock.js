// const Time = document.querySelector('#clock')
// console.log(Time);
const getTime = document.getElementById('clock')
console.log(getTime);



setInterval(function () {
    let dateTime = new Date()
    // console.log(dateTime);
    getTime.innerHTML = dateTime.toLocaleTimeString()
}, 1000)