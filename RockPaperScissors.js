const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else{
    console.log("Invalid input");
  }
}

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0){
    return 'rock';
  }
  if (computerChoice === 1){
    return 'paper';
  }
  if (computerChoice === 2){
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    let message = "It'\s a draw.";
    return message;
  }

  if (userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock'){
    let messageTwo = "Computer wins";
    return messageTwo;
  }

  if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
    let messageThree = "You win!";
    return messageThree;
  }
}

function playGame(){
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice();
  console.log(`The User's Choice is: ${userChoice}`);
  console.log(`The Computer's Choice is: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();