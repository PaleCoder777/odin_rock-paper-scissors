// Foundations / JavaScript Basics / Rock, Paper, Scissors Project
// Goal: Create a rock, paper, scissors game in the console,
// in which 5 rounds can be done and the score is shown.

// Step 1: Write the logic to get the computer choice
// Declare function that gives one of three values (rock, paper, scissors) as the computer choice

function getComputerChoice() {
    // make a variable that holds a randomn integer value from 0-100
    let randomNumber = Math.random() * 100;
    //console.log(randomNumber);
    
    // we should round the random number we get
    let roundedNumber = Math.round(randomNumber);
    //console.log(roundedNumber);

    // make another variable to hold computer choice
    let computerChoice;

    // depending on rounded, random number, we put rock || paper || scissor in the computer choice (0-33, 67-100)
    if (roundedNumber < 34) {
        computerChoice = "rock";
    } else if (roundedNumber > 66) {
        computerChoice = "scissors";
    } else {
        computerChoice = "paper";
    }
    //console.log(computerChoice);

    // in the end, we get this choice, and this will be the computer choice
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
// !!! MOVED INSIDE playGame() !!!




// Step 4: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes
// the human and computer player choices as arguments, plays a single round,
// increments the round winner’s score and logs a winner announcement.

// Make variable that holds computerChoice (could use the function as the parameter)?
let computerSelection = getComputerChoice();

// Make variable that holds humanChoice (could use function as parameter)?
let humanSelection = getHumanChoice();


// Make new function that plays a round of 'Rock, Paper, Scissors', it needs two parameters
// !!! MOVED INSIDE playGame() !!!

// Add score variables here inside this

// Step 5: Write the logic to play the entire game
// Your game will play 5 rounds. You will write a function named playGame that calls
// playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Make new function, playGame()
function playGame() {
    // Add playRound() to  this function
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

    // Add score variables here:
    // Make variable for human score
    let humanScore;

    // Make variable for computer score
    let computerScore;

    // Scores start at 0
    humanScore = 0;
    computerScore = 0;

    // needs to play 5 rounds, need to make new choice every round
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    
    // We need to put the score in here as well, keep track of it (score above)
    // declare a winner after the 5 rounds, so compare score, who is higher
    if (humanScore > computerScore) {
        let declaration = (`Congratulations human, you have won!`);
        console.log(declaration);
    } else if (humanScore < computerScore) {
        let declaration = (`Uh oh, you have lost to the computer!`);
        console.log(declaration);
    } else {
        let declaration = (`No winner, no loser, try again!`);
        console.log(declaration);
    }
}


console.log(`This is the computer selection - ${computerSelection} `);
console.log(`This is the human selection - ${humanSelection} `);
playGame();

// Logic Errors / Potential Improvements
// (-) If the prompt returns null, the game continues saying that null ties with computerChoice
// (+) Place the case insensitive line to the getHumanChoice() istead of the playRound()
