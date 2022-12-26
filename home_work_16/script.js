"use strict";

let num = +prompt("Введите число");

let i = 2;

while(num % i){
  i++;
}

if(num < 1){
  console.log(NaN);
}else{
  console.log(i);
}