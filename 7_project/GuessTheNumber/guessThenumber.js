const rdn = parseInt(Math.random() * 100 + 1)
console.log('rdn', rdn);

const submit = document.querySelector('#subt');
console.log("submit", submit);
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

//craete Element
const p = document.createElement('p');

//prevGuess submited all value store in Prevguess
const prevGuess = [];

//how many attempt user
const numGuess = 1;

//game started
let playGame = true;

// console.log("pal",playGame);
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

//ValidateGuess number is valid or not, not string , value is not 1 less then and value is not a nagitive
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please Enter only number");
    } else if (guess < 1) {
        alert("please enter a number  more then 1");
    } else if (guess > 100) {
        alert("please enter  a number less then 100");
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuessCleanup(guess)
            displayMessge(`game is over RandomNumber ${rdn}`)
            overGame()
        }
        else {
            displayGuessCleanup(guess)
            checkGuess(guess)
        }
    }
    console.log(prevGuess);

}
//guess Messgage print
function checkGuess(guess) {
    if (guess === rdn) {
        displayMessge(`you gueesed  is Right`)
    } else if (guess < rdn) {
        displayMessge(`Number is TOO low`)
    }  else if (guess > rdn) {
        displayMessge(`Number is TOO high`)
    }
}

function displayGuessCleanup(guess) {
    userInput.value = ''
}

//interrupted to direct Dom  & DOM mainupulation
function displayMessge(guess) {

}

function overGame() {

}

function newgame() {

}