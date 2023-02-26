//Start of Calculation script.
let currentNum = 0;
let newNumber = 5;

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
