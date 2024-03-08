const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16);
        color += hex[index]
        console.log("color", color, hex, index);
    }
    return color
}

// console.log(randomColor())

document.querySelector('#start').addEventListener('click',startChaningColor)

document.querySelector('#stop').addEventListener('click',stopChaningColor)
