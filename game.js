function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase(); //now case-insensitive

    if (p == computerSelection) {
        const c = getComputerChoice();
        return playRound(p, c); //replay round
    } else if (p == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "You Lose! Paper beats Rock";
        }
    } else if (p == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter a command");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

//game();

//constants
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const results = document.getElementById("results");

//play rounds
rockBtn.addEventListener('click', () => {
    results.textContent = playRound("rock", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    results.textContent = playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    results.textContent = playRound("scissors", getComputerChoice());
});

