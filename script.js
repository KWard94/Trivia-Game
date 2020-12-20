
//I need to build out my array with more questions
//i need to test the next question button so that it cycles through questions
// 
function test() {
    alert("Congratulations, you clicked a button!")
}


let aButton = document.getElementById("answer-A")
let bButton = document.querySelector("#answer-B")
let cButton = document.querySelector("#answer-C")
let dButton = document.querySelector("#answer-D")


aButton.addEventListener("click", isCorrect);
bButton.addEventListener("click", isCorrect);
cButton.addEventListener("click", isCorrect);
dButton.addEventListener("click", isCorrect);


let questionText = document.querySelector(".question-text")

let nextButton = document.querySelector("#next-button")
nextButton.addEventListener("click", test)

let questionArray = [
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        answers: ["15km/hr", "20 km/hr", "African or European Swallow?", "25 km/hr"],
        correctAnsw: "African or European Swallow?",
    },
    {
        question: "test question 2",
        answers: ["incorrect ans", "correct ans", "also incorrect", "third incorrect"],
        correctAnsw: "correct ans",
    },
]

// for (i = 0; i <= questionArray.length; i++) {
    //let i = variable?
questionText.innerHTML = questionArray[0].question;

aButton.value = questionArray[0].answers[0]
bButton.value = questionArray[0].answers[1]
cButton.value = questionArray[0].answers[2]
dButton.value = questionArray[0].answers[3]
//insert varible into above? (questionArray[variable].answers.....)
//variable++?
// }

//need to write next question button function, variable ++?
//look up how to randomize entries in an array, could use to randomize answers


function isCorrect(event) {
        console.log(event.target.value)
        if (event.target.value == questionArray[0].correctAnsw) {
            console.log("Correct Answer Selected!")
            incrementScore();
        }
}

var score = 0
let scoreBoard = document.querySelector("#scoreboard")
scoreBoard.innerHTML = `Your score is: ${score}`


function incrementScore () {
    score = score+10;
    scoreBoard.innerHTML = `Your score is: ${score}`
    console.log("score change")
}


