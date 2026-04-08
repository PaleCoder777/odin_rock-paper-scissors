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

// Step 2: Write the logic to get the human choice
// Your game will be played by a human player.
// You will write a function that takes the user choice and returns it.

// Declare new function, getHumanChoice()
function getHumanChoice() {
    // make new variable that will hold the player choice
    let humanChoice;

    // since it is player choice, ask player what they will pick (rock || paper || scissor), put in variable
    humanChoice = prompt(`Pick one of the following: "Rock", "Paper", Scissor"`, "");
    console.log(humanChoice);

    // we get back value inside the variable
}


console.log( getComputerChoice() );
getHumanChoice();