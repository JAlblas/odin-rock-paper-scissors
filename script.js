function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                humanScore++;
            } else if (computerChoice == "paper") {
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                computerScore++;
            } else if (computerChoice == "rock") {
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                computerChoice++;
            } else if (computerChoice == "paper") {
                humanScore++;
            }
            break;
    }
    console.log(`${humanChoice} VS ${computerChoice}`);
    console.log(humanScore);
    console.log(computerScore);
}

function getComputerChoice() {
    const POSSIBILITIES = ["rock", "paper", "scissors"];

    return POSSIBILITIES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while (true) {
        choice = prompt("Rock, paper, scissors?");
        if (choice === null) {
            // User cancelled the prompt
            break;
        }
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);




