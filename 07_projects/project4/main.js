let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const guessField = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses");
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement("p");

let prevGuess = [];
let numOfGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(guessField.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(numOfGuess>11){
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was :: ${randomNum}`);
        endGame();
    }
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number greater than 1');
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You won!`);
        endGame();
    }
    else if(guess<randomNum){
        displayMessage(`Number is low`);
    }
    else if(guess>randomNum){
        displayMessage(`Number is low`);
    }
}
function displayGuess(guess){
    guessField.value = '';
    prevGuesses.innerHTML += `${guess}, `;
    numOfGuess++;
    remaining.innerHTML = `${11-numOfGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    guessField.value = '';
    guessField.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',(e)=>{
        let randomNum = parseInt(Math.random()*100+1);
        prevGuess = [];
        numOfGuess=1;
        remaining.innerHTML = `${11-numOfGuess}`;
        guessField.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}

