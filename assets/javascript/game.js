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
console.log(word);
// Set up the answer array wih for loop
var answer = [];
for (let i = 0; i < word.length; i++) {
    answer[i] = ["_"];
}
console.log(answer);
// The game loop

// Show the player their progress

// Get a guess from the player

// Exit the game loop

// Update the game state with the guess