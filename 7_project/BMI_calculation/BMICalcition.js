const form = document.querySelector('form')
console.log(form);
const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const less =document.querySelector('#less')


    if (height === "" || isNaN(height) || height < 0) {
        console.log("if");
        results.innerHTML = `Please enter a valid  height ${height}`
    }
    else if (weight === "" || isNaN(weight) || weight < 0) {
        console.log("if");
        results.innerHTML = `Please enter a valid weight k${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
})