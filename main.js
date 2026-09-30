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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        
        humanChoice = humanChoice.toLowerCase();

        let results = document.querySelector("#results");
        results.innerHTML = ""; // clear out old results

        // create DOM elements to append results
        let resultSection = document.createElement("div");
        resultSection.id = "resultSection";
        let humanChoiceElem = document.createElement("p");
        let computerChoiceElem = document.createElement("p");
        let winnerResponse = document.createElement("p");

        humanChoiceElem.textContent = " You: " + humanChoice;
        resultSection.appendChild(humanChoiceElem);
        computerChoiceElem.textContent = " Computer: " + computerChoice;
        resultSection.appendChild(computerChoiceElem);

        if (humanChoice === computerChoice) {
            winnerResponse.textContent = "It is a tie!";
            resultSection.appendChild(winnerResponse);
        }
        // check logic if computer wins the round and append results
        else if ((humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            winnerResponse.textContent = "Computer wins this round!";
            resultSection.appendChild(winnerResponse);
        } else {
            winnerResponse.textContent = "You won this round!";
            resultSection.appendChild(winnerResponse);
        }
        results.appendChild(resultSection); // append the resultSection div to the parent node
    }
    
    // listen for events for the three choices and play a round for each click
    let rockBtn = document.querySelector("#rockBtn");
    rockBtn.addEventListener("click", function () {
        let humanChoice = "Rock";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    let paperBtn = document.querySelector("#paperBtn");
    paperBtn.addEventListener("click", function () {
        let humanChoice = "Paper";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    let scissorsBtn = document.querySelector("#scissorsBtn");
    scissorsBtn.addEventListener("click", function () {
        let humanChoice = "Scissors";
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
}
playGame();