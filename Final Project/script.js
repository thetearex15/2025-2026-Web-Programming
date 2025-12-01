function giveQuote() {
    const quotes = [
    "No one knows what he can do till he tries.",
    "One must be poor to know the luxury of giving.",
    "The average man, who does not know what to do with his life, wants another one which will last forever."
    ];
    var currQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const origLetterToNumber = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
        'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
        'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
        'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25,
        'Z': 26
        };
    const changeToArray = Object.entries(origLetterToNumber);
    const shuffledArray = changeToArray.sort(() => Math.random() - 0.5);
    const shuffledLetterToNumber = Object.fromEntries(shuffledArray);
    //change, this is just a test
    var quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = currQuote;
}
