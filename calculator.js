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
		// Inicializa variables
		this.number_one = 0;
    this.number_two = 0;
    this.result = 0;
    this.operator = "";
	}

  initScreen() {
    // Colocar 0 en la pantalla
    this.screen.innerText = "0";
  }

  initButtonEvents() {
    // Asignar eventos a los botones
    for (let i = 0; i < this.buttons.length; i++) {

      if (this.buttons[i].classList.contains("number")) {
        this.buttons[i].addEventListener("click", this.showNumber.bind(this));

      } else if (this.buttons[i].classList.contains("point")) {
        this.buttons[i].addEventListener("click", this.showPoint.bind(this));

      } else if (this.buttons[i].classList.contains("clear")) {
        this.buttons[i].addEventListener("click", this.resetCalculator.bind(this));

      } else if (this.buttons[i].classList.contains("operator")) {
        this.buttons[i].addEventListener("click", this.storeFirstNumberAndOperator.bind(this));

      } else if (this.buttons[i].classList.contains("equal")) {
        this.buttons[i].addEventListener("click", this.operateNumbers.bind(this));
      }

    }

  }

  showNumber(e) {
    // Mostrar numero presionado en pantalla
    let numberPressed = e.target.innerText;
    if (this.screen.innerText === "0" || this.resultOnScreen === true) {
      this.screen.innerText = numberPressed;
    } else {
      this.screen.innerText += numberPressed;
    }
		this.resultOnScreen = false;

  }

  showPoint() {
    // Concatena punto decimal
    if (!this.screen.innerText.includes(".")) {
      this.screen.innerText += ".";
    }
  }

  storeFirstNumberAndOperator(e) {
    // Almacena 1er numero y el operador presionado
    this.number_one = Number(this.screen.innerText);
    this.operator = e.target.innerText;
		this.initScreen();
  }

  operateNumbers() {
    // Almacenar 2do numero y ejecutar la operación
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
				console.log("Error");
    }

		// Muestra resultado en pantalla
		this.showResult();
		// Reinicia variables de numeros, operador y resultado
		this.initVariables();
  }

	showResult() {
		// Muestra resultado en pantalla
		this.screen.innerText = this.result;
		this.resultOnScreen = true;
	}

  resetCalculator() {
    // Limpiar variables, limpiar pantalla y llamar initScreen()
		this.initVariables();
		this.initScreen();
  }
}

let html_calculator = new Calculator();
