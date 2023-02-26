//Start of Calculation script.
//declaration and reset of the two chosen numbers and the current opreator
let currentNum = 0;
let newNumber = 5;
let currentOperator = "";

//Setting up btnNumber and listen event
let btnNumberClicked = document.querySelectorAll(".btnNumber");
btnNumberClicked.forEach((element) =>
  element.addEventListener("click", (event) => {
    let numberClick = event.target.innerHTML;
    displayUpdate(numberClick);
  })
);
//Setting up btnOperator and listen event
let btnOperatorClicked = document.querySelectorAll(".btnOperator");
btnOperatorClicked.forEach((element) =>
  element.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
  })
);

//Function to send btnNumber click to display
function displayUpdate(numberClick) {
  let displayOld = document.getElementById("inputDisplay").value;
  let displayNew = displayOld + numberClick;
  document.getElementById("inputDisplay").value = displayNew;
}

//main operator
function operator(exspression) {
  switch (exspression) {
    case operatorAdd:
      currentNum = operatorAdd();
      return currentNum;

    case operatorSubtract:
      currentNum = operatorSubtract();
      return currentNum;

    case operatorMultiply:
      currentNum = operatorMultiply();
      return currentNum;

    case operatorDivide:
      currentNum = operatorDivide();
      return currentNum;
  }
}
//Functions for the chosen operators
//Function for add
function operatorAdd() {
  currentNum = currentNum + newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for subtract
function operatorSubtract() {
  currentNum = currentNum - newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for multiply
function operatorMultiply() {
  currentNum = currentNum * newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for divide
function operatorDivide() {
  if (currentNum <= 0 || newNumber <= 0) {
    console.log(newNumber);
    console.log(currentNum);
    return alert("You cannot divide with 0");
  }
  currentNum = currentNum / newNumber;
  newNumber = 0;
  return currentNum;
}
