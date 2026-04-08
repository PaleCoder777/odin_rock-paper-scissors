// Foundations / JavaScript Basics / Rock, Paper, Scissors Project
// Goal: Create a rock, paper, scissors game in the console, in which 5 rounds can be done and the score is shown.

// Step 1: Write the logic to get the computer choice

// Declare function that gives one of three values (rock, paper, scissors) as the computer choice

function getComputerChoice() {
    // make a variable that holds a randomn integer value from 0-100
    let randomNumber = Math.random() * 100;
    console.log(randomNumber);
    
    // we should round the random number we get
    let roundedNumber = Math.round(randomNumber);
    console.log(roundedNumber);

    // make another variable to hold computer choice
    let computerChoice;

    // depending on rounded, random number, we put rock || paper || scissor in the computer choice (0-33, 67-100)
    if (roundedNumber < 34) {
        computerChoice = "Rock";
    } else if (roundedNumber > 66) {
        computerChoice = "Scissor";
    } else {
        computerChoice = "Paper";
    }
    console.log(computerChoice);

    // in the end, we get this choice, and this will be the computer choice
    return computerChoice;
}

console.log( getComputerChoice() );