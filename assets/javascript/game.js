$( document ).ready(function() { 

var counter = 0;
$("#total").text(counter);
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);



var goal = getRndInteger(19,120); 
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$("#goal").text(goal); 

var crystalValue = Array.from({length: 4}, () => Math.floor(Math.random() * (12-1+1)+1));

var crystalOne = $(".crystal-one").attr("crystalworth", crystalValue[0]);
var crystalTwo = $(".crystal-two").attr("crystalworth", crystalValue[1]);
var crystalThree = $(".crystal-three").attr("crystalworth", crystalValue[2]);
var crystalFour = $(".crystal-four").attr("crystalworth", crystalValue[3]);


$("img").on("click", function() {
  var crystalValue = ($(this).attr("crystalworth"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#total").text(counter);
  
  if (counter === goal) {
    wins++;
    alert("You win!");
      $("#wins").text(wins);
  }

  else if (counter >= goal) {
    losses++;
   alert("You lose!!");
   $("#losses").text(losses);
  }
});
});

