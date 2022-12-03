let firstQuestion = +prompt("Enter first number", "");
let secondQuestion = +prompt("Enter second number", "");

function add(firstQuestion, secondQuestion){
  return firstQuestion + secondQuestion;
}

function sub(firstQuestion, secondQuestion){
  return firstQuestion - secondQuestion;
}

function mult(firstQuestion, secondQuestion){
  return firstQuestion * secondQuestion;
}

function div(firstQuestion, secondQuestion){
  return firstQuestion / secondQuestion;
}


alert(add(firstQuestion, secondQuestion)); 
alert(sub(firstQuestion, secondQuestion));
alert(mult(firstQuestion, secondQuestion));
alert(div(firstQuestion, secondQuestion));



