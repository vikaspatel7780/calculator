// Variables
let currentExpression = '';

// Function to append values to the expression
function appendValue(value) {
  currentExpression += value;
  document.getElementById('result').value = currentExpression;
}

// Function to calculate the result
function calculate() {
  let result;
  try {
    result = eval(currentExpression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

// Function to clear the result
function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}
