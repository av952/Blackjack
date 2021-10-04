var firtsCard;
var secondCard;
var cards = [];
var cards_PC=[];
var isAlive;
var sum;
var sumpc;
var mensaje = "";
var playerEl = document.querySelector("#player-el");
var moreCards = false;

var player = {
    jugador: "alejo",
    fichas: 100
}

var messageEl = document.getElementById("message-el");
//var sumEl = document.getElementById("sum-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
var cardsPC = document.querySelector("#cards-pc");

var btnNueva = document.querySelector(".newcard");
var btnStart = document.querySelector(".start");
btnNueva.addEventListener("click", newCard);
btnStart.addEventListener("click", start);

playerEl.textContent = player.jugador + ": $" + player.fichas;

btnNueva.disabled = true;

function start() {

    if (!moreCards) {
        player.fichas -= 20;
        playerEl.textContent = player.jugador + ": $" + player.fichas;
        isAlive = true;
        moreCards=true;
        firtsCard = getRandomCard();
        secondCard = getRandomCard();
        sum = firtsCard + secondCard;
        cards = [firtsCard, secondCard];
        btnNueva.disabled = !isAlive;
        //btnStart.disabled = isAlive;
        renderGame();
        console.log("alive");
        PcCards();

    }

    if (moreCards) {
        btnStart.textContent = "NO MORE CARDS";

    } else {

    }
}



function renderGame() {
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Your Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "/";
    }

    if (sum <= 20) {
        mensaje = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        mensaje = "Wohoo! You've got Blackjack! 🥳";
        player.fichas += 40;
        playerEl.textContent = player.jugador + ": $" + player.fichas;
        moreCards=false;
        alive();
    } else {
        mensaje = "You're out of the game! 😭";
        moreCards=false;
        alive();
        btnStart.textContent = "NEW GAME";
    }
    messageEl.textContent = mensaje;

}

function PcCards(){

    firtsCard = getRandomCard();
    secondCard = getRandomCard();
    sumpc = firtsCard+secondCard;

    cardsPC.textContent="PC Cards: ";
    for(let i=0;i<cardspc.length;i++){
        cardspc.textContent=""
    }
    

}

function newCard() {
    playerEl.textContent = player.jugador + ": $" + player.fichas;
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();

}

function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
}

function alive() {
    isAlive = false;
    btnStart.disabled = isAlive;
    btnNueva.disabled = !isAlive;
}






