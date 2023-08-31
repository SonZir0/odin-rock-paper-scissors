/*  instead of comparing strings it's probably better to compare numbers
    0 - rock
    1 - paper
    2 - scissors
*/

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    return rand;
}

function getPlayerChoice() {
    let choice;
    while (true) {
        choice = prompt("Choose one: rock, paper or scissors");

        if (!choice)
            if (confirm("You didn't input anything.. Do you want to quit the game?"))
                return null;
            else continue;

        choice = choice.toLowerCase();
        if (choice === "rock")
            return 0;
        else if (choice === "paper")
            return 1;
        else if (choice === "scissors")
            return 2;
        else alert("Incorrect input, must be 'rock', 'paper' or 'scissors' (case insensitive)");
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice === null) {
        console.log("Wrapping up..");
        return null;
    }

    if (playerChoice === computerChoice) {
        console.log("It's a Tie! You both choose the same thing!");
        return 0;
    }

    if (playerChoice === 0) {
        if (computerChoice === 1) {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }
        if (computerChoice === 2) {
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    }

    if (playerChoice === 1) {
        if (computerChoice === 0) {
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        if (computerChoice === 2) {
            console.log("You Lose! Scissors beat Paper");
            return -1;
        }
    }

    if (playerChoice === 2) {
        if (computerChoice === 1) {
            console.log("You Win! Scissors beat Paper");
            return 1;
        }
        if (computerChoice === 2) {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        }
    }

    /* Doesn't allow us to tell who choose what, and additional checks would defeat its purpose

    if ((playerChoice === 2 && computerChoice === 0) || (playerChoice - computerChoice === -1))
        return -1;
    else return 1;
    */
}

function game(rounds = 1) {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;

    for (let i = 0; i < rounds; i++) {
        result = playRound();

        if (result === null)
            break;

        if (result < 0)
            computerScore++;
        else if (result > 0)
            playerScore++;
    }

    if (playerScore > computerScore)
        console.log("You Won the game!");
    else if (playerScore < computerScore)
    console.log("You Lost the game, this time at the very least..");
    else console.log("The game ended in a Tie!");

    console.log(`Results:\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
}