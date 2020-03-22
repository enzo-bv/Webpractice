//Challenge One (01): Your age in days

function birthYear() {
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
