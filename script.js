//Start of Calculation script.
let currentNum = 0;
let newNumber = 5;

//currentNum = operatorAdd(currentNum, newNumber);

//Function for add
function operatorAdd(currentNum, newNumber) {
  currentNum = currentNum + newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for subtract
function operatorSubtract(currentNum, newNumber) {
  currentNum = currentNum - newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for multiply
function operatorMultiply(currentNum, newNumber) {
  currentNum = currentNum * newNumber;
  newNumber = 0;
  return currentNum;
}
//Function for divide
function operatorDivide(currentNum, newNumber) {
  if (currentNum <= 0 || newNumber <= 0) {
    return alert("You cannot divide with 0");
  }
  currentNum = currentNum / newNumber;
  newNumber = 0;
  return currentNum;
}
