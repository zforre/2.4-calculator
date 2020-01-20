// This is becoming extraordinarily hard and frustrating
class Calculator {
  constructor(currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currenOperand = ''
    this.operation = undefined
  }

  appendNumber(number) {
    this.currentOperand = number
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }



}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-all-clear]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})








// for(let i = 0; i < $buttons.length; i = i +1) {
//
// $button [i].addEventListener('click', (event) => {
//   console.log('event', event);
//   console.log('target', event.target);
//   console.log('value', event.target.value);
//   console.log('type', typeof event.target.value)
// });
// }





// let $buttons = document.querySelectorAll('button');
//
// let pushNumber = (event => {
//   console.log(`you pressed the number ${event.target.value}`);
// }
//
// for(let i = 0; i < $buttons.length; i = i +1) {
//   $buttons[i].addEventListener('click'), pushNumber);
// }

//   Notes ^^^^
