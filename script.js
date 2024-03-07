let random1 = 0;
let random2 = 0;

function diceRoll(){
    const images1 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png', ]
    random1 = Math.floor(Math.random()*images1.length)
    document.getElementById("img1").src = "images/" + images1[random1];
    getWinner();
}

function diceRoll2(){
    const images2 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png', ]
    random2 = Math.floor(Math.random()*images2.length)
    document.getElementById("img2").src = "images/" + images2[random2];
    getWinner();
}
function rollTheDice(){
    diceRoll();
    diceRoll2();
}

document.getElementById("diceRoller").addEventListener("click", rollTheDice);

function getWinner(){
    if (random1 === random2){
        document.getElementById("winner").innerText = "Draw";
    } else if (random1 > random2) {
        document.getElementById("winner").innerText = "Player 1 won";
    } else {
        document.getElementById("winner").innerText = "Player 2 won";
    }
}
