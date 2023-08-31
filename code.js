function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (!rand) return "rock";
    else if (rand == 1) return "paper";
    return "scissors";
}

function playerChoice() {
    let choice;
    while (true) {
        choice = prompt("Choose one: rock, paper or scissors");

        if (!choice)
            if (confirm("You didn't input anything.. Do you want to quit the game?"))
                return choice;
            else continue;

        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors")
            return choice;
        else alert("Incorrect input, must be 'rock', 'paper' or 'scissors' (case insensitive)");
    }
}