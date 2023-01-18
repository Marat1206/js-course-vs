function mainFunction(exponentiation) {
  let a = +prompt("Введите первое число", "");
  let b = +prompt("Введите второе число", "");

  exponentiation(a, b);
  // multiplay(a, b);
  // division(a, b);
  // modulo(a, b);
}

function exponentiation(a, b) {
  let result = Math.pow(a, b);
  alert(result);
}

function multiplay(a, b) {
  let result = a * b;
  alert(result);
}

function division(a, b) {
  let result = a / b;
  alert(result);
}

function modulo(a, b) {
  let result = a % b;
  alert(result);
}


mainFunction(modulo);
