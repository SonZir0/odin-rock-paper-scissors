/*  instead of comparing strings it's probably better to compare numbers
    0 - rock
    1 - paper
    2 - scissors
*/

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    return rand;
}

function restart(e) {

    let buttons = document.querySelectorAll('button');
    let gameLog = document.querySelector('.gamelog');
    let scores = document.querySelectorAll('var');

    scores.forEach((score) => {
        score.textContent = 0;
    });

    buttons.forEach((btn) => {
        btn.disabled = false;
    });

    while(gameLog.childElementCount > 1) {
        gameLog.removeChild(gameLog.lastChild);
    }

    e.target.parentElement.removeChild(e.target);
}

function finishGame(finalLog) {
    let restartBtn = document.createElement('button');
    let newLog = document.createElement('p');
    let gameLog = document.querySelector('.gamelog');
    let buttons = document.querySelectorAll('button');
    let leftPanel = document.querySelector('.left');

    buttons.forEach((btn) => {
        btn.disabled = true;
    });

    newLog.textContent = finalLog;
    gameLog.appendChild(newLog);

    restartBtn.textContent = "Restart?";
    restartBtn.addEventListener('click', restart);
    leftPanel.appendChild(restartBtn);
}

function determineWinner(playerChoice, computerChoice) {
    let newLog = document.createElement('p');
    let gameLog = document.querySelector('.gamelog');
    let round = document.querySelector('.round var');
    let playerScore = document.querySelector('.playerScore var');
    let CPUScore = document.querySelector('.CPUScore var');

    if (playerChoice === computerChoice) {
        newLog.textContent = "It's a Tie! You both choose the same thing!";
    }

    if (playerChoice === 0) {
        if (computerChoice === 1) {
            newLog.textContent = "You Lose! Paper beats Rock";
            CPUScore.textContent++;
        }
        if (computerChoice === 2) {
            newLog.textContent = "You Win! Rock beats Scissors";
            playerScore.textContent++;
        }
    }

    if (playerChoice === 1) {
        if (computerChoice === 0) {
            newLog.textContent = "You Win! Paper beats Rock";
            playerScore.textContent++;
        }
        if (computerChoice === 2) {
            newLog.textContent = "You Lose! Scissors beat Paper";
            CPUScore.textContent++;
        }
    }

    if (playerChoice === 2) {
        if (computerChoice === 1) {
            newLog.textContent = "You Win! Scissors beat Paper";
            playerScore.textContent++;
        }
        if (computerChoice === 0) {
            newLog.textContent = "You Lose! Rock beats Scissors";
            CPUScore.textContent++;
        }
    }

    gameLog.appendChild(newLog);
    round.textContent++;

    if (playerScore.textContent == 5) {
        finishGame("Congratulations! You Won the game!");
    } else if (CPUScore.textContent == 5) {
        finishGame("This time You Lost.. Care for a rematch?");
    }
}

function playRound(e) {
    let playerChoice = e.target.classList[0];

    if (playerChoice === "rock")
        playerChoice = 0;
    else if (playerChoice === "paper")
        playerChoice = 1;
    else if (playerChoice === "scissors")
        playerChoice = 2;
    //  exit in case of click on interface, but not the buttons
    else return 0;

    let computerChoice = getComputerChoice();
    determineWinner(playerChoice, computerChoice);

    /* Doesn't allow us to tell who choose what for logging, and
       additional checks would defeat its purpose

    if ((playerChoice === 2 && computerChoice === 0) || (playerChoice - computerChoice === -1))
        console.log("You Lose!");
    else console.log("You Win!");
    */
}

let interface = document.querySelector('.interface');
interface.addEventListener('click', playRound);