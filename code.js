<<<<<<< HEAD
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
=======
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (!rand) return "rock";
    else if (rand == 1) return "paper";
    return "scissors";
}

function playerChoice() {
>>>>>>> ec1b194101940551374a24b509038ae2e70b05e4
    let choice;
    while (true) {
        choice = prompt("Choose one: rock, paper or scissors");

        if (!choice)
            if (confirm("You didn't input anything.. Do you want to quit the game?"))
<<<<<<< HEAD
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

function playRound()
{
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice === null)
        {
            // add something later
            return null;
        }
    
    if (playerChoice === computerChoice)
        return 0;
    if ((playerChoice === 2 && computerChoice === 0) || (playerChoice - computerChoice === -1))
        return -1;
    else return 1;
=======
                return choice;
            else continue;

        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors")
            return choice;
        else alert("Incorrect input, must be 'rock', 'paper' or 'scissors' (case insensitive)");
    }
>>>>>>> ec1b194101940551374a24b509038ae2e70b05e4
}