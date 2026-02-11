function getComputerChoice() {

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    const randomChoice = Math.floor(Math.random() * 3) + 1;

    let chosenWord;
    if (randomChoice === 1) {
        chosenWord = rock;
    } else if (randomChoice === 2) {
        chosenWord = paper;
    } else {
        chosenWord = scissors;
    }
    return chosenWord;
}

function getHumanChoice() {
    return prompt("Enter your choice from rock, paper or scissors!");
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        
        // Check for null and invalid input
        if (humanChoice === null) {
            console.log("We will play another time.");
        } else if (humanChoice === "") {
            console.log("You didn't input anything, You can try again");
        } else if (!isNaN(humanChoice)) {
            console.log("Enter a valid choice one from Rock, Paper, or Scissors and try again!");
        } else {

            function isATie(humanChoice, computerChoice) {
                return humanChoice === computerChoice;
            }

            if (isATie(humanChoice, computerChoice)) {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("It is a tie, no one scored!");
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Paper covers Rock, Computer wins!");
                computerScore++;
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Rock crushes Scissors, You win!");
                humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Paper covers Rock, You win!");
                humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Scissors cut Paper, Computer wins!");
                computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Rock crushes Scissors, Computer wins!");
                computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You: " + humanChoice);
                console.log("Computer: " + computerChoice);
                console.log("Scissors cut Paper, You win!");
                humanScore++;
            } else {
                console.log("Your input is not one of the choice, try to input correctly!");
            }
        }
        return;
    }

    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Your total score is: " + humanScore);
    console.log("Computer's total score is: " + computerScore);
     
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("You lose, Computer is the winner");
    } else {
        console.log("The game is a tie!");
    }
}
playGame()