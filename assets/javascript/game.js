var wins=0;
// $("#wins").html(wins)
var losses=0;
// $("#losses").html(losses)

var targetNumber = Math.floor(Math.random()*121)+19;
$("#numToGuess").text(targetNumber);
//var guessesSoFar = 0;
$("#guessesSoFar").text(userGuess);

// Here we created a counter, we'll be using this to track the user's total clicks
var userGuess = 0;



var blueCrystalvar = Math.floor(Math.random()*12)+1;
var pinkCrystalvar = Math.floor(Math.random()*12)+1;
var purpleCrystalvar = Math.floor(Math.random()*12)+1;
var whiteCrystalvar = Math.floor(Math.random()*12)+1;

// for (var i=19; i<120; i++) {
//     console.log(Math.random(targetNumber[i]))

// }
function reset(){
    blueCrystalvar = Math.floor(Math.random()*12)+1;
    pinkCrystalvar = Math.floor(Math.random()*12)+1;
    purpleCrystalvar = Math.floor(Math.random()*12)+1;
    whiteCrystalvar = Math.floor(Math.random()*12)+1; 
    
    userGuess=0;
    $("#guessesSoFar").text(userGuess);
    
    targetNumber = Math.floor(Math.random()*121)+19;
    $("#numToGuess").text(targetNumber);
}

function result(){
    if (userGuess === targetNumber) {
        wins++;
        $("#wins").text(wins);
        reset();
        //alert("You Win!");

    } 
    if (userGuess > targetNumber) {
        losses++;
        $("#losses").text(losses);
        reset();
        //alert("You Lose!!");
    }
}
// Here we created an on-click event that responds to button clicks of the crystal image.
$(".crystal-image").on("click", function() {

    var temp = $(this).attr("data-name");
    console.log("Image name: "+temp);

    if(temp==="blueCrystalImg"){
        userGuess += blueCrystalvar;
        $("#guessesSoFar").text(userGuess);
        result();
    }
    
    if(temp==="pinkCrystalImg"){
        userGuess += pinkCrystalvar;
        $("#guessesSoFar").text(userGuess);
        result();
    }

    if(temp==="purpleCrystalImg"){
        userGuess += purpleCrystalvar;
        $("#guessesSoFar").text(userGuess);
        result();
    }

    if(temp==="whiteCrystalImg"){
        userGuess += whiteCrystalvar;
        $("#guessesSoFar").text(userGuess);
        result();
    }
    // Each time the user clicks the crystal the counter goes up by 10.
    //clicks += increment;

    // Clicking the button triggers an alert message.
    //alert("Your New Score is: " + clicks);


});