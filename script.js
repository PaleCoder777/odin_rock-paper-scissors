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
    let humanScore;

    // Make variable for computer score
    let computerScore;

    // Scores start at 0
    humanScore = 0;
    computerScore = 0;


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
        // Declare variables despite scenario
        let result;
        let scoreboard;
        
        if // Computer Win Scenarios
        ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock") ){
            ++computerScore;
            // When Computer wins, current round shows it
            currentRound.textContent = (
                `Current Round: Computer wins! ${computerChoice} beats ${humanChoice}`
            );
    
        } else if // Human Win Scenarios
        ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ){
            ++humanScore;
            // When human wins, current round shows it
            currentRound.textContent = (
                `Current Round: You win! ${humanChoice} beats ${computerChoice}`
            );

        } else // Tie Scenarios or Logic Errors DX
            {
            currentRound.textContent = (
                `Current Round: It's a tie! Try again!`
            );
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

// Display current round results
let currentRound = document.querySelector("#currentRound")
console.log(currentRound);




// Logic Errors / Potential Improvements
// (-) If the prompt returns null, the game continues saying that null ties with computerChoice
// (-) If prompt returns non-choices, the game logic considers it a tie
// (+) Place the case insensitive line to the getHumanChoice() istead of the playRound()
// (?) I wonder if we can just put every function inside playGame()
// 05/10/2026 - Graphical User Interace Feature
// (+) For computer choice, switch from ifelse use to array use

