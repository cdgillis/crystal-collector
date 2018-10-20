$(document).ready(function() {

    // VARIABLES
    var randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 101) + 19; // Assign random number between 19 and 120
    var min = 1;
    var max = 12;
    var blueRandom = Math.floor(Math.random() * max) + min; // Assign random numbers between 1 and 12
    var redRandom = Math.floor(Math.random() * max) + min;
    var yellowRandom = Math.floor(Math.random() * max) + min;
    var greenRandom = Math.floor(Math.random() * max) + min;
    var userTotalScore = $("#userTotal");
    var addScore = 0;
    var wins = 0;
    var losses = 0;
    
    var reset = function() {
        addScore = 0;
        randomNumber = Math.floor(Math.random() * 101) + 19;
        blueRandom = Math.floor(Math.random() * max) + min;
        redRandom = Math.floor(Math.random() * max) + min;
        yellowRandom = Math.floor(Math.random() * max) + min;
        greenRandom = Math.floor(Math.random() * max) + min;
        computerTotalNum.text(randomNumber);
        userTotalScore.html(addScore);
    }
    
    var computerTotalNum = $("#computerBox");
    computerTotalNum.text(randomNumber);

    // Function to check whether won or lost, and then reset
    var checkWin = function(number) {
        if (number === randomNumber) {
            wins++;
            $("#winsCount").text(wins);
            reset();
        }
        else if (number > randomNumber) {
            losses++;
            $("#lossCount").text(losses);
            reset();
        }
    }

    //Detect click event for each crystal
    $("#blueBtn").on("click", function() {
        addScore += blueRandom; // Increase the score by 1
        userTotalScore.html(addScore)   // Display hidden crystal hidden value for the crystal
        checkWin(addScore); // Run the checkWin function
    });

    $("#redBtn").on("click", function() {
        addScore += redRandom;
        userTotalScore.html(addScore)
        checkWin(addScore);
    });

    $("#yellowBtn").on("click", function() {
        addScore += yellowRandom;
        userTotalScore.html(addScore)
        checkWin(addScore);
    });

    $("#greenBtn").on("click", function() {
        addScore += greenRandom;
        userTotalScore.html(addScore)
        checkWin(addScore);
    });

});
