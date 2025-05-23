let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ` ${operator} `;
}

function appendDot() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
}

function calculateResult() {
  try {
    display.value = eval(display.value.replace("÷", "/").replace("×", "*"));
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function calculate(type) {
  let value = parseFloat(display.value);
  if (type === "sqrt") {
    display.value = Math.sqrt(value);
  } else if (type === "%") {
    display.value = value / 100;
  }
}
