
//first I will create functional buttons
// i will start with just an "a" button to test functionality
// I will create all four buttons and listen for click events

//Later, I will have the buttons fill with the answers as variables
function test() {
    console.log("I work!!!")
}

let aButton = document.querySelector("#answer-A")
let bButton = document.querySelector("#answer-B")
let cButton = document.querySelector("#answer-C")
let dButton = document.querySelector("#answer-D")

aButton.addEventListener("click", test);
bButton.addEventListener("click", test);
cButton.addEventListener("click", test);
dButton.addEventListener("click", test);

let questionText = document.querySelector(".question-text")
questionText.innerHTML = "Test1";