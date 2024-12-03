function getComputerChoice() {
  let min = 1,
    max = 3;
  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randNum == 1) return "rock";
  else if (randNum == 2) return "paper";
  else return "scissor";
}
const displayHuman = document.querySelector('.human-score');
const displayComputer = document.querySelector('.computer-score');  
let humanScore = 0,
  computerScore = 0,
  resultMessage = "";

function playRound(cc, hc) {
  const computerChoice = cc.toLowerCase();
  const humanChoice = hc.trim().toLowerCase();

  console.log(computerChoice + " " + humanChoice);
  
  if (humanChoice == computerChoice) {
    resultMessage = "It's a draw!";
  } else if (humanChoice == "rock") {
    if (computerChoice == "scissor") {
      resultMessage = "You won! Rock beats Scissor.";
      humanScore++;
      displayHuman.textContent = `${humanScore}`; 
    } else {
      resultMessage = "You lost! Paper beats Rock.";
      computerScore++;
      displayComputer.textContent = `${computerScore}`; 
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      resultMessage = "You won! Paper beats Rock.";
      humanScore++;
      displayHuman.textContent = `${humanScore}`; 
    } else {
      resultMessage = "You lost! Scissor beats Paper.";
      computerScore++;
      displayComputer.textContent = `${computerScore}`;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "paper") {
      resultMessage = "You won! Scissor beats Paper.";
      humanScore++;
      displayHuman.textContent = `${humanScore}`; 
    } else {
      resultMessage = "You lost! Rock beats Scissor.";
      computerScore++;
      
      displayComputer.textContent = `${computerScore}`;
    }
  } else {
    resultMessage = "Invalid input! Please choose rock, paper, or scissor.";
  }

  console.log(resultMessage);
  console.log(
    `Human Score is: ${humanScore} while Computer Scores: ${computerScore}`
  );
}

let i = 0;

function getHumanChoice() {
  const divHumanChoice = document.querySelectorAll(".human-choice");
    // Clear and add listeners only once
    divHumanChoice.forEach(function (element) {
      element.removeEventListener('click', handleChoice); // Remove existing listener
      element.addEventListener('click', handleChoice);    // Add new listener
    });
  }
  
  const displayFinalWinner = document.createElement('div');
  function handleChoice(event) {
    if (i < 5) {
      let cc = getComputerChoice();
      console.log(cc + " " + event.target.textContent);
      playRound(cc, event.target.textContent);
      
      i++;
    } else {
      const wrapper = document.querySelector('.wrapper');
      if(humanScore > computerScore) displayFinalWinner.textContent="THE WINNER IS HUMAN !!"
      else if(computerScore > humanScore) displayFinalWinner.textContent="THE WINNER IS COMPUTER !!";
      else displayFinalWinner.textContent="TIES NONE OF YOU WINNER"

      displayFinalWinner.style.cssText = "color: white; font-weight: bolder "; 
      wrapper.appendChild(displayFinalWinner);
      
      const choiceReset = prompt('Do you want to reset? (Y or N?)')
      choiceReset = choiceReset.toLowerCase();
      if(choiceReset == "y") askResetGame();
      else displayFinalWinner.textContent += "\nPRESS RESET TO RESTART GAME";
    }
}
getHumanChoice();

function askResetGame() {
  i = 0;
  console.log(" i am reseting the game: ");
  displayHuman.textContent = 0;
  displayComputer.textContent = 0;
  displayFinalWinner.textContent = "";
  humanScore = 0;
  computerScore = 0;
  getHumanChoice();
}
