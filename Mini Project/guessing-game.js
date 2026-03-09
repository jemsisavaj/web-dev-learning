// Mini Project: Number Guessing Game
// User has to guess the random number
// Type "quit" to exit the game

const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {

    if (guess === "quit") {
        console.log("User quit the game");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats!! Random number was", random);
        break;
    }

    else if (guess < random) {
        guess = prompt("Your guess was too small. Try again.");
    }

    else {
        guess = prompt("Your guess was too big. Try again.");
    }

}