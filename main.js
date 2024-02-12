let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function () {
    userInput.value = "";
})

function pickRandomNum() {
        computerNum = Math.floor(Math.random() * 100) + 1; 
        console.log("Answer",computerNum);
    
}

function play() {
        let userValue = userInput.value; 

        //validate check
        if (userValue < 1 || userValue > 100) {
            resultArea.textContent = "Please enter the number between 1 to 100"
            return; // if we dont quit the function, it will keep checking
        }

        if (history.includes(userValue)) {
            resultArea.textContent = "You already submit before, please write another number"
        }

        chances -- ; //if we click once, then chance reduce
        chanceArea.textContent = `Left chances : ${chances}`;

        console.log("chance", chances);

        // Check the conditions and update the text content and color accordingly
        if (userValue < computerNum) {
            resultArea.textContent = "Up!!";
            resultArea.classList.remove("down");
            resultArea.classList.add("up");
        } else if (userValue > computerNum) {
            resultArea.textContent = "Down!!";
            resultArea.classList.remove("up");
            resultArea.classList.add("down");
        } else { //(userValue === computerNum)
            resultArea.textContent = "Congratulation!!";
            resultArea.classList.remove("up", "down");
            resultArea.classList.add("congratulation");
            gameOver = true; // go down and button disabled.
        }
        history.push(userValue); //put user value in history array
        console.log(history)

        if (chances < 1) { //chance is 0.
            gameOver = true;
        } 

        if (gameOver == true) {
            playButton.disabled = true;
        }
}

function reset() {
    // Clear user input field.
    userInput.value = "" //clear, make it empty
    // Create new number.
    pickRandomNum();

    resultArea.textContent = "Result print here"
}

pickRandomNum(); //call function

    //Get the input element
  var input = document.getElementById("user-input");

  // Remove placeholder when input gains focus
  input.addEventListener("focus", function() {
    input.removeAttribute("placeholder");
  });

  // Restore placeholder when input loses focus
  input.addEventListener("blur", function() {
    input.setAttribute("placeholder", "Write down your number");
  });