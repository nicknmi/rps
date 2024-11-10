

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
    round++;
    if (humanChoice === computerChoice) {
        // console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
        result(humanChoice, computerChoice, humanScore, computerScore, "tied", "ties", round);
    } else {

            // rock rps logic

            if (humanChoice === "rock") {
                if (computerChoice === "paper") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses", round);
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats", round);
                }
            }

            // paper rps logic

            if (humanChoice === "paper") {
                if (computerChoice === "scissors") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses", round);
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats", round);
                }
            }

            // scissors rps logic

            if (humanChoice === "scissors") {
                if (computerChoice === "rock") {
                    // console.log(`You lost. ${humanChoice} loses to ${computerChoice}`);
                    computerScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "lost", "loses", round);
                } else {
                    // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    result(humanChoice, computerChoice, humanScore, computerScore, "won", "beats", round);
                }
            }
        }
    }
let humanScore = 0;
let computerScore = 0;
let round = 0;
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
}


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

function result(humanChoice, computerChoice, humanScore, computerScore, win, decision, round) {
    let result = document.querySelector("#result");
    let humanPoints = document.querySelector("#human-score");
    let computerPoints = document.querySelector("#computer-score");
    let roundNum = document.querySelector("#round");

    if (round === 5) {
        if (humanScore > computerScore) {
            roundNum.textContent = `You win!!`;
        } else {
            roundNum.textContent = `Aw, you lost.`;
        }
        resetGame();
    } else {
        roundNum.textContent = `Round: ${round}`;
    }

    result.textContent = `You ${win} this round. ${humanChoice} ${decision} ${computerChoice}`;
    humanPoints.textContent = `Your Score: ${humanScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;        

}
