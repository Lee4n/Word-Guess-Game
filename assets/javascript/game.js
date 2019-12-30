// assign wins start value
var wins = 0;
//reset each value of the variable to default after a win by calling the setLabels function
var word;
var answer;
var guessedLetter;
var remain;
// calling setLabels function
setLabels();
//this function chooses a word from the word bank array @ random
function chooseWord() {
    var wordBank = [
        'dog',
        'cat',
        'monkey',
        'water',
        'earth',
        'fire',
        'air'
    ];
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}
// answer is hidden by an array of underscores
function hideAnswer() {
    var answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
}
// 
function setLabels() {
    word = chooseWord();
    answer = hideAnswer();
    guessedLetter = [];
    remain = 10;
    document.getElementById("guessedLetter").innerHTML = "";
    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("remain").innerHTML = remain;
}
// this function begins after a key event
document.onkeypress = function (keyObject) {

    if (remain > 0) {
        if (keyObject.keyCode >= 97 && keyObject.keyCode <= 122) {
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
    } else {
        setLabels();
        if (wins > 0) {
            wins--;
            document.getElementById("wins").innerHTML = wins;
            setLabels();
        }
    }
    // icrements win counter by 1 every win
    if (answer.join('') == word) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        setLabels();
    }
};

