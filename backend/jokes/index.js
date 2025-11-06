const jokes = require("give-me-a-joke");
const colors = require("colour");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});