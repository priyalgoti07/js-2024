const rdn = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

//craete Element
const p = document.createElement('p');

//prevGuess submited all value store in Prevguess
let prevGuess = [];

//how many attempt user
let numGuess = 2;

//game started
let playGame = true;

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
        if (numGuess === 10) {
            CleanupMethod(guess)
            displayMessge(`game is over RandomNumber ${rdn}`)
            overGame()
        }
        else {
            CleanupMethod(guess)
            checkGuess(guess)
        }
    }

}
//guess Messgage print
function checkGuess(guess) {
    if (guess === rdn) {
        displayMessge(`you gueesed  is Right`)
    } else if (guess < rdn) {
        displayMessge(`Number is TOO low`)
    } else if (guess > rdn) {
        displayMessge(`Number is TOO high`)
    }
}

function CleanupMethod(guess) {
    userInput.value = '';
    guessslot.innerHTML += `${guess},`
    numGuess++;
    remining.innerHTML = `${11 - numGuess}`
}

//interrupted to direct Dom  & DOM mainupulation
function displayMessge(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function overGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startover.appendChild(p)
    playGame = false;
    newgame()
}

function newgame() {
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', function () {
        randomnumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = '';
        remining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        playGame = true;
    })
}