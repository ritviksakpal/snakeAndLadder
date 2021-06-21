var playerScore1 = 0;
var playerScore2 = 0;
$("#btn-1").on("click", function () {
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
    } else if (playerScore1 === 3) {
        playerScore1 = 16;
    } else if (playerScore1 === 5) {
        playerScore1 = 8;
    } else if (playerScore1 === 11) {
        playerScore1 = 26;
    } else if (playerScore1 === 17) {
        playerScore1 = 4;
    } else if (playerScore1 === 19) {
        playerScore1 = 7;
    } else if (playerScore1 === 20) {
        playerScore1 = 29;
    } else if (playerScore1 === 21) {
        playerScore1 = 9;
    } else if (playerScore1 === 25) {
        playerScore1 = 13;
    } else if (playerScore1 === 27) {
        playerScore1 = 1;
    }
    $("#score1").attr("value", playerScore1);
    $("#point" + playerScore1).addClass("player1");
    setTimeout(() => {
        $("#point" + playerScore1).removeClass("player1");
    }, 1000);
});
$("#btn-2").on("click", function () {
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
        $("#winner").text("Player 2 win!");
    } else if (playerScore2 === 3) {
        playerScore2 = 16;
    } else if (playerScore2 === 5) {
        playerScore2 = 8;
    } else if (playerScore2 === 11) {
        playerScore2 = 26;
    } else if (playerScore2 === 17) {
        playerScore2 = 4;
    } else if (playerScore2 === 19) {
        playerScore2 = 7;
    } else if (playerScore2 === 20) {
        playerScore2 = 29;
    } else if (playerScore2 === 21) {
        playerScore2 = 9;
    } else if (playerScore2 === 25) {
        playerScore2 = 13;
    } else if (playerScore2 === 27) {
        playerScore2 = 1;
    }
    $("#score2").attr("value", playerScore2);
    $("#point" + playerScore2).addClass("player2");
    setTimeout(() => {
        $("#point" + playerScore2).removeClass("player2");
    }, 1000);
});
