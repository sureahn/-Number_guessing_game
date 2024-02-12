//Set random number
//User input number, and click go
//if user correct the number, print Correct!
//If random number is lower than User number, print Down!
//If random number is higher than User number, print Up!

//If user click the Reset btn, game reset.
//If user try 5 times, game done.(btn disabled), if user correct the number btn disabled
//We alert that if user type number out range of 1-100. We don't count that chance.
//We alert that id user type same number as before. We don't count that chance.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play); //(event,변수(괄호넣지않기))
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function () {
    userInput.value = "";
})

function pickRandomNum() {
        computerNum = Math.floor(Math.random() * 100) + 1; 
        // Math.random() : pick random number between 0 < Num < 1
        // * 100 : random print decimal number so * 100 > make the random number as two digit left
        // Math.floor() : discard(truncate) the decimal part(소수점 아래 버린다)
        // + 1 : Math.random () print lower than 1, not 1. 
        //      So originally, function has a value between 0-99.
        //      But we need a value between 1-100, so add 1.
        console.log("Answer",computerNum);
    
}

function play() {
        let userValue = userInput.value; //bring value of user-input

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