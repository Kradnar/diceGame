let gameScore = 0;
let fail = 1;
let diceValue = 0;
let winValue = 20;
let gameOver = false;

const rollDice = document.querySelector("#roll")
const currentScore = document.querySelector("#score")

let diceSide = {
    d1:"./images/1.png",
    d2:"./images/2.png",
    d3:"./images/3.png",
    d4:"./images/4.png",
    d5:"./images/5.png",
    d6:"./images/6.png"
}

// rollDice.addEventListener("click", rollDie)
rollDice.addEventListener("click", ()=>{
    console.log("Roll clicked")
    ranDie = Math.floor((Math.random()*6)+1)
    document.getElementById("dice").src = diceSide["d" + ranDie];
});


const rollDie = ()=>{
    console.log("clicked")
    ranDie = Math.floor((Math.random()*6)+1)
    document.getElementById("dice").src = diceSide["d" + ranDie];
}


//! Seb code

// let rolledDie = {die1:"./images/die1.png", die2:"./images/die2.png", die3:"./images/die3.png", die4:"./images/die4.png", die5:"./images/die5.png", die6:"./images/die6.png"}

// const totalMsg = document.getElementById("totalMsg");
// const msg = document.getElementById("displayMsg");
// const rollButton = document.getElementById("roll");
// let totalAmount = 0

// const rollDie = () => {msg.innerHTML = "Try to get to 20. Hit roll";
//     ranDie = Math.floor((Math.random()*6)+1); totalMsg.innerText = totalAmount += ranDie;
//     document.getElementById("dieSide").src = rolledDie["die" + ranDie];
//     if (ranDie == 1 && totalAmount <=20){msg.innerText = "Fail! You rolled a 1! Try again";totalAmount = 0;}
//     if (totalAmount >= 20){msg.innerText = "Congratulations! You've Won! Hit Roll to try again"; totalAmount = 0;}}

// rollButton.addEventListener("click", rollDie)

