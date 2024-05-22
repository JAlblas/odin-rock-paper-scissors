let humanScore = 0;
let computerScore = 0;


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

function checkWinner() {
    if (humanScore > computerScore) {
        console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("DRAW!");
    }
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

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let humanChoice = e.target.id;
        console.log(humanChoice)

        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        if (humanScore = 5 || computerScore == 5)
            checkWinner();
    })
});


//playGame();




