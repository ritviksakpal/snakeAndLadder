var playerScore1 = 0;
var playerScore2 = 0;
const diceSound = new Audio("./sounds/dice.mp3");
const turn = new Audio("./sounds/turn.mp3");
const snake = new Audio("./sounds/snake.mp3");
const ladder = new Audio("./sounds/ladder.mp3");
const won = new Audio("./sounds/won.mp3");
const gamebg = new Audio("./sounds/gamebg.mp3");
$("#btn-1").on("click", function () {
    gamebg.play();

    diceSound.play();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var diceScore = getRandomInt(6) + 1;
    playerScore1 = playerScore1 + diceScore;
    $("#dice").css("background-image", "url('./img/dice" + diceScore + ".png')");
    $("#diceScore").attr("value", diceScore);
    if (playerScore1 >= 30) {
        $("#btn-1").css("visibility", "hidden");
        $("#btn-2").css("visibility", "hidden");
        $("#winner").text("Player 1 win!");
        won.play();

    } else if (playerScore1 === 3) {
        ladder.play();
        playerScore1 = 16;
    } else if (playerScore1 === 5) {
        ladder.play();
        playerScore1 = 8;
    } else if (playerScore1 === 11) {
        ladder.play();
        playerScore1 = 26;
    } else if (playerScore1 === 17) {
        snake.play();
        playerScore1 = 4;
    } else if (playerScore1 === 19) {
        snake.play();
        playerScore1 = 7;
    } else if (playerScore1 === 20) {
        ladder.play();
        playerScore1 = 29;
    } else if (playerScore1 === 21) {
        snake.play();
        playerScore1 = 9;
    } else if (playerScore1 === 25) {
        snake.play();
        playerScore1 = 13;
    } else if (playerScore1 === 27) {
        snake.play();
        playerScore1 = 1;
    }
    $("#score1").attr("value", playerScore1);
    $("#point" + playerScore1).addClass("player1");
    setTimeout(() => {
        $("#point" + playerScore1).removeClass("player1");
    }, 1000);
});
$("#btn-2").on("click", function () {
    gamebg.play();

    diceSound.play();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var diceScore = getRandomInt(6) + 1;
    playerScore2 = playerScore2 + diceScore;
    $("#dice").css("background-image", "url('./img/dice" + diceScore + ".png')");
    $("#diceScore").attr("value", diceScore);
    if (playerScore2 >= 30) {
        $("#btn-1").css("visibility", "hidden");
        $("#btn-2").css("visibility", "hidden");
        $("#winner").text("Player 1 win!");
        won.play();

    } else if (playerScore2 === 3) {
        ladder.play();
        playerScore2 = 16;
    } else if (playerScore2 === 5) {
        ladder.play();
        playerScore2 = 8;
    } else if (playerScore2 === 11) {
        ladder.play();
        playerScore2 = 26;
    } else if (playerScore2 === 17) {
        snake.play();
        playerScore2 = 4;
    } else if (playerScore2 === 19) {
        snake.play();
        playerScore2 = 7;
    } else if (playerScore2 === 20) {
        ladder.play();
        playerScore2 = 29;
    } else if (playerScore2 === 21) {
        snake.play();
        playerScore2 = 9;
    } else if (playerScore2 === 25) {
        snake.play();
        playerScore2 = 13;
    } else if (playerScore2 === 27) {
        snake.play();
        playerScore2 = 1;
    }
    $("#score2").attr("value", playerScore2);
    $("#point" + playerScore2).addClass("player2");
    setTimeout(() => {
        $("#point" + playerScore2).removeClass("player2");
    }, 1000);
});