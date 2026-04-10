# odin_rock-paper-scissors
In The Odin Project foundations course, this is a project within the JavaScript Basics section.

Project Scope:
This is JavaScript focused project aimed at writing the logic to play the game,
"Rock, Paper, Scissors".

Concepts Used:
- declaring functions, invoking functions, function parameters/arguments, return statement
- considering global and local scope
- using if else statements
- using back ticks for string statements, makes it easy to include variables/functions
- using console.log throughout the project to verify functions worked and variable value assignments
- using console.log to display to player the choices made, who won or lost and after 5 rounds, who won the game
- use git commands to keep track of project changes and push project to github
- problem solving, understanding how we were breaking down the game into smaller pieces
- using pseudocode to make sure I understand the sub problems and how I could solve it and
writing it in plain english so coming back to it at a later time is easier

Logic Errors Encountered:
- When prompt returns null (prompt cancelled), game continues and states that null ties with computerChoice
- If player types a non-choice (not rock, paper, scissors), game continues and it ties with computerChoice


Project Considerations:
- The case insensitivity could be placed inside getHumanChoice() instead of playRound()
- Place all functions inside playGame()