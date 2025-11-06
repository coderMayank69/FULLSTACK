// guessing game


let maxNumber = parseInt(prompt("enter your maximum number"));
while (!maxNumber) {
  maxNumber = parseInt(prompt("Please enter a valid maximum number"));
}

let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let guess = prompt("Enter your guess or 'q' to quit:");

let attempts = 1;
while (parseInt(guess) != randomNumber) {

  
  if (guess == 'q') {
    break;
  }
   {
    if ((guess) < randomNumber) {
      guess = parseInt(prompt("Too low! Try again."));
      attempts++;
    } else if ((guess) > randomNumber) {
      guess = parseInt(prompt("Too high! Try again."));
      attempts++;
    }else {
      guess = parseInt(prompt("Invalid input. Please enter a number or 'q' to quit."));
    }

  }
}
if (guess == 'q') {
  console.log("You quit the game.");
} else {
  console.log("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");
}

