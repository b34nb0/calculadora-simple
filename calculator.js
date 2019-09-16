//jshint esversion: 6

class Calculator {

  constructor() {
		// Init numbers, result and operator
		this.initVariables();

		//Init components (screen and buttons)
		this.screen = document.querySelector(".screen");
    this.buttons = document.querySelectorAll("button");
    this.initScreen();
    this.initButtonEvents();

		// Result is not displayed on screen
		this.resultOnScreen = false;
  }

	initVariables() {
		// Initialise variables
		this.number_one = 0;
    this.number_two = 0;
    this.result = 0;
    this.operator = "";
	}

  initScreen() {
    // Print 0 on screen
    this.screen.innerText = "0";
  }

  initButtonEvents() {
    // Assign click events to buttons
    for (let i = 0; i < this.buttons.length; i++) {

      if (this.buttons[i].classList.contains("number")) {
        this.buttons[i].addEventListener("click", this.showNumber.bind(this));

      } else if (this.buttons[i].classList.contains("point")) {
        this.buttons[i].addEventListener("click", this.showPoint.bind(this));

      } else if (this.buttons[i].classList.contains("clear")) {
        this.buttons[i].addEventListener("click", this.resetCalculator.bind(this));

      } else if (this.buttons[i].classList.contains("operator")) {
        this.buttons[i].addEventListener("click", this.storeFirstNumberAndOperator.bind(this));

      } else if (this.buttons[i].classList.contains("equals")) {
        this.buttons[i].addEventListener("click", this.operateNumbers.bind(this));
      }

    }

  }

  showNumber(e) {
    // Print pressed number on screen
    let numberPressed = e.target.innerText;
    if (this.screen.innerText === "0" || this.resultOnScreen === true) {
      this.screen.innerText = numberPressed;
    } else {
      if(this.screen.innerText.length < 10) {
        this.screen.innerText += numberPressed;
      }
    }

		this.resultOnScreen = false;

  }

  showPoint() {
    // Concatenates decimal point
    if (!this.screen.innerText.includes(".")) {
      this.screen.innerText += ".";
      this.resultOnScreen = false;
    }
  }

  storeFirstNumberAndOperator(e) {
    // Stores number displayed on screen and operator pressed
    this.number_one = Number(this.screen.innerText);
    this.operator = e.target.innerText;
		this.resultOnScreen = true;
  }

  operateNumbers() {
    // Stores (second) number displayed on screen and calculates result
    if(!this.resultOnScreen) {
      this.number_two = Number(this.screen.innerText);
      switch (this.operator) {
        case "÷":
          this.result = this.number_one / this.number_two;
          break;
        case "×":
          this.result = this.number_one * this.number_two;
          break;
        case "+":
          this.result = this.number_one + this.number_two;
          break;
        case "-":
          this.result = this.number_one - this.number_two;
          break;
        default:
  				console.log("Error. Operator: " + this.operator);
      }

      // Prints result on screen
  		this.showResult();
  		// Resets values of numbers, operator and result
  		this.initVariables();
    }

  }

	showResult() {
		// Prints result on screen
		this.screen.innerText = this.result.toString().substr(0, 10);
		this.resultOnScreen = true;
	}

  resetCalculator() {
    // Resets variables and prints 0 on screen
		this.initVariables();
		this.initScreen();
  }
}


class SciCalculator extends Calculator {

  constructor() {
    super();
  }

  initButtonEvents() {
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].classList.contains("number")) {
        this.buttons[i].addEventListener("click", this.showNumber.bind(this));

      } else if (this.buttons[i].classList.contains("point")) {
        this.buttons[i].addEventListener("click", this.showPoint.bind(this));

      } else if (this.buttons[i].classList.contains("clear")) {
        this.buttons[i].addEventListener("click", this.resetCalculator.bind(this));

      } else if (this.buttons[i].classList.contains("operator")) {
        this.buttons[i].addEventListener("click", this.storeFirstNumberAndOperator.bind(this));

      } else if(this.buttons[i].classList.contains("log-btn")){
        this.buttons[i].addEventListener("click", this.logOperator.bind(this));

      } else if(this.buttons[i].classList.contains("power-btn")) {
        this.buttons[i].addEventListener("click", this.powerOperator.bind(this));

      } else if(this.buttons[i].classList.contains("sin-btn")) {
        this.buttons[i].addEventListener("click", this.sinOperator.bind(this));

      } else if(this.buttons[i].classList.contains("cos-btn")) {
        this.buttons[i].addEventListener("click", this.cosOperator.bind(this));

      } else if(this.buttons[i].classList.contains("equals")) {
        this.buttons[i].addEventListener("click", this.sciEqualsOperator.bind(this));
      }
    }
  }

  logOperator(e) {
    // Stores number displayed on screen and operator pressed
    this.number_one = Number(this.screen.innerText);
    this.operator = e.target.innerText;
		this.resultOnScreen = true;
  }

  powerOperator(e) {
    // Stores number displayed on screen and operator pressed
    this.number_one = Number(this.screen.innerText);
    this.operator = e.target.innerText;
		this.resultOnScreen = true;
  }

  sinOperator() {
    this.number_one = Number(this.screen.innerText);
    this.result = Math.sin(this.number_one);
		this.resultOnScreen = true;
    // Prints result on screen
    this.showResult();
    // Resets values of numbers, operator and result
    this.initVariables();
  }

  cosOperator() {
    this.number_one = Number(this.screen.innerText);
    this.result = Math.cos(this.number_one);
		this.resultOnScreen = true;
    // Prints result on screen
    this.showResult();
    // Resets values of numbers, operator and result
    this.initVariables();
  }

  sciEqualsOperator() {
    // Stores (second) number displayed on screen and calculates result
    if(!this.resultOnScreen) {
      this.number_two = Number(this.screen.innerText);
      switch (this.operator) {
        case "÷":
          this.result = this.number_one / this.number_two;
          break;
        case "×":
          this.result = this.number_one * this.number_two;
          break;
        case "+":
          this.result = this.number_one + this.number_two;
          break;
        case "-":
          this.result = this.number_one - this.number_two;
          break;
        case "^":
          this.result = Math.pow(this.number_one, this.number_two);
          break;
        case "log":
          this.result = Math.log(this.number_one) / Math.log(this.number_two);
          break;
        default:
  				console.log("Error. Unknown operator: " + this.operator);
      }

      // Prints result on screen
  		this.showResult();
  		// Resets values of numbers, operator and result
  		this.initVariables();
    }
  }

}

let html_calculator = new SciCalculator();
