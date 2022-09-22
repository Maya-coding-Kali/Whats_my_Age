let onSubmitHandle = document.querySelector("form");
let guessInput = document.querySelector(".guess");
let guess;
let random = Math.floor(Math.random() * 21);
let body = document.querySelector("body");
let guessLeft = document.querySelector("#guessesLeft");
let guessMeter = document.querySelector("#guessMeter");
let guessCount = parseInt(guessLeft.innerHTML);
let highScore = document.querySelector("#highScore");
counter = 0;
console.log("random number 1: " + random);
guessInput.addEventListener("keyup", (event) => {
  guess = event.target.value;
});
onSubmitHandle.addEventListener("submit", (event) => {
    event.preventDefault();
    guessInput.value = "";
  if (guess == random) {
    const inter = setInterval(() => {
      if (counter === 8) {
        counter = 0;
        if (parseInt(highScore.innerHTML) < parseInt(guessCount)) {
          highScore.innerHTML = guessCount;
        }
        guessCount = 20;
        guessLeft.innerHTML = 20;
        random = Math.floor(Math.random() * 21);
          guessMeter.innerHTML = "Perfect";
        clearInterval(inter);
      }
      if (body.style.background === "black") {
        body.style.background = "Green";
      } else {
        body.style.background = "black";
      }
      counter++;
    }, 100);
  } else {
    const inter = setInterval(() => {
      if (counter === 8) {
        counter = 0;
        guessCount--;
        guessLeft.innerHTML = guessCount;
        if (parseInt(guess) > random) {
          guessMeter.innerHTML = "Too High";
        } else {
          guessMeter.innerHTML = "Too Low";
        }
        guessInput.value = "";
        clearInterval(inter);
      }
      if (body.style.background === "black") {
        body.style.background = "Red";
      } else {
        body.style.background = "black";
      }
      counter++;
    }, 100);
  }
});
function GuessCheck() {}
