let randomNumber = Math.trunc(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuess = 1;
let playGame = true;

if (playGame) {
  submit?.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // checks actual user input value
  if (isNaN(guess) || guess < 1 || guess > 100)
    alert("please enter a valid number");
  else {
    prevGuess.push(guess);
    if (numberOfGuess === 11) {
      displaGuess(guess);
      displaMsg(`Game Over | Random Number was ${randomNumber}`);
      endGame();
    } else {
      displaGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // random number == user input
  if (guess === randomNumber) {
    displaMsg(`Your guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displaMsg(`Number is too Low`);
  } else if (guess > randomNumber) {
    displaMsg(`Number is too High`);
  }
}

function displaGuess(guess) {
  // clean input box // update => guess [] || remaining guess
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numberOfGuess++;
  remaining.innerHTML = `${11 - numberOfGuess}`;
}
function displaMsg(message) {
  // display win msg // low or high
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  //
  userInput.vaue = "";
  userInput?.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
  startOver?.append(p);
  playGame = false;
  newGame();
}
function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton?.addEventListener("click", function (e) {
    randomNumber = Math.trunc(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuess = 1;
    guessSlot.innerHTML = ``;
    remaining.innerHTML = `${11 - numberOfGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
