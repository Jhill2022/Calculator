const resultText = document.getElementsByClassName('result-text')[0];
const numberBtns = document.querySelectorAll('.row .btn');
const operationBtns = document.querySelectorAll('.operation'); 
let storedValue = null;
let operator = null;

numberBtns.forEach((btn, index) => {
  
    btn.addEventListener('click', onNumberPressed);
   
  
});

operationBtns.forEach((btn) => {
    btn.addEventListener('click', onOperationPressed);
});
    


function onNumberPressed(event) {
  const number = event.target.innerText;

  if (number === '.') {
    if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes('.'))
      return;
  }

  resultText.innerHTML += number.toString();
}

function canOperate() {
  return resultText.innerHTML.length >= 1;
}

function operate(number){
    let result;

    switch(operator){
        case "+": 
        result = storedValue + number;
            break;
        case "-":
            result = storedValue - number;
            break;
        case "*":
            result = storedValue * number;
            break;
        case "/":
            result = storedValue / number;
            break;
    }

    resultText.innerHTML = result
    storedValue = null
    operator = null
}

function onOperationPressed(event) {
  const number = parseFloat(resultText.innerHTML);

  if (!canOperate()) return;

  const operation = event.target.innerText;

  if (operation === '=' && storedValue !== null) {
    return operate(number)
  } else if (operation === 'c') {
    storedValue = null;
    operator = null;
  } else {
    operator = operation;
    storedValue = number;
  }
  resultText.innerHTML = "";
}
// const resultText = document.getElementsByClassName("result-text")[0];
// const btns = document.querySelectorAll(".numbers.row.btn"); // assuming .numbers, .row, and .btn are the classes for buttons

// btns.forEach((btn) => {
//     btn.addEventListener("click", onNumberPressed)
// })

// function onNumberPressed(event) {
//     const number = event.target.innerText;

//     if(number === "."){
//         if(resultText.innerHTML.length === 0) return;
//         if(resultText.innerHTML.includes(".")) return;
//     }

//     resultText.innerHTML += number.toString()
// }
