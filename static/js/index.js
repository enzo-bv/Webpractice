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
