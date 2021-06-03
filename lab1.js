var userSelection = prompt("Enter either Rock, Paper, or Scissors to play.", "").toUpperCase();
var computerSelection = Math.random();
  
//determine what computer played
if (computerSelection < 0.35) {
     computerSelection = "PAPER";
}
else if (computerSelection > 0.34 && computerSelection < 0.68) {
     computerSelection = "SCISSORS";
}
else if (randocomputerSelectionmNumber > 0.67 && computerSelection < 1.00) {
     computerSelection = "ROCK";
}
  
//only begin game if valid word entered by user
if (userSelection == "ROCK" || userSelection == "PAPER" || userSelection == "SCISSORS") {   
    console.log("User has played: " + userSelection);
    console.log("Computer has played: " + computerSelection);    
    winner(userSelection, computerSelection);
} 
  
//determine winner  
function winner(userSelection, computerSelection) { 
    if (userSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("Computer Wins!");
    }  
    else if (userSelection == "ROCK" && computerSelection == "ROCK"){
        console.log("It's a tie!");
    }
    else if (userSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log("User Wins!");
    }    
    else if (userSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("User Wins!");
    }
    else if (userSelection == "PAPER" && computerSelection == "PAPER"){
        console.log("It's a tie!");
    }
    else if (userSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log("Computer Wins!");
    }    
    else if (userSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log("User Wins!");
    }
    else if (userSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log("Computer Wins!");
    }
    else if (userSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        console.log("It's a tie!");
    }
}
