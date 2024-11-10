let humanScore = 0;
let computerScore = 0;

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
function getHumanChoice(choice) {
    // let choice = prompt("Rock, paper, or scissors?");
    // choice = choice.toLowerCase().trim();
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
        // console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
        result(humanChoice, computerChoice, humanScore, computerScore, "tied", "ties");
    } else {

            // rock rps logic

            if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses");
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats");
                }
            }

            // paper rps logic

            if (humanChoice === "paper") {
                if (computerChoice === "scissors") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses");
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats");
                }
            }

            // scissors rps logic

            if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses");
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats");
                }
            }
        }
    }


    
// game rounds



/*

if (humanScore > computerScore) {
    // console.log(`You won!\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
} else {
    // console.log(`You lost.\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);
}
*/


// interaction with dom
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

function result(humanChoice, computerChoice, humanScore, computerScore, win, decision) {
    let result = document.querySelector("#result");
    let humanPoints = document.querySelector("#human-score");
    let computerPoints = document.querySelector("#computer-score");
    result.textContent = `You ${win}. ${humanChoice} ${decision} ${computerChoice}`;
    humanPoints.textContent = `Your Score: ${humanScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
}
