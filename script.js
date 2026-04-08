// Foundations / JavaScript Basics / Rock, Paper, Scissors Project
// Goal: Create a rock, paper, scissors game in the console, in which 5 rounds can be done and the score is shown.

// Step 1: Write the logic to get the computer choice

// Declare function that gives one of three values (rock, paper, scissors) as the computer choice

function getComputerChoice() {
    // make a variable that holds a randomn integer value from 0-100, we should probably round it
    let randomNumber = Math.random() * 100;
    let roundedNumber = Math.round(randomNumber);
    console.log(randomNumber);
    console.log(roundedNumber);
    // make another variable, that depending on random number, will equal rock || paper | scissors
    // in the end, we get this choice, and this will be the computer choice
}

getComputerChoice();