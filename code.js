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