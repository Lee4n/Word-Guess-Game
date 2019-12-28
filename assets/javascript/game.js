// make array of words that will be randomly chosen #########PLACEHOLDERS FOR NOW###########
var wordBank = [
    'dog',
    'cat',
    'monkey',
    'water',
    'earth',
    'fire',
    'air'
];
// choose a random word from the word bank
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
document.getElementById("currentWord").innerHTML = word;
// Set up the answer array with for loop
var answer = [];
for (let i = 0; i < word.length; i++) {
    answer[i] = ["_"];
}
document.getElementById("answer").innerHTML = answer.join(" ");
// The game loop

// Get a guess from the player

// Exit the game loop

// Update the game state with the guess