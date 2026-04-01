# rock-paper-scissors-02

 Rock Paper Scissors (JavaScript)

# Overview

This is my first JavaScript project built as part of my learning journey.

The project is a simple Rock, Paper, Scissors game played entirely in the browser console. The user plays against the computer for 5 rounds, and the final winner is determined based on the scores.


# Features

- Random computer choice using JavaScript logic
- User input using "prompt()"
- Case-insensitive input handling (e.g. "ROCK", "rock", "Rock")
- Score tracking system
- 5-round game loop
- Final result display after all rounds


# What I Learned

While building this project, I practiced and improved my understanding of:

- Functions and how to structure code
- Conditional statements ("if/else")
- Loops ("for" loop)
- Working with user input
- Debugging and fixing errors
- Breaking down problems using pseudocode


# How It Works

1. The computer randomly selects:
   - Rock, Paper, or Scissors
2. The user inputs their choice through a prompt
3. The game compares both choices
4. A winner is determined for each round
5. Scores are updated accordingly
6. After 5 rounds, the final winner is displayed in the console


# How to Run

1. Open the HTML file in your browser
2. Right-click and select Inspect
3. Go to the Console tab
4. Follow the prompts to play the game


# Project Structure

- "index.html" → Basic HTML file linking JavaScript
- "script.js" → Contains all game logic


# Future Improvements

- Add a graphical user interface (GUI)
- Replace "prompt()" with buttons
- Display results directly on the webpage
- Improve user experience and design


# Acknowledgment

This project was completed as part of The Odin Project Foundations course.


# Note

This is a beginner project focused on logic and problem-solving. Future versions will include more advanced features and improvements.


# Rock Paper Scissors Pseudocode

My steps are below:



# 1. Computer choice

create function getComputerChoice

generate random number between 0 and 1

if number < 0.33 → return "rock"
else if number < 0.66 → return "paper"
else → return "scissors"



# 2. Human choice

create function getHumanChoice

ask user for input using prompt

return the input


# 3. Scores

create variable humanScore = 0
create variable computerScore = 0



# 4. Play one round

create function playRound(humanChoice, computerChoice)

convert humanChoice to lowercase

if humanChoice equals computerChoice
    print "Draw"

else if humanChoice is "rock" and computerChoice is "scissors"
    increase humanScore
    print "You win"

else if humanChoice is "paper" and computerChoice is "rock"
    increase humanScore
    print "You win"

else if humanChoice is "scissors" and computerChoice is "paper"
    increase humanScore
    print "You win"

else
    increase computerScore
    print "You lose"



# 5. Play full game

create function playGame

repeat 5 times:
    get human choice
    get computer choice
    call playRound

after 5 rounds:
    if humanScore > computerScore
        print "You won the game"

    else if computerScore > humanScore
        print "Computer won the game"

    else
        print "It's a tie"


## Developer Note

This is my first JavaScript project.

I struggled through the logic, got stuck multiple times, and gradually understood how everything connects.

This project represents my starting point, and I’ll continue improving from here.
