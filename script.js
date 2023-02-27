//Start of Calculation script.
//declaration and reset of the two chosen numbers and the current opreator
let currentNum = 0;
let newNumber = 0;
let numA = 0;
let numB = 0;
let currentOperator = "";
let operatorCall = "";
let isDisplayCurrentNum = false;
let isDivideWithZero = false;

//Setting up btnNumber and listenevent
let btnNumberClicked = document.querySelectorAll(".btnNumber");
btnNumberClicked.forEach((element) =>
  element.addEventListener("click", (event) => {
    // see if display is = current num
    if (isDisplayCurrentNum == false && isDivideWithZero == false) {
      let numberClick = event.target.innerHTML;
      displayUpdate(numberClick);
    } else {
      isDivideWithZero = false;
      isDisplayCurrentNum = false;
      document.getElementById("inputDisplay").value = "";
      let numberClick = event.target.innerHTML;
      displayUpdate(numberClick);
    }
  })
);
//Setting up btnOperator and listen event
let btnOperatorClicked = document.querySelectorAll(".btnOperator");
btnOperatorClicked.forEach((element) =>
  element.addEventListener("click", (event) => {
    currentOperator = event.target.value;
    btnOperatorClick();
  })
);
//Setting up btnResult and listen event
let btnResultClicked = document.querySelectorAll(".btnResult");
btnResultClicked.forEach((element) =>
  element.addEventListener("click", (event) => {
    numB = Number(document.getElementById("inputDisplay").value);
    btnResultClick();
  })
);

//Setting up btnClear and listen event
let btnClear = document.querySelectorAll(".btnClear");
btnClear.forEach((element) =>
  element.addEventListener("click", (event) => {
    document.getElementById("inputDisplay").value = "";
    numA = "";
    numB = "";
    currentOperator = "";
    isDisplayCurrentNum = false;
    isDivideWithZero = false;
  })
);

//Function to send btnNumber click to display
function displayUpdate(numberClick) {
  let displayOld = document.getElementById("inputDisplay").value;
  let displayNew = displayOld + numberClick;
  document.getElementById("inputDisplay").value = displayNew;
}

//Function on btnOperator click
function btnOperatorClick() {
  //newNumber = document.getElementById("inputDisplay").value;
  //operator(operatorCall);
  if (numA <= 0) {
    numA = Number(document.getElementById("inputDisplay").value);
    document.getElementById("inputDisplay").value = "";
  } else {
    numB = Number(document.getElementById("inputDisplay").value);
    btnResultClick();
  }
}

//Function on btnResult click
function btnResultClick() {
  //newNumber = document.getElementById("inputDisplay").value;
  operator(currentOperator);
  numA = currentNum;
  numB = "";
  currentOperator = "";
  if (isDivideWithZero == true) {
    currentNum = "";
    document.getElementById("inputDisplay").value = "Error";
  } else {
    document.getElementById("inputDisplay").value = currentNum;
    isDisplayCurrentNum = true;
  }
}

//main operator
function operator(exspression) {
  switch (exspression) {
    case "operatorAdd":
      currentNum = operatorAdd();
      return currentNum;

    case "operatorSubtract":
      currentNum = operatorSubtract();
      return currentNum;

    case "operatorMultiply":
      currentNum = operatorMultiply();
      return currentNum;

    case "operatorDivide":
      currentNum = operatorDivide();
      return currentNum;

    case "result":
      document.getElementById("inputDisplay").value = currentNum;
      return currentNum;
  }
}
//Functions for the chosen operators
//Function for add
function operatorAdd() {
  currentNum = numA + numB;

  return currentNum;
}
//Function for subtract
function operatorSubtract() {
  currentNum = numA - numB;
  return currentNum;
}
//Function for multiply
function operatorMultiply() {
  currentNum = numA * numB;
  return currentNum;
}
//Function for divide
function operatorDivide() {
  if (numA <= 0 || numB <= 0) {
    console.log(numA);
    console.log(numB);
    isDivideWithZero = true;
    currentNum = "";
    return currentNum;
    //return alert("You cannot divide with 0");
  }
  currentNum = numA / numB;
  return currentNum;
}
