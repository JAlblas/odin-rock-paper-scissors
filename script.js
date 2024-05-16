let humanScore = 0;
let computerScore = 0:

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

console.log(getComputerChoice());
console.log(getHumanChoice());