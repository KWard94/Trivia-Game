
//first I will create functional buttons
// i will start with just an "a" button to test functionality
// I will create all four buttons and listen for click events

//Later, I will have the buttons fill with the answers as variables
function test() {
    event.preventDefault()
    console.log("I work!!!")
}

let aButton = document.querySelector("#answer-A")

// aButton.addEventListener("click", alert("button works!"))
aButton.addEventListener("click", test);