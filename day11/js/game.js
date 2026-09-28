var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
  console.log("It's a tie!");
} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
  console.log("Player Two wins! Paper covers Rock.");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
  console.log("Player One wins! Paper covers Rock.");
} else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") {
  console.log("Player One wins! Rock smashes scissors.");
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Rock") {
  console.log("Player Two wins! Rock smashes scissors.");
} else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper") {
  console.log("Player One wins! scissors cut Paper.");
} else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "scissors") {
  console.log("Player Two wins! scissors cut Paper.");
} else {
  console.log("Invalid choice! Use only: Rock, Paper, scissors");
}
