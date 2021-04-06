const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gamePlay = false;
button.addEventListener("click", function () {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    maker();
    button.innerHTML = "Check Combo";
  } else {
    score++;
    message.innerHTML = "Guesses " + score;
    const numbers = document.querySelectorAll(".numb");
    let winCondtion = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        numbers[i].style.color = "white";
        console.log("Match!");
        winCondtion++;
      } else {
        let color = numbers[i].value < numbers[i].correct ? "blue" : "red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "black";
        console.log("No match!");
        // if (numbers[i].value > numbers[i].correct) {
        //   numbers[i].style.backgroundColor = "red";
        // } else {
        //   numbers[i].style.backgroundColor = "blue";
        // }
      }
      if (winCondtion == numbers.length) {
        console.log("game over!");
      }
    }
  }
});

function maker() {
  for (let x = 0; x < 4; x++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.order = x;
    el.correct = Math.floor(Math.random() * 10);
    el.value = el.correct;
    el.style.width = "50px";
    el.classList.add("numb");
    // el.style.marginBottom = "5px";
    console.log(el);
    gameArea.appendChild(el);
  }
}
