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
