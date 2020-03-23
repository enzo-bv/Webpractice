//Challenge One (01): Your age in days

function birthYear() {
  if (!document.getElementById("ageInDays")) {
    let birthDate = prompt("When were you born?");
    let solution = document.createElement("p");
    let answer = document.createTextNode(
      "Yo! this is " + birthDate
    );
    solution.setAttribute("id", "ageInDays");
    solution.appendChild(answer);
    document
      .getElementById("challengeResults01")
      .appendChild(solution);
  }
}

function clearBox(challengeId) {
  document.getElementById(challengeId).remove();
}

function makeCats() {
  let catLink =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=animal-pet-cute-kitten-45201.jpg&fm=jpg";
  let catBox = document.createElement("img");
  let container = document.getElementById(
    "challengeFooter02"
  );
  catBox.setAttribute("class", "catBox");
  catBox.setAttribute("src", catLink);
  catBox.setAttribute("alt", "Cute Cat");
  container.appendChild(catBox);
}
function clearCats() {
  let boxes = document.getElementsByClassName(
    "catBox"
  );
  let catBoxes = [...boxes];
  catBoxes.map(x => {
    x.remove();
  });
}

function rpsUserChoice(userChoice) {
  let botChoices = ["rock", "paper", "scissor"];
  let botChoice = Math.floor(Math.random() * 3);
  let encounter = [
    botChoices[botChoice],
    userChoice
  ];
  let userButtonChoice = document.getElementById(
    userChoice + "Choice"
  );
  resetRPS();
  if (encounter[0] != encounter[1]) {
    let botButtonChoice = document.getElementById(
      encounter[0] + "Choice"
    );
    botButtonChoice.style.filter =
      "drop-shadow(0px 0px 20px darkred)";
    userButtonChoice.style.filter =
      "drop-shadow(0px 0px 20px steelblue)";
    let result = matchUp(encounter);
    if (result) {
      gameResult("You win");
    } else {
      gameResult("You lose");
    }
  } else {
    userButtonChoice.style.filter =
      "drop-shadow(0px 0px 20px black)";
    gameResult("It's a tie");
  }
}

function gameResult(result) {
  document.getElementById(
    "rpsFinal"
  ).innerHTML = result;
}

function resetRPS() {
  let buttons = document.getElementsByClassName(
    "rpsChoice"
  );
  buttonsArray = [...buttons];
  buttonsArray.map(x => {
    x.style.filter =
      "drop-shadow(0px 0px 0px rgba(0,0,0,0))";
  });
}

function matchUp(encounter) {
  if (encounter.find(x => x == "rock")) {
    if (encounter.find(x => x == "paper")) {
      return encounter.findIndex(
        x => x === "paper"
      );
    } else {
      return encounter.findIndex(
        x => x === "rock"
      );
    }
  } else {
    return encounter.findIndex(
      x => x === "scissor"
    );
  }
}
