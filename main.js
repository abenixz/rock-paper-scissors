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
