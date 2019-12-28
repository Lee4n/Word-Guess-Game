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

// Set up the answer array with for loop
var answer = [];
var guessedLetter = [];
var remain = 10;
for (let i = 0; i < word.length; i++) {
    answer[i] = ["_"];
}
document.getElementById("answer").innerHTML = answer.join(" ");

// The game loop
document.onkeypress = function (keyObject) {
    if (remain > 0) {
        if (word.includes(keyObject.key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == keyObject.key) {
                    answer[i] = keyObject.key;
                    document.getElementById("answer").innerHTML = answer.join(" ");
                }
            }
        } else {
            if (!guessedLetter.includes(keyObject.key)) {
                remain--;
                document.getElementById("remain").innerHTML = remain;

                guessedLetter.push(keyObject.key);
                document.getElementById("guessedLetter").innerHTML = guessedLetter;
            }
        }
    }
};

