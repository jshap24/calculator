const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key');


currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

function add(a, b) {
    let res = a + b;
    return res;
}

function subtract(a, b) {
    let res = a - b;
    return res;
}

function multiply(a, b) {
    let res = a * b;
    return res;
}

function divide(a, b) {
    let res = a / b;
    return res; 
}

if(equalsKey){
    equalsKey.addEventListener('click', operate);
}

function operate(num1, num2, operator) {
    if (operator === '+') return add(num1, num2)
    else if (operator === '-') return subtract(num1, num2)
    else if (operator === '*') return multiply(num1, num2)
    else if (operator === '/') return divide(num1, num2)
    else return NaN
}    

console.log(operate(6, 4, '*'));

//Create the functions that populate the display when you click the 
//number buttons… you should be storing the ‘display value’ in a variable somewhere 
//for use in the next step.

let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    })
})

operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {
        if (firstNumber && storedNumber) {
            displayResult();
        }
        // save the first number
        firstNumber = storedNumber;
        // get the operator that was clicked
        clickedOperator = operator.textContent;
        previousOperand.textContent = storedNumber + clickedOperator;
        storedNumber = '';

        console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber)
        console.log(clickedOperator);
    })
}));

if(equalsKey) {
    equalsKey.addEventListener('click', function() {
    displayResult();
    });
}

function displayResult() {
    result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
    console.log('FirstNumber' + firstNumber + 'Stored' + storedNumber);

}


//    Add a “clear” button.

if(clearButton) {
    clearButton.addEventListener('click', function() {
        clearDisplay();
    })};

function clearDisplay() {
    currentOperand.textContent = '0';
    previousOperand.textContent = ' ';
    storedNumber = '';
    clickedOperator = '';
    firstNumber = ''; 
    result = '';
}

if(deleteButton) {
    deleteButton.addEventListener('click', function(){
        del();
})};

function del() {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1)
  }