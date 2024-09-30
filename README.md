# Rock, Paper, Scissors Game - JavaScript

This is a simple implementation of the classic "Rock, Paper, Scissors" game, where a human player competes against the computer. The game is played in 5 rounds, and the player with the highest score at the end wins.

## How It Works

- The player chooses between "Rock," "Paper," and "Scissor" by selecting a number corresponding to their choice:
  - 0 for Rock
  - 1 for Paper
  - 2 for Scissor
- The computer randomly picks its choice from "Rock," "Paper," and "Scissor."
- After both selections are made, the winner of the round is determined based on the rules:
  - Rock beats Scissor
  - Paper beats Rock
  - Scissor beats Paper
- Scores are tracked after each round, and after 5 rounds, the overall winner is announced.

## Game Rules

- **Rock** beats **Scissor**
- **Paper** beats **Rock**
- **Scissor** beats **Paper**
- If both the player and computer choose the same option, it's a draw.

## How to Play

1. Run the game.
2. When prompted, enter a number:
   - 0 for Rock
   - 1 for Paper
   - 2 for Scissor
3. The computer will randomly pick its choice.
4. The game will announce the result for each round (win, lose, or draw).
5. After 5 rounds, the overall winner is declared.

## Code Overview

### Functions

- **`getComputerChoice()`**: Randomly returns either "Rock", "Paper", or "Scissor" for the computer's choice.
- **`getHumanChoice()`**: Prompts the player to select a number (0, 1, or 2) corresponding to Rock, Paper, or Scissor. The input is validated before proceeding.
- **`playRound()`**: Runs a single round of the game, compares the human's choice with the computer's choice, updates the scores, and displays the result (win, lose, or draw).
- **`playGame()`**: Runs the game for 5 rounds, tracks the scores, and announces the overall winner after all rounds are played.

### Scores

- The scores are tracked with two variables: `humanscore` and `computerscore`. After each round, the scores are updated and displayed.

## Running the Game

To run the game, simply open the JavaScript file in a browser environment and follow the prompts to play. You will see the results for each round and the final winner displayed in pop-up alerts.

---

Enjoy playing Rock, Paper, Scissors!
