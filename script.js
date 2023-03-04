const lastOperation = document.querySelector('.last-operation');
const currentOperation = document.querySelector('.current-operation');
lastOperation.innerHTML = "";
currentOperation.innerHTML = "0";


const clearButton = document.querySelector('.btn.clear')
clearButton.addEventListener('click', function(e) {
  lastOperation.innerHTML = "";
  currentOperation.innerHTML = "0";
});

const deleteButton = document.querySelector('.btn.delete');
deleteButton.addEventListener('click', function(e) {
  if (currentOperation.innerHTML === "Infinity" || currentOperation.innerHTML === "NaN") {
    currentOperation.innerHTML = "";
  } else {
    currentOperation.innerHTML = currentOperation.innerHTML.slice(0, -1);
  }
});

const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.splice(0, 2);
buttons.forEach(button => { 
  button.addEventListener('click', function(e) {
    clickFunction(e.target);
  })
});

window.addEventListener('keydown', function(e) {
  const button= document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (!button) return;
  clickFunction(button);
})


function clickFunction(e) {
  let currentButton = e.innerHTML;
  let ifCurrentNumber = parseInt(currentButton) || currentButton === "0";
  let textLength = currentOperation.innerHTML.length;
  let previousButton = currentOperation.innerHTML[textLength - 1];
  let ifPreviousNumber = parseInt(previousButton) || previousButton === "0";
  let ifCurrentOperator = isOperator(currentButton);
  let ifPreviousOperator = isOperator(previousButton);
  let operatorNumber = numberOfOperator(currentOperation.innerHTML);
  let lastChar;
  let dotNumber;
  let operatorIndex;
  let dotIndex;
  if (currentOperation.innerHTML === "0") {
    if (!(currentButton === "=")) {
      if (ifCurrentNumber) {
        currentOperation.innerHTML = currentButton;
      } else {
        currentOperation.innerHTML += currentButton;
      }
      
    }
  } else if (currentOperation.innerHTML === "") {
    if (ifCurrentNumber) {
      currentOperation.innerHTML += currentButton;
    } else if (currentButton === ".") {
      currentOperation.innerHTML = "0" + currentButton;
    }
  } else if ((previousButton === "." || lastChar === ".") && currentButton !== ".") {
    if (ifCurrentOperator && operatorNumber < 1) {
      currentOperation.innerHTML = currentOperation.innerHTML.slice(0, -1);
      currentOperation.innerHTML += currentButton;
    } else if (ifCurrentNumber) {
      currentOperation.innerHTML += currentButton;
    }   
  } else if (ifPreviousOperator && !(ifCurrentOperator || currentButton === "=")) {
    if (ifCurrentNumber) {
      currentOperation.innerHTML += currentButton;
    } else if (currentButton === ".") {
      currentOperation.innerHTML  += "0" + currentButton;
      lastChar = currentOperation.innerHTML[textLength - 1];
    }
  } else if (ifPreviousNumber) {
    if (ifCurrentNumber) {
      currentOperation.innerHTML += currentButton;
    } else if (currentButton === "=" && operatorNumber < 1) {
      lastOperation.innerHTML = currentOperation.innerHTML + currentButton;
    } else if (ifCurrentOperator && operatorNumber < 1) {
      currentOperation.innerHTML += currentButton;
    } else if ((ifCurrentOperator || currentButton === "=") && operatorNumber <= 1) {
      lastOperation.innerHTML = currentOperation.innerHTML + "=";
      currentOperation.innerHTML = operationCalculator(currentOperation.innerHTML).toFixed(3);
      if (ifCurrentOperator) {
        currentOperation.innerHTML += currentButton;
      }
    } else if (currentButton === ".") {
      dotNumber = numberOfDot(currentOperation.innerHTML);
      operatorIndex = indexOfOperator(currentOperation.innerHTML);
      dotIndex = currentOperation.innerHTML.indexOf(".");
      if (dotNumber === 0) {
        currentOperation.innerHTML += currentButton;
      } else if (dotNumber === 1 && dotIndex < operatorIndex) {
        currentOperation.innerHTML += currentButton;
      }
    }
  }
}

let symbols = ["÷", "+", "-", "×"];
function numberOfOperator(text) {
  let counter = 0;
  for (let i = 0; i < symbols.length; i++) {
    if (text.includes(symbols[i])) {
      counter++;
    }
  }
  return counter;
}

function numberOfDot(text) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ".") {
      counter++;
    }
  }
  return counter;
}


function isOperator(currentButton) {
  for (let i = 0; i < symbols.length; i++) {
    if (currentButton === symbols[i]) {
      return true;
      break;
    }
  }
  return false;
}

function whichOperator(text) {
  for (let i = 0; i < symbols.length; i++) {
    if (text.includes(symbols[i])) {
      return symbols[i];
    }
  }
}

function indexOfOperator(text) {
  let operator = whichOperator(text);
  let operatorIndex = text.indexOf(operator);
  return operatorIndex;
}



function operationCalculator(text) {
  let operator = whichOperator(text);
  let operatorIndex = text.indexOf(operator);
  let firstNumber = Number(text.slice(0, operatorIndex));
  let secondNumber = Number(text.slice(operatorIndex + 1));
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
      break;
    case "-":
      return firstNumber - secondNumber;
      break;
    case "×":
      return firstNumber * secondNumber;
      break;
    case "÷":
      return firstNumber / secondNumber;
      break;
  }
}




