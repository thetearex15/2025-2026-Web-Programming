function giveQuote() {
    const quotes = [
    "No one knows what he can do till he tries.",
    "One must be poor to know the luxury of giving.",
    "The average man, who does not know what to do with his life, wants another one which will last forever."
    ];
    var currQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const origLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const shuffledArray = origLetter.sort(() => Math.random() - 0.5);
    var newQuote = "";
    var parentElement = document.getElementById("textBoxes");
    //this doesnt work but i'd like it to reset the page when you click new game again
        //let playedOnce = 0;
        //if (playedOnce > 0)
            //parentElement.remove(parentElement.children);
    //converts letter to the random number, all letters are the same number
    for (let i = 0; i < currQuote.length; i++) {
        let foundChar = false;
        if (currQuote.charAt(i) == " ") {
            newQuote += " _ ";
            continue;
        }
        for (let j = 0; j < shuffledArray.length; j++) {
            if (currQuote.toUpperCase().charAt(i) == shuffledArray[j]) {
                newQuote += j+1;
                newQuote += " ";
                var newTextBoxes = document.createElement("input");
                newTextBoxes.setAttribute("maxlength", "1");
                newTextBoxes.setAttribute("size", "1");
                newTextBoxes.setAttribute("id", j.toString());
                parentElement.appendChild(newTextBoxes);
                foundChar = true;
                break;
            }
        }
        if (foundChar == false) {
            newQuote += currQuote.charAt(i);
        }
    }
    var quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = newQuote;
    //playeOnce += 1;
    console.log(newQuote);
}

