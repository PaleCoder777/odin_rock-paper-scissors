# odin_rock-paper-scissors
Source:
- The Odin Project, Foundations Course, JavaScript Basics, Project: Rock, Paper, Scissors

Project Scope:
- JavaScript Focus
- Creating "Rock, Paper, Scissors" game in the browser console


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

//NEW// 05/10/2026 - Adding GUI feature

Feature Scope:
- HTML, CSS, JavaScript
- Creating a graphical user interface for the Rock, Paper, Scissor game, removing the need for console, which allows for a more user friendly experience.

Concepts Used:
- created a "rps-ui" branch to work on a new feature without affecting the working "main" branch, then merged them after the feature was finished
- deleted the feature branch locally and on github
- Holding game choices inside an array and choosing an index pseudorandomly
- declaring variables that reference DOM nodes
- setting up eventlisteners so that the button the user selects is their choice and plays a round of RPS
- manipulating the DOM to display selections, scores, and winner instead of it being in the console
- using event delegation to have my gameButton section listen for click events instead of every button having a listener
- creating element IDs as needed when I need to reference them

Logic Errors Encountered:
- N/A

Project Considerations:
- previous logic errors will not be encountered with GUI approach
- refactoring functions using newly learned fundamentals
- DOM-referencing variables place at top of document to avoid calls before declarations

