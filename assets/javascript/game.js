$(document).ready(function(){

// GAME START:
var userTotal = 0;
var wins = 0;
var losses = 0;

// POST WINS AND LOSSES TO WIN/LOSS SCORE BOARD: IDnumberWins jquery selector html page convert variable wins and losses to text to display on front end

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// TARGET SCORE TO WIN (Random=targetScore): 1. create a variable to store a random generated number between 1 to 120 using a built in random number function. 2. target an html ID targetScore convert the variable value into text to display on the front-end.

var targetScore = Math.floor(Math.random()*101+19)
    $("#targetScore").text(targetScore);

// PLAYER BUTTONS: 4 ELEMENTS, number assignment generator (num1=redButton, num2=diamondButton, num3=stonekingButton, num4=recButton) 
    var redButton = Math.floor(Math.random()*11+1)
    var diamondButton = Math.floor(Math.random()*11+1)
    var stonekingButton = Math.floor(Math.random()*11+1)
    var recButton = Math.floor(Math.random()*11+1)

// GAME MECHANICS 
    // BUTTONone: redButton,  1. when user clicks on button the usertotal variable updates by adding the redbutton value. 2.the final total displays the userTotal points.

$("#one").on("click", function(){
    userTotal = userTotal + redButton;
    $("#finalTotal").text(userTotal);
    // run if or else if statement to determine if the user wins or losses
        if (userTotal == targetScore){
            winner();
        }
        else if (userTotal > targetScore){
            lost();
        }
})

$("#two").on("click", function(){
    userTotal = userTotal + diamondButton;
    $("#finalTotal").text(userTotal);
    // run if or else if statement to determine if the user wins or losses
        if (userTotal == targetScore){
            winner();
        }
        else if (userTotal > targetScore){
            lost();
        }
})

$("#three").on("click", function(){
    userTotal = userTotal + stonekingButton;
    $("#finalTotal").text(userTotal);
    // run if or else if statement to determine if the user wins or losses
        if (userTotal == targetScore){
            winner();
        }
        else if (userTotal > targetScore){
            lost();
        }
})

$("#four").on("click", function(){
    userTotal = userTotal + recButton;
    $("#finalTotal").text(userTotal);
    // run if or else if statement to determine if the user wins or losses
        if (userTotal == targetScore){
            winner();
        }
        else if (userTotal > targetScore){
            lost();
        }
})

// WIN LOST FUNCTION
    //When (userTotal == targetScore) or (userTotal > targetScore), the win or lost function runs to update the win/losses score then a reset function runs after
    
    function winner() {
        alert("You win :)");
        win++;
        $("#numberWins").text(wins);
        reset();
    }

    function lost() {
        alert("You lost :(");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

// RESET GAME FUNCTION UPON WINNER OR LOST OCCURS
    //the target score and crystals values get regenerated and userTotal goes back to 0  

    function reset(){
        targetScore=Math.floor(Math.random()*101+19);
        $('#targetScore').text(targetScore);
        redButton = Math.floor(Math.random()*11+1);
        diamondButton = Math.floor(Math.random()*11+1);
        stonekingButton = Math.floor(Math.random()*11+1);
        recButton = Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

});