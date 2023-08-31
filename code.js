function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);

    if (!rand) return "rock";
    else if (rand == 1) return "paper";
    return "scissors";
}