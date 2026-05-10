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
// let computerSelection = getComputerChoice();

// Make variable that holds humanChoice (could use function as parameter)?
// let humanSelection = getHumanChoice();


// Make new function that plays a round of 'Rock, Paper, Scissors', it needs two parameters
    function playRound(computerChoice, humanChoice) {

        // Make human choice variable case insensitive; type correct word, will work
        humanChoice = humanChoice.toLowerCase();
        //console.log(humanChoice);

        // With the two choices, consider the rules of the game, who will win/lose? Can there be a tie?
        if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock") ){ //all cases where computer wins
            computerScore = ++computerScore;
            let result = (`You lose, ${computerChoice} beats ${humanChoice}! Computer gets point!`);
            let scoreboard = (`Computer Score: ${computerScore} \t Human Score: ${humanScore}`);
            console.log(result);
            console.log(scoreboard);
            return result;
        } else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper") ){ //all cases where human wins
            humanScore = ++humanScore;
            let result = (`You win, ${humanChoice} beats ${computerChoice}! Human gets point!`);
            let scoreboard = (`Computer Score: ${computerScore} \t Human Score: ${humanScore}`);
            console.log(result);
            console.log(scoreboard);
            return result;
        } else { //when there is no win or loss, we tied!
            let result = (`${humanChoice} ties with ${computerChoice}! No one gets point!`);
            let scoreboard = (`Computer Score: ${computerScore} \t Human Score: ${humanScore}`);
            console.log(result);
            console.log(scoreboard);
            return result;
        }
        // Return a statement of who won that round
        // Whoever is the winner earns a point! 
}

// Add score variables here inside this

// Step 5: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls





// Logic Errors / Potential Improvements
// (-) If the prompt returns null, the game continues saying that null ties with computerChoice
// (-) If prompt returns non-choices, the game logic considers it a tie
// (+) Place the case insensitive line to the getHumanChoice() istead of the playRound()
// (?) I wonder if we can just put every function inside playGame()
// 05/10/2026 - Graphical User Interace Feature
// (+) For computer choice, switch from ifelse use to array use

