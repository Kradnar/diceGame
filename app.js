const rollDice = document.querySelector("#rollBtn")
const theMessage = document.querySelector("#message")
const currentScore = document.querySelector("#scoreUpdate")


let gameScore = 0;
let fail = 1;
let winValue = 20;

let gameOver = false;


let diceSide = {
    d1:"./images/1.png",
    d2:"./images/2.png",
    d3:"./images/3.png",
    d4:"./images/4.png",
    d5:"./images/5.png",
    d6:"./images/6.png"
}

const rollDie = ()=>{
    console.log("clicked")
    ranDie = Math.floor((Math.random()*6)+1)
    document.getElementById("dice").src = diceSide["d" + ranDie];
    console.log(ranDie);
    gameScore = (gameScore + ranDie);
    console.log(gameScore);
    currentScore.textContent = gameScore

    if (ranDie == fail && gameScore <= winValue) {
        console.log("fail");
        gameScore = 0;
        currentScore.textContent = 0;
        theMessage.textContent = "You Lose!!! Click Roll the Dice to try again."
    }
    else if (gameScore >= winValue) {
        console.log("win");
        gameScore = 0;
        currentScore.textContent = 0;
        theMessage.textContent = "You Win!!! Click Roll the Dice to try again."
    }
    else {
        theMessage.textContent = "Keep on Rollin'"
    }
}


rollDice.addEventListener("click", rollDie)
