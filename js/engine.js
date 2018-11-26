/* Variables we need for the game */

// This is the list of options for the computer move, lited at indices 0-2.
var choices = ["rock", "paper", "scissors"];

//These are the variables you need to keep track of the score.
var played = 0;
var won = 0;
var lose = 0;
var draw = 0;
var play_you;
var play_machine;


/* Listens for the button clicks of the user */
$('button').click(function(event) {
  play_you = this.getAttribute("value");
  $("#play_you").text(play_you);
  play_machine = computer_move();
  compare(play_you, play_machine);
});


function computer_move() {
  var random_number = Math.floor(Math.random() * (3 - 0)) + 0;
  play_machine = choices[random_number];
  $("#play_machine").text(play_machine);
  return play_machine;
}

function compare(you, machine) {
  var verdict = 'lose'

  if (you == machine) {
    verdict = 'draw';
  } else if ((you == "rock") && (machine == "scissors")) {
    verdict = 'win';
  } else if ((you == "paper") && (machine == "rock")) {
    verdict = 'win';
  } else if ((you == "scissors") && (machine == "paper")) {
    verdict = 'win';

    // The code below is not necesary, since you only have to override the 'vredict' value of lose if its something different.

  } else if ((you == "rock") && (machine == "paper")) {
    verdict = 'lose';

  } else if ((you == "paper") && (machine == "scissors")) {
    verdict = 'lose';

  } else if ((you == "scissors") && (machine == "rock")) {
    verdict = 'lose';
  }

  switch(verdict) {
    case 'win':
      won++;
      $("#game_won").text(won);
      break;
    case 'lose':
      lose++;
      $("#game_lost").text(lose);
      break;
    case 'draw':
      draw++;
      $("#game_draw").text(draw);
      break;
  }

  $("#verdict").text(verdict);

  played++;
  $("#game_played").text(played);
}
