// Foundations / JavaScript Basics / Rock, Paper, Scissors Project
// Goal: Create a rock, paper, scissors game in the console,
// in which 5 rounds can be done and the score is shown.

// Step 1: Write logic to get the computer choice
// Changed from ifel statement to using array index, verified w/ console.log
function getComputerChoice() {
    let gameChoices = ["rock", "paper", "scissors"]
    let indexNumber = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[indexNumber];
    return computerChoice;
}

// Step 2: Write the logic to get the human choice
// Your game will be played by a human player.
// You will write a function that takes the user choice and returns it.

// Declare new function, getHumanChoice()
function getHumanChoice() {
    // make new variable that will hold the player choice
    let humanChoice;

    // since it is player choice, ask player what they will pick (rock || paper || scissor), put in variable
    humanChoice = prompt(`Pick one of the following: "Rock", "Paper", Scissors"`, "");
    //console.log(humanChoice);

    // we get back value inside the variable
    return humanChoice;
}


// Step 3: Declare the players score variables
// Your game will keep track of the players score.
// You will write variables to keep track of the players score.
// Add score variables here:
// Make variable for human score
// Make variable for computer score
let computerScore = 0;

let humanScore = 0;





// Step 4: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes
// the human and computer player choices as arguments, plays a single round,
// increments the round winner’s score and logs a winner announcement.

// Make variable that holds computerChoice (could use the function as the parameter)?
let computerSelection;

// Make variable that holds humanChoice (could use function as parameter)?
let humanSelection;


// Play a Round of RPS, need two parameters
    function playRound(computerChoice, humanChoice) {
     
        if // Computer Win Scenarios
        ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock") ){

            // When Computer wins, current round shows it, score updates
            currentRound.textContent = (`Current Round: Computer wins! ${computerChoice} beats ${humanChoice}`);
            computerScoreText.textContent = (`${++computerScore}`);

            // When computer reaches 5 points
            if (computerScore === 5) {
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
                gameOver.textContent = (`Too bad, looks like the computer got you this time, try again!`);
                gameScores.appendChild(playAgain);
            }
    
        } else if // Human Win Scenarios
        ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ){

            // When human wins, current round shows it, score updates
            currentRound.textContent = (`Current Round: You win! ${humanChoice} beats ${computerChoice}`);
            humanScoreText.textContent = (`${++humanScore}`);

            // When human reaches 5 points
            if (humanScore === 5) {
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
                gameOver.textContent = (`Congratulations, you have secured victory! Go for another win!`);
                gameScores.appendChild(playAgain);
            }

        } else // Tie Scenarios or Logic Errors DX
            {
            currentRound.textContent = (`Current Round: It's a tie! Try again!`);
            }
}

// Add score variables here inside this

// Step 5: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls

// DOM Manipulation Section

// Add eventListeners to each button -> play a round, will use event delegation
let gameButtons = document.querySelector("#gameButtons");
console.log(gameButtons);

gameButtons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            computerSelection = getComputerChoice();
            humanSelection = target.id;
            playRound(computerSelection, humanSelection);
            break;

        case "paper":
            computerSelection = getComputerChoice();
            humanSelection = target.id;
            playRound(computerSelection, humanSelection);
            break;

        case "scissors":
            computerSelection = getComputerChoice();
            humanSelection = target.id;
            playRound(computerSelection, humanSelection);
            break;
    }
});



// Variables to reference each choice button
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

// Display current round results
let currentRound = document.querySelector("#currentRound")
console.log(currentRound);

// Span element for holding scores, only update number
let computerScoreText = document.querySelector("#computerScore");
computerScoreText.textContent = (`${computerScore}`);
console.log(computerScoreText);

let humanScoreText = document.querySelector("#humanScore");
humanScoreText.textContent = (`${humanScore}`);
console.log(humanScoreText);

// Winner Announcement reference
let gameOver = document.querySelector("#gameOver");
console.log(gameOver);

// Play Again Button added by JS
let gameScores = document.querySelector("#gameScores");
console.log(gameScores);
let playAgain = document.createElement("button");
playAgain.textContent = (`Play Again?`);
console.log(playAgain);

// playAgain button to reset score, buttons, and announcement
playAgain.addEventListener("click", () => {
    currentRound.textContent = (`This area will show who won the round,displaying both your and the computer choice`);
    computerScore = 0;
    computerScoreText.textContent = (`${computerScore}`);
    humanScore = 0;
    humanScoreText.textContent = (`${humanScore}`);
    gameOver.textContent = (`Who will reach 5 points first?`)
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    gameScores.removeChild(playAgain);
});


// Logic Errors / Potential Improvements
// (-) If the prompt returns null, the game continues saying that null ties with computerChoice
// (-) If prompt returns non-choices, the game logic considers it a tie
// (+) Place the case insensitive line to the getHumanChoice() istead of the playRound()
// (?) I wonder if we can just put every function inside playGame()
// 05/10/2026 - Graphical User Interace Feature
// (+) For computer choice, switch from ifelse use to array use
// (+) Put variables that reference the DOM at the top, error occur if called before declared
