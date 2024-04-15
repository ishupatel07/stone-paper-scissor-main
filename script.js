const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possiableChoice = document.querySelectorAll("button");
const userPointsDisplay = document.getElementById("user-points");
const computerPointsDisplay = document.getElementById("computer-points");

let userChoice;
let computerChoice;
let userPoints = 0;
let computerPoints = 0;

possiableChoice.forEach((possiableChoice) =>
  possiableChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const rn = Math.floor(Math.random() * possiableChoice.length);
  if (rn === 0) {
    computerChoice = "rock";
  } else if (rn === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "paper" && userChoice === "rock") ||
    (computerChoice === "scissor" && userChoice === "paper")
  ) {
    result = "Computer wins";
    computerPoints++
  } else {
    result = "User wins";
    userPoints++; 
  }
  resultDisplay.innerHTML = result;
  userPointsDisplay.innerHTML = userPoints;
  computerPointsDisplay.innerHTML = computerPoints;
}
