function getComputerChoice(){ 
    let min = 1, max = 3;
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if(randNum == 1) return "rock";
    else if(randNum == 2) return "paper";
    else return "scissor";
}
function getHumanChoice(){
    return prompt("Enter your decision: ");
}
let humanScore = 0 , computerScore = 0, resultMessage = "";
function playRound(cc, hc){
    const computerChoice = cc.toLowerCase();
    const humanChoice = hc.toLowerCase();
    
    if(hc == cc){
        resultMessage = "It's a draw!";
    }
    else if(hc == "rock"){
        if(cc == "scissor") {
            resultMessage = "You won! Rock beats Scissor.";
            humanScore++;
        } else {
            resultMessage = "You lost! Paper beats Rock.";
            computerScore++;
        }
    } 
    else if(hc == "paper"){
        if(cc == "rock") {
            resultMessage = "You won! Paper beats Rock.";
            humanScore++;
        } else {
            resultMessage = "You lost! Scissor beats Paper.";
            computerScore++;
        }
    }
    else if(hc == "scissor"){
        if(cc == "paper") {
            resultMessage = "You won! Scissor beats Paper.";
            humanScore++;
        } else {
            resultMessage = "You lost! Rock beats Scissor.";
            computerScore++;
        }
    } 
    else {
        resultMessage = "Invalid input! Please choose rock, paper, or scissor.";
    }

    console.log(resultMessage);
    console.log(`Human Score is: ${humanScore} while Computer Scores: ${computerScore}`);
   
}

let i = 0;
while (i < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice); 
    
    i++;
}