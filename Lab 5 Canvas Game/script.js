const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const myImg = new Image();
myImg.src = "./Pictures/mole.png";
myImg.onload = function() {
    ctx.drawImage(myImg, 0, 0, canvas.width/10, canvas.height/10);
}

const badImg = new Image();
badImg.src = "./Pictures/bomb.png";

var gameStart = setInterval(drawFunction, 1000);
let x = 0, y = 0, score = 0;

function drawFunction()     {
   // Clear the canvas by drawing a clearRect
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     x = Math.random() * canvas.width - 25;       
     y = Math.random() * canvas.height - 25;
     a = Math.random() * canvas.width - 25;
     b = Math.random() * canvas.height - 25;
    if (Math.random() > .75) {
        ctx.drawImage(badImg, a, b, canvas.width/10, canvas.height/10);
    }
    if (Math.random() > .25) {
        ctx.drawImage(myImg, x, y, canvas.width/10, canvas.height/10);
    }
}

canvas.onmousedown = function(event) {         
    if (event.clientX > x && event.clientX < x + canvas.width/10 && event.clientY > y && event.clientY < y + canvas.width/10){
        score++;
    }
    if ((event.clientX > a && event.clientX < a + canvas.width/10 && event.clientY > b && event.clientY < b + canvas.width/10)){
        alert("Score: " + score);
        clearInterval(gameStart);
    }
}

