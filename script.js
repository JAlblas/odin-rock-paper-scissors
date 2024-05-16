function getComputerChoice() {
    const POSSIBILITIES = ["rock", "paper", "scissors"];

    return POSSIBILITIES[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());