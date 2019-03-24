
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
							  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

				var win = 0;
				var losses = 0;
				var guessesLeft = 12;
				var lettersGuessed = ""

				// Create variables that hold references to the places in the HTML where we want to display things.
				
				var winsText = document.getElementById("wins-text");
				var remainingGuessesText = document.getElementById("remainingGuesses-text");
				var lossesText = document.getElementById("losses-text");
				var lettersGuessedSpan = document.getElementById("letterguessed-text");
				
				document.onkeyup = function(event) {


				var computerChoice = letters[Math.floor(Math.random() * letters.length)];

				var userGuess = event.key;

				if((userGuess===computerChoice)||(userGuess!==computerChoice)){

				}

				if(userGuess !== computerChoice && guessesLeft > 0) {
					guessesLeft--
					lettersGuessed = lettersGuessed + " " + userGuess
					
					

				}



				if(userGuess===computerChoice){
					win++;
				}

				if(guessesLeft===0){
					losses++;
				}

				if(userGuess === computerChoice || guessesLeft===0){
					guessesLeft=12;
					lettersGuessed = "";
				}

				winsText.textContent= win;
				lossesText.textContent= losses;
				remainingGuessesText.textContent= guessesLeft;
				lettersGuessedSpan.innerHTML = lettersGuessed;







				}
