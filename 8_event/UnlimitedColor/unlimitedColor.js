const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * 16);
        color += hex[index]
    }
    return color
}

// console.log(randomColor())
let colorId
const setColor = () => {
    document.body.style.backgroundColor = randomColor()
}

const startChaningColor = () => {
    if (!colorId) {
        colorId = setInterval(setColor, 1000)
    }
}

const stopChaningColor = () => {
    clearInterval(colorId)
    colorId = null
}
document.querySelector('#start').addEventListener('click', startChaningColor)

document.querySelector('#stop').addEventListener('click', stopChaningColor)
