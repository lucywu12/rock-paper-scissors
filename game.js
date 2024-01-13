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
            playerWins++;
            return "You Win! Rock beats Scissors";
        } else {
            computerWins++;
            return "You Lose! Paper beats Rock";
        }
    } else if (p == "paper") {
        if (computerSelection == "rock") {
            playerWins++;
            return "You Win! Paper beats Rock";
        } else {
            computerWins++;
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection == "rock") {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        } else {
            playerWins++;
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

function checkWinner() {
    if (!won) {
        if (playerWins == 5) {
            winner.textContent = "Player is the winner!";
            won = Boolean(true);
        } else if (computerWins == 5) {
            winner.textContent = "Computer is the winner!";
            won = Boolean(true);
        }
    }
}


//constants
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const results = document.getElementById("results");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

let playerWins = 0;
let computerWins = 0;

const winner = document.getElementById("winner");
let won = Boolean(false);

//possibly a way to iterate through the different buttons?

//play rounds
rockBtn.addEventListener('click', () => {
    results.textContent = playRound("rock", getComputerChoice());
    player.textContent = playerWins;
    computer.textContent = computerWins;
    checkWinner();
    console.log(playerWins);
    console.log(computerWins);
});

paperBtn.addEventListener('click', () => {
    results.textContent = playRound("paper", getComputerChoice());
    player.textContent = playerWins;
    computer.textContent = computerWins;
    checkWinner();
});

scissorsBtn.addEventListener('click', () => {
    results.textContent = playRound("scissors", getComputerChoice());
    player.textContent = playerWins;
    computer.textContent = computerWins;
    checkWinner();
});



