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
    let humanChoice = prompt("Enter your choice from rock, paper or scissors!");

    if (humanChoice === null) {
        console.log("We will play another time.");
    } else if (humanChoice === "") {
        console.log("You didn't input nothing, You can try again");
    } else if (!isNaN(humanChoice)) {
        console.log("Enter a valid choice one from Rock, Paper or Scissor and Try again!");
    } else if (humanChoice === getComputerChoice()) {
        
        console.log("You: " + humanChoice);
        console.log("Computer: " + getComputerChoice());
        console.log("We are in a tie");
        
    } else if ( humanChoice !== getComputerChoice()) {
        console.log("You: " + humanChoice);
        console.log("Computer: " + getComputerChoice());
    }
    return;
}
getHumanChoice()