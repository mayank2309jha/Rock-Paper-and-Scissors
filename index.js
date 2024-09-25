let myScore = 0;
let compScore = 0;

const myScoreShow = document.querySelector(".your-score");
const compScoreShow = document.querySelector(".computer-score");
const message = document.querySelector(".message");
const moves = ["rock-image", "paper-image", "scissor-image"];
const restart = document.querySelector(".reset");
const moveElements = document.querySelectorAll(".option");

// Constants for move names
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// Determine game outcome
function getGameResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "draw";
  }
  if (
    (playerMove === ROCK && computerMove === PAPER) ||
    (playerMove === PAPER && computerMove === SCISSORS) ||
    (playerMove === SCISSORS && computerMove === ROCK)
  ) {
    return "computer";
  }
  return "player";
}

// Function to handle the result
function updateGameResult(result) {
  if (result === "draw") {
    message.textContent = "It is a draw. Want to Try Again?";
    message.style.backgroundColor = "#007FFF"; // Blue
  } else if (result === "computer") {
    message.textContent = "You Lose. Let us Play Again?";
    compScore++;
    compScoreShow.textContent = compScore;
    message.style.backgroundColor = "#FF0000"; // Red
  } else {
    message.textContent = "You Win!!! Give me another chance";
    myScore++;
    myScoreShow.textContent = myScore;
    message.style.backgroundColor = "#03C03C"; // Green
  }
}

// Event listener for all buttons
moveElements.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    // Get the player's move based on className
    let playerMove = moves.indexOf(e.target.className);

    // If the className doesn't match any of the move names, exit early
    if (playerMove === -1) return;

    // Get the computer's random move
    let computerMove = Math.floor(Math.random() * 3);

    // Determine the game result
    let result = getGameResult(playerMove, computerMove);

    // Update the game result
    updateGameResult(result);
  });
});

restart.addEventListener("click", () => {
  compScore = 0;
  myScore = 0;
  compScoreShow.textContent = compScore;
  myScoreShow.textContent = myScore;
  message.textContent = "Pick Your Move";
  message.style.backgroundColor = "#007FFF"; // Blue
});
