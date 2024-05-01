const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('number'));
const operators = Array.from(document.getElementsByClassName('operator'));
const decimal = document.getElementsByClassName('decimal')[0];
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;
const updateDisplay = () => {
  display.value = currentNum;
}
const clearAll = () => {
  currentNum = '';
  prevNum = '';
  result = null;
  currentOperator = null;
  updateDisplay();
}
const appendNumber = (event) => {
  currentNum += event.target.value;
  updateDisplay();
}
const chooseOperator = (event) => {
  if (currentOperator !== null) calculateResult();
  currentOperator = event.target.value;
  prevNum = currentNum;
  currentNum = '';
}
const calculateResult = () => {
  const num1 = parseFloat(prevNum);
  const num2 = parseFloat(currentNum);
  if (currentOperator === '+') result = num1 + num2;
  else if (currentOperator === '-') result = num1 - num2;
  else if (currentOperator === '*') result = num1 * num2;
  else if (currentOperator === '/') result = num1 / num2;
  currentNum = result.toString();
  prevNum = '';
  result = null;
  currentOperator = null;
  updateDisplay();
}
const useDecimal = () => {
  if (!currentNum.includes('.')) currentNum += '.';
  updateDisplay();
}
buttons.forEach(button => button.addEventListener('click', appendNumber));
operators.forEach(operator => operator.addEventListener('click', chooseOperator));
decimal.addEventListener('click', useDecimal);
clear.addEventListener('click', clearAll);
equals.addEventListener('click', calculateResult);