function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        return "rock";
    } else if (choice >= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase().trim();
    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    } else {
        return "Not a valid choice";
    }
}

function playRound(humanChoice, computerChoice) {
    // detects if there's a tie first
    if (humanChoice === computerChoice) {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    } else {

            // rock rps logic

            if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                } else {
                    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
            }

            // paper rps logic

            if (humanChoice === "paper") {
                if (computerChoice === "scissors") {
                    console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                } else {
                    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
            }

            // scissors rps logic

            if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                } else {
                    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
            }
        }
    }


    
// game rounds

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

let humanScore = 0;
let computerScore = 0;

if (humanScore > computerScore) {
    console.log(`You won!\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
} else {
    console.log(`You lost.\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
}
