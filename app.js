//! ---- DOM Links to HTML ID's ---- 
const rollDice = document.querySelector("#rollBtn")
const change = document.querySelector("#switchBtn")
const theMessage = document.querySelector("#message")
const currentScore = document.querySelector("#scoreUpdate")

//! ---- Variables storing Win/Loss Messages
const winMsg = "You Win!!!\nClick Roll the Dice to try again."
const loseMsg = "You Lose!!!\nClick Roll the Dice to try again."

//! ---- Modifiable variables ----
let gameScore = 0;
let fail = 1;
let winValue = 20;
let gameOver = true;

//! ---- Array storing Dice images ----
let diceSide = {
    d0:"./images/0.png",
    d1:"./images/1.png",
    d2:"./images/2.png",
    d3:"./images/3.png",
    d4:"./images/4.png",
    d5:"./images/5.png",
    d6:"./images/6.png"
}

//! ---- Functions Setup ----
//!  --  Dice Roll Logic  --
const rollDie = ()=>{
    ranDie = Math.floor((Math.random()*6)+1)
    document.getElementById("dice").src = diceSide["d" + ranDie];
    gameScore = (gameScore + ranDie);
    currentScore.textContent = gameScore;

    if (ranDie == fail && gameScore <= winValue) {
        gameOver = true
        // document.getElementById("dice").src = diceSide["d0"];
        theMessage.innerText = loseMsg
        document.getElementById("message").style.backgroundColor = "red"
        document.getElementById("message").style.color = "white"
    }
    else if (gameScore >= winValue) {
        gameOver = true
        // document.getElementById("dice").src = diceSide["d0"];
        theMessage.innerText = winMsg
        document.getElementById("message").style.backgroundColor = "green"
        document.getElementById("message").style.color = "white"
    }
    else {
        theMessage.textContent = "Keep on Rollin'"
        document.getElementById("message").style.backgroundColor = "wheat"
        document.getElementById("message").style.color = "blueviolet"
    }
}
//!  --  Ensures Score stays up  -- 
const checkGameStatus = ()=>{
    if (gameOver == true) {
        gameScore = 0;
        currentScore.textContent = 0;
        gameOver = false
        rollDie()
    }
    else {
        rollDie()
    }
}

//! ---- Event Listener that checks for Button Click ----
rollDice.addEventListener("click", checkGameStatus)
