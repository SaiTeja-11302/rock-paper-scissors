let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw, Play Again";
    msg.style.backgroundColor = "#3D315B";


}

const showWinner =(userWin, userChoice, computerChoice) => {
    if (userWin === true) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win!, ${userChoice} beats ${computerChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `Comp Wins, ${computerChoice} beats ${userChoice}.`;
        msg.style.backgroundColor = "red";


    }
}

const playGame = (userChoice) => {
    const computerChoice = genCompChoice();
    
    if (userChoice === computerChoice) {
        drawGame();
    }else {
       let userWin = true;
       if (userChoice === "rock") {
        userWin = computerChoice === "scissors" ? true : false;  
       }else if (userScore === "paper") {
        userWin = computerChoice === "scissors" ? false : true;  
       }else {
        userWin = computerChoice === "rock" ? false : true;  
       }

       showWinner(userWin, userChoice, computerChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);


    });
  });
  