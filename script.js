
//first I will create functional buttons
// i will start with just an "a" button to test functionality
// I will create all four buttons and listen for click events

//Later, I will have the buttons fill with the answers as variables

//^^DONE^^

//I need to populate answers onto the buttons for a,b,c,d
//I need to build out my array with more questions
//i need to test the next question button so that it cycles through questions
// 
function test() {
    alert("Congratulations, you clicked a button!")
}

var score = 0

let aButton = document.getElementById("answer-A")
let bButton = document.querySelector("#answer-B")
let cButton = document.querySelector("#answer-C")
let dButton = document.querySelector("#answer-D")


aButton.addEventListener("click", testClick);
bButton.addEventListener("click", test);
cButton.addEventListener("click", test);
dButton.addEventListener("click", test);


let questionText = document.querySelector(".question-text")

let nextButton = document.querySelector("#next-button")
nextButton.addEventListener("click", test)

let questionArray = [
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        answers: ["15km/hr", "20 km/hr", "African or European Swallow?", "25 km/hr"],
        correctAnsw: 2,
    }   
]


questionText.innerHTML = questionArray[0].question;

aButton.value = questionArray[0].answers[0]
bButton.value = questionArray[0].answers[1]
cButton.value = questionArray[0].answers[2]
dButton.value = questionArray[0].answers[3]

//NEED HELP TO WRITE FUNCTION FOR USER INPUT/CLICK ON CORRECT ANSWER

let scoreBoard = document.querySelector("#scoreboard")
scoreBoard.innerHTML = `Your score is: ${score}`

function incrementScore () {
    score = score+10;
    console.log("score change")
}
incrementScore();

function testClick() {
    console.log("pretty sure working");
    incrementScore();
}

//score increment function seems to work, but does not change score variable

// aButton.onclick = function () {
    //     console.log("A button clicked, did it really work???")
    // }
