let playerScore = 0;
let computerScore = 0;

let lastRoundContainer = document.querySelector('.last-round');
let playerScoreContainer = document.querySelector('.player-score');
let computerScoreContainer = document.querySelector('.computer-score');

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                playerScore++;
            } else if (computerChoice == "paper") {
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                computerScore++;
            } else if (computerChoice == "rock") {
                playerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                computerScore++;
            } else if (computerChoice == "paper") {
                playerScore++;
            }
            break;
    }

    lastRoundContainer.textContent = `${capitalize(humanChoice)} VS ${capitalize(computerChoice)}`;
    playerScoreContainer.textContent = playerScore;
    computerScoreContainer.textContent = computerScore;
}

function checkWinner() {
    if (playerScore > computerScore) {
        console.log("YOU WIN!");
    } else if (playerScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("DRAW!");
    }
}

function getComputerChoice() {
    const POSSIBILITIES = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * 3);

    return POSSIBILITIES[random];
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let playerChoice = e.target.id;

        let computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);

        if (playerChoice = 5 || computerScore == 5)
            checkWinner();
    })
});

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}




