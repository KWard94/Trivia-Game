let aButton = document.querySelector("#answer-A");
let bButton = document.querySelector("#answer-B");
let cButton = document.querySelector("#answer-C");
let dButton = document.querySelector("#answer-D");

let buttonClass = document.querySelector(".button");

aButton.addEventListener("click", isCorrect);
bButton.addEventListener("click", isCorrect);
cButton.addEventListener("click", isCorrect);
dButton.addEventListener("click", isCorrect);

let questionText = document.querySelector(".question-text");

let nextButton = document.querySelector("#next-button");

let qBox = document.querySelector(".question-box");

let questionArray = [
  {
    question: "How many ghosts show up in A Christmas Carol?",
    answers: ["One", "Two", "Three", "Four"],
    correctAnsw: "Four",
  },
  {
    question:
      "Which Hollywood actor played six different roles in The Polar Express?",
    answers: ["Tom Hanks", "Peter Scolari", "Leslie Zemeckis", "Tim Allen"],
    correctAnsw: "Tom Hanks",
  },
  {
    question:
      "How many sizes does the Grinch's heart grow once he gets feelings?",
    answers: ["Two Sizes", "Three Sizes", "Four Sizes", "Five Sizes"],
    correctAnsw: "Three Sizes",
  },
  {
    question: "What is the highest grossing Christmas movie of all time?",
    answers: ["Home Alone", "Elf", "The Grinch", "The Santa Clause"],
    correctAnsw: "The Grinch",
  },
  {
    question: "What Christmas song has appeared in the most movies?",
    answers: ["Jingle Bells", "Santa Baby", "Silver Bells", "O Holy Night"],
    correctAnsw: "Jingle Bells",
  },
  {
    question: "Congratulations! You have completed Chirstmas Movie Trivia!",
    answers: [],
    correctAnsw: "",
  },
  {
    question: "",
    answers: [""],
    correctAnsw: "",
  },
];

var qNum = 0;

function nextQ() {
  aButton.style.backgroundColor = "white";
  bButton.style.backgroundColor = "white";
  cButton.style.backgroundColor = "white";
  dButton.style.backgroundColor = "white";

  qNum += 1;
  questionText.innerHTML = questionArray[qNum].question;

  aButton.value = questionArray[qNum].answers[0];
  bButton.value = questionArray[qNum].answers[1];
  cButton.value = questionArray[qNum].answers[2];
  dButton.value = questionArray[qNum].answers[3];

  if (qNum == 5) {
    aButton.style.display = "none";
    bButton.style.display = "none";
    cButton.style.display = "none";
    dButton.style.display = "none";
    scoreBoard.innerHTML = `Your final score is: ${score}!`;
    nextButton.value = "Try Again!";
  } else if (qNum == 6) {
    nextButton.innerHTML = location.reload();
    scoreBoard.style.display = "none";
  }
  return qNum;
}

questionText.innerHTML = questionArray[qNum].question;

aButton.value = questionArray[qNum].answers[0];
bButton.value = questionArray[qNum].answers[1];
cButton.value = questionArray[qNum].answers[2];
dButton.value = questionArray[qNum].answers[3];

let modal = document.querySelector("#instructions-modal")

let closeModal = document.querySelector("#close-modal")

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
})

nextButton.addEventListener("click", nextQ);

var score = 0;
let scoreBoard = document.querySelector("#scoreboard");
scoreBoard.innerHTML = `Your score is: ${score}`;

function isCorrect(event) {
  if (event.target.value == questionArray[qNum].correctAnsw) {
    incrementScore();
    event.target.style.backgroundColor = "#38b000";
  } else {
    event.target.style.backgroundColor = "red";
    decrementScore();
  }
}

function displayWindow() {
  qBox.display.style = "none";
}

function incrementScore() {
  score = score + 10;
  scoreBoard.innerHTML = `Your score is: ${score}!`;
  if (score >= 10) {
    console.log("Winner Winner Holiday Dinner!");
  }
}

function decrementScore() {
  score = score -= 5;
  scoreBoard.innerHTML = `Your score is: ${score}!`;
}
