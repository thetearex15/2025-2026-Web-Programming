function convertUSD() {
    const unConverted =    
          document.getElementById("USDcurrency").value;
    var answer = unConverted * 5.32;
    answer = answer.toFixed(2);
    document.getElementById("usdOutput").value = answer;
}

function convertBRL() {
    const reConvert =
            document.getElementById("BRLcurrency").value;
    var answer = reConvert / 5.32;
    answer = answer.toFixed(2);
    document.getElementById("brlOutput").value = answer;
}