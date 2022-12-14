"use strict";

const hours = prompt('Введите желаемое кол-во часов!', '');

function hoursInSec(i){
return i * 60 * 60;
}
 
const result =  `В ${hours} часе(ах) - ${hoursInSec(hours)} секунд`;

alert(result);