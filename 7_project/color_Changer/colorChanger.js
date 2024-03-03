const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log("button",button);
button.forEach((btn) => {
    // console.log("button", button);
    btn.addEventListener("click", function (e) {
        // console.log(e);
        console.log(e.target.id);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "purpel") {
            body.style.backgroundColor = e.target.id
        }

    })
})
