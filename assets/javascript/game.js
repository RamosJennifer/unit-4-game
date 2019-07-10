var wins=0;
// $("#wins").html(wins)
var losses=0;
// $("#losses").html(losses)

var targetNumber = 53;
$("#numToGuess").text(targetNumber);
var guessesSoFar = 0;
$("#guessesSoFar").text(guessesSoFar);

// Here we created a counter, we'll be using this to track the user's total clicks
var clicks = 0;

// Here we created code that selects a number
var numberOptions = [10, 5, 3, 7];
var increment = numberOptions[Math.round(Math.random())];

// for (var i=19; i<120; i++) {
//     console.log(Math.random(targetNumber[i]))

// }

// Here we created an on-click event that responds to button clicks of the crystal image.
$(".crystal-image").on("click", function() {
    
    // Each time the user clicks the crystal the counter goes up by 10.
    clicks += increment;

    // Clicking the button triggers an alert message.
    alert("Your New Score is: " + clicks);

    if (clicks === targetNumber) {
        wins++;
        alert("You Win!");

    } else if (clicks > targetNumber) {
        losses++;
        alert("You Lose!!");
    }

});