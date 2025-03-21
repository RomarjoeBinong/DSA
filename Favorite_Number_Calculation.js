
// Declare a variable for the favorite number
const favNum = 12; // You can change this to any number

// Use a while loop to prompt the user to guess the number
let userGuess;
while (true) {
  userGuess = parseInt(prompt("Guess the favorite number:"));

  if (userGuess === favNum) {
    console.log("Correct! You guessed the favorite number.");
    break; // Exit the loop
  } else if (userGuess > favNum) {
    console.log("Too high! Try again.");
  } else if (userGuess < favNum) {
    console.log("Too low! Try again.");
  } else {
    console.log("Invalid input. Please enter a number.");
  }
}