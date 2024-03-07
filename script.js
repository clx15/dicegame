function diceRoll(){
    const images1 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png', ]
    const random1 = Math.floor(Math.random()*images1.length)
    document.getElementById("img1").src = "images/" + images1[random1];
}

function diceRoll2(){
    const images2 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png', ]
    const random2 = Math.floor(Math.random()*images2.length)
    document.getElementById("img2").src = "images/" + images2[random2];
}
function rollTheDice(){
    diceRoll();
    diceRoll2();
}

document.getElementById("diceRoller").addEventListener("click", rollTheDice);