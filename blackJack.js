var firtsCard;
var secondCard;
var firtsCard_pc;
var secondCard_pc;
var cards = [];
var cards_PC = [];
var isAlive;
var sum;
var sumpc;
var mensaje = "";
var moreCards = false;

var player = {
    jugador: "alejo",
    fichas: 100
}

//var sumEl = document.getElementById("sum-el");
var messageEl = document.getElementById("message-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
var cardsPC = document.querySelector("#cards-pc");
var playerEl = document.querySelector("#player-el");

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
        moreCards = true;

        firtsCard = getRandomCard();
        secondCard = getRandomCard();
        sum = firtsCard + secondCard;
        cards = [firtsCard, secondCard];

        firtsCard_pc = getRandomCard();
        secondCard_pc = getRandomCard();
        sumpc=firtsCard_pc+secondCard_pc;
        cards_PC = [firtsCard_pc,secondCard_pc];
        btnNueva.disabled = !isAlive;

        PcCards();
        renderGame();

    } else {

        
        btnNueva.disabled = true;
        
        moreCards = false;
        newCarPC();
        condicionParaGanarPC();
        btnStart.textContent = "NEW GAME";
    }
}


function renderGame() {

    sumEl.textContent = "Your Sum: " + sum + " // " + " PC sum: " + sumpc;

    cardsEl.textContent = "Your Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "/";
    }

    condicionParaGanar();
}

function condicionParaGanar() {

    console.log("paraganar");

    if (moreCards == false) {

        mensaje = "Do you want to draw a new card? 🙂";
    } else if (sum <= 20) {
        mensaje = "Do you want to draw a new card? 🙂";

    } else if (sum === 21 || sumpc > 21) {
        console.log("sumpc>21");
        mensaje = "Wohoo! You've got Blackjack! 🥳";
        player.fichas = 40;
        playerEl.textContent = player.jugador + ": $" + player.fichas;
        moreCards = false;
        btnStart.textContent("NEW GAME");
        PcCards();
        alive();
    } else {
        mensaje = "You're out of the game! 😭";
        moreCards = false;
        alive();
        btnStart.textContent = "NEW GAME";
    }
    messageEl.textContent = mensaje;
}
function condicionParaGanarPC() {

    if (sumpc == 21 || sum > 21 || sumpc > sum && sumpc < 21) {
        mensaje = "You're out of the game! 😭";
    } else {
        mensaje = "You wont";
    }
    messageEl.textContent = mensaje;
}

function PcCards() {

    btnStart.textContent = "NO MORE CARDS";

    cardsPC.textContent = "PC cards: ";

    for (let i = 0; i < cards_PC.length; i++) {
        console.log("for");
        cardsPC.textContent += cards_PC[i] + "/";
    }



    //for (let i of cards_PC) sumpc += i;

}

function newCard() {
    playerEl.textContent = player.jugador + ": $" + player.fichas;
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    PcCards();
    renderGame();
}

function newCarPC() {

    for (let i = 0; sumpc <= 18; i++) {
        let cardpc = getRandomCard();
        sumpc += cardpc;
        cards_PC.push(cardpc);
    }

    sumEl.textContent = "Your Sum: " + sum + " // " + " PC sum: " + sumpc;
    console.log(cards_PC);
    PcCards();
}

function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
}

function alive() {
    isAlive = false;
    btnStart.disabled = isAlive;
    btnNueva.disabled = !isAlive;
}






