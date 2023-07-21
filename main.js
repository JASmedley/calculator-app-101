// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null
let secondNum = null
let operation = null

// this function takes in the number you type in the input field and saves it to the "firstNum" variable
const saveFirstNumber = (num1) => {
  firstNum = parseInt(num1)  
}

// this function takes in the number you type in the 2nd input field and saves it to the "secondNum" variable
const saveSecondNumber = (num2) => {
  // "parseInt" is a built in function in JS that converts a string/word into a number
  secondNum = parseInt(num2)
}

// this function takes in two argument/numbers and returns the sum of them
const add = (FirstNumber, SecondNumber) => {
  const sum = FirstNumber + SecondNumber
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const mariahcarey = numA - numB
  return mariahcarey
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:

const multiply = (numOne, numTwo) => {
  const beyonce = numOne * numTwo
  return beyonce
}

const divide = (numI, numII) => {
  const cumberbatch = numI / numII
  return cumberbatch
}
const modulus = (numUno, numDos) => {
  const ledger = numUno % numDos
  return ledger
}
// and % to get a remainder.

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
const changeOperation = (WhichWeWillCallTheChosenOperation) => {
  ActualOperation = WhichWeWillCallTheChosenOperation
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (CallingItTheOperationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("result").innerHTML = "Results: " + CallingItTheOperationResults

  // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
  // Here we give it a string: "Results: " and add the value of the operation to it.
}

// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
const equals = () => {
  switch (ActualOperation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum))
    break;
    case "division": putResultInElement(divide(firstNum, secondNum)) 
    break;
    case "modulus": putResultInElement(modulus(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}

