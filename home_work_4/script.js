let actions = prompt("What action do you want to take? (add, sub, mult, div)").toLowerCase();

let firstQuestion = +prompt("Enter first number");
let secondQuestion = +prompt("Enter first number");

if(actions == "add"){
  alert(firstQuestion + secondQuestion);
}else if(actions == "sub"){
  alert(firstQuestion - secondQuestion);
}else if(actions == "mult"){
  alert(firstQuestion * secondQuestion);
}else if(actions == "div"){
  alert(firstQuestion / secondQuestion);
}else{
  alert("Wrong value, try again");
}
