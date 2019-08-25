//jshint esversion:6

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let decPointOnScreen = false;
let resultOnScreen = false;
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

// Add event listeners
for(let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {

  if(this.classList.contains("number") === true) {
      // Key is NUMBER or decimal POINT
    if(this.innerHTML !== ".") {
      // Key is NUMBER
      if(screen.innerHTML === "0" || resultOnScreen === true) {
        // Set screen to number pressed
        screen.innerHTML = this.innerHTML;
        decPointOnScreen = false;
        resultOnScreen = false;
      } else {
        // Append new digit
        screen.innerHTML += this.innerHTML;
      }
    } else {
      // Key is POINT
      if(resultOnScreen === false && decPointOnScreen === false) {
        // Append decimal point
        screen.innerHTML += this.innerHTML;
        decPointOnScreen = true;
      }
    }

  } else if(this.classList.contains("operator") === true){
    // Key is OPERATOR
    if(num1 === "") {
      // Operator keys only work if num1 is curently empty
      if(screen.innerHTML !== "0"){
        // Assign value to num1
        num1 = screen.innerHTML;
        operator = this.innerHTML;
        console.log("operator: " + operator);
        resultOnScreen = true;
      }

    } else {
      // Num1 already holding a value
      if(this.innerHTML === "=" && resultOnScreen === false) {
        num2 = screen.innerHTML;

        switch(operator) {
          case "÷":
            result = Number(num1) / Number(num2);
            break;
          case "×":
            result = Number(num1) * Number(num2);
            break;
          case "+":
            result = Number(num1) + Number(num2);
            break;
          case "-":
            result = Number(num1) - Number(num2);
            break;
          default:
            console.log("Error, sign: " + operator);
        }

        screen.innerHTML = result.toString().substr(0, 13);
        resultOnScreen = true;

        clearData();
      }
    }
  } else if(this.classList.contains("clear") === true) {
    // Clear data
    clearData();
    screen.innerHTML = "0";
    resultOnScreen = false;
    decPointOnScreen = false;
  }

}

function clearData() {
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
}

/*
// Handle click 01
function handleClick() {
  console.log("key pressed: " + this.innerHTML);
  // If key pressed is NUMBER
  if(this.classList.contains("number") === true) {
    // Check if key is decimal point or number
    if(this.innerHTML !== ".") {
      // If number, check if screen is zero
      if(screen.innerHTML === "0" || resultOnScreen === true) {
        // If screen is zero, print number
        screen.innerHTML = this.innerHTML;
        resultOnScreen = false;
      } else {
        // If not, append number
        screen.innerHTML += this.innerHTML;
      }

    } else {
      // If decimal point, check if decimalPoint is false
      if(decPointOnScreen === false && resultOnScreen === false) {
        // If false, append point
        screen.innerHTML += this.innerHTML;
        decPointOnScreen = true;
      }
    }
  // If key pressed is OPERATOR
  } else if(this.classList.contains("operator") === true) {
    // Check if num1 is empty
    if(num1 == "") {
      // If empty, save value on screen to num1
      num1 = screen.innerHTML;
      // Save operator
      operator = this.innerHTML;
      // Clear screen
      screen.innerHTML = 0;
      // Ready to accept second number
      decPointOnScreen = false;
    } else {
      // If num1 is not empty, no action by operator, only if...
      // key pressed is '=' save value to num2
      if(this.innerHTML === "=") {
        num2 = screen.innerHTML;
        // Operate and print result on screen
        switch(operator) {
          case "/":
            result = Number(num1) / Number(num2);
            break;
          case "*":
            result = Number(num1) * Number(num2);
            break;
          case "+":
            result = Number(num1) + Number(num2);
            break;
          case "-":
            result = Number(num1) - Number(num2);
            break;
          default:
            console.log("Error");
        }

        screen.innerHTML = result;
        resultOnScreen = true;
      }
    }
  }
}
*/
