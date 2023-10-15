document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = "";
    let secondOperand = "";
  
    // Helper function to update the display
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonValue = button.textContent;
  
        // Handle digit and decimal input
        if (!isNaN(buttonValue) || buttonValue === ".") {
          currentInput += buttonValue;
          updateDisplay();
        }
  
        // Handle operator input
        else if ("+-*/".includes(buttonValue)) {
          if (currentOperator === "") {
            currentOperator = buttonValue;
            firstOperand = currentInput;
            currentInput = "";
            updateDisplay();
          }
        }
  
        // Handle clear button
        else if (buttonValue === "C") {
          currentInput = "";
          currentOperator = "";
          firstOperand = "";
          secondOperand = "";
          updateDisplay();
        }
  
        // Handle backspace button
        else if (buttonValue === "←") {
          currentInput = currentInput.slice(0, -1);
          updateDisplay();
        }
  
        // Handle equals button
        else if (buttonValue === "=") {
          secondOperand = currentInput;
          if (currentOperator && firstOperand && secondOperand) {
            firstOperand = parseFloat(firstOperand);
            secondOperand = parseFloat(secondOperand);
            switch (currentOperator) {
              case "+":
                currentInput = (firstOperand + secondOperand).toString();
                break;
              case "-":
                currentInput = (firstOperand - secondOperand).toString();
                break;
              case "*":
                currentInput = (firstOperand * secondOperand).toString();
                break;
              case "/":
                if (secondOperand !== 0) {
                  currentInput = (firstOperand / secondOperand).toString();
                } else {
                  currentInput = "Error";
                }
                break;
            }
            currentOperator = "";
            firstOperand = currentInput;
            secondOperand = "";
            updateDisplay();
          }
        }
      });
    });
  });
  