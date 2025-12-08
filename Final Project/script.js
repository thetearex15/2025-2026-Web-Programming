//function giveQuote() {
//     const quotes = [
//     "No one knows what he can do till he tries.",
//     "One must be poor to know the luxury of giving.",
//     "The average man, who does not know what to do with his life, wants another one which will last forever."
//     ];
//     var currQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     const origLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     const shuffledArray = origLetter.sort(() => Math.random() - 0.5);
//     var newQuote = "";
//     var parentElement = document.getElementById("textBoxes");
//     //this doesnt work but i'd like it to reset the page when you click new game again
//         //let playedOnce = 0;
//         //if (playedOnce > 0)
//             //parentElement.remove(parentElement.children);
//     //converts letter to the random number, all letters are the same number
//     for (let i = 0; i < currQuote.length; i++) {
//         let foundChar = false;
//         if (currQuote.charAt(i) == " ") {
//             newQuote += " _ ";
//             continue;
//         }
//         for (let j = 0; j < shuffledArray.length; j++) {
//             if (currQuote.toUpperCase().charAt(i) == shuffledArray[j]) {
//                 newQuote += j+1;
//                 newQuote += " ";
//                 var newTextBoxes = document.createElement("input");
//                 newTextBoxes.setAttribute("maxlength", "1");
//                 newTextBoxes.setAttribute("size", "1");
//                 newTextBoxes.setAttribute("id", j.toString());
//                 parentElement.appendChild(newTextBoxes);
//                 foundChar = true;
//                 break;
//             }
//         }
//         if (foundChar == false) {
//             newQuote += currQuote.charAt(i);
//         }
//     }
//     var quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.textContent = newQuote;
//     //playeOnce += 1;
//     console.log(newQuote);
// }
const words = ["christmas", "santa", "rudolph"];
var currWord = words[Math.floor(Math.random() * words.length)];
var blanks = "";
    for (let i = 0; i < currWord.length; i++) {
        blanks += "_ ";
    }
let incorrectGuesses = 1;
let newGame = 0;

function resetGame() {
    if (newGame > 0) {
        window.location.reload();
    }
    else {
        newGame += 1;
        startGame();
    }
}

function startGame() {
    //letter text box
    var letterGuess = document.createElement("input");
    letterGuess.setAttribute("maxlength", "1");
    letterGuess.setAttribute("size", "9");
    letterGuess.setAttribute("id", "letterInput");
    letterGuess.setAttribute("placeholder", "Guess a letter!");
    //letter submit button
    var letterButton = document.createElement("button");
    letterButton.addEventListener("click", function() { checkLetter(currWord, blanks); });
    letterButton.textContent = "Submit Letter";
    //word text box
    var wordGuess = document.createElement("input");
    wordGuess.setAttribute("size", "15");
    wordGuess.setAttribute("maxlength", currWord.length);
    wordGuess.setAttribute("id", "wordInput");
    wordGuess.setAttribute("placeholder", "Guess the word!");
    //word submit button
    var wordButton = document.createElement("button");
    wordButton.addEventListener("click", function() { checkWord(currWord, blanks); });
    wordButton.textContent = "Submit Word";
    //adding to page
    var addDiv = document.createElement("div");
    var parentElement = document.getElementById("textBoxes");
    parentElement.appendChild(letterGuess);
    parentElement.appendChild(letterButton);
    parentElement.appendChild(addDiv);
    parentElement.appendChild(wordGuess);
    parentElement.appendChild(wordButton);
    //adding blanks for the word
    var wordDisplay = document.getElementById("wordDisplay");
    wordDisplay.textContent = blanks;
    wordDisplay.style.fontSize = "64px";
}

function checkLetter(currWord) {
    if (incorrectGuesses === 8) {
        window.location.reload();
    }
    let letterGuess = document.getElementById("letterInput").value;
    for (let i = 0; i < currWord.length; i++) {
        if (letterGuess === currWord.charAt(i)) {
            console.log("Correct guess!");
            blanks = fillInLetters(letterGuess, currWord, blanks);
            document.getElementById("letterInput").value = "";
            return;
        }
    }
    alert("Incorrect letter!");
    addToLetterBank(letterGuess);
    progressImage();
}

function addToLetterBank(letterGuess) {
    var letterBank = document.getElementById("letterBank");
    letterBank.style.fontSize = "64px";
    letterBank.textContent += letterGuess + " ";
}

function fillInLetters(letterGuess, currWord) {
    var wordDisplay = document.getElementById("wordDisplay");
    for (let i = 0; i < currWord.length; i++) {
        if (letterGuess === currWord.charAt(i)) {
            //this i had to steal from the internet because strings are immutable in js
            let newBlanks = blanks.substring(0, i*2) + letterGuess + blanks.substring(i*2 + 1);
            blanks = newBlanks;
        }
    }
    wordDisplay.textContent = blanks;
    return(blanks)
}

function checkWord(currWord) {
    if (incorrectGuesses === 8) {
        window.location.reload();
    }
    let wordGuess = document.getElementById("wordInput").value.toLowerCase();
    if (wordGuess === currWord.toLowerCase()) {
        alert("You win! The word was: " + currWord);
        //fill in the blanks
        for (let i = 0; i < currWord.length; i++) {
            blanks = fillInLetters(currWord.charAt(i), currWord, blanks);
        }
        document.getElementById("wordInput").value = "";
    }
    else {
        alert("Incorrect word!");
        progressImage();
    }
}

function progressImage() {
    document.getElementById("letterInput").value = "";
    document.getElementById("wordInput").value = "";
    var image = document.getElementById("hangman");
    imageSrcBeginning = ".\\images\\hangman";
    incorrectGuesses += 1;
    imageSrcPath = imageSrcBeginning + incorrectGuesses + ".png";
    image.src = imageSrcPath;
    if (incorrectGuesses === 8) {
        alert("Game Over! The word was: " + currWord);
    }
}