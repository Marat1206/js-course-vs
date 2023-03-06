'use strict';

const ul = document.querySelector('ul');

const att = ul.attributes;

const attName = [];

const attValue = [];

for (let attrs of att) {
  attName.push(attrs.name);
  attValue.push(attrs.value);
}

console.log(attName);
console.log(attValue);




const lastLi = ul.lastElementChild.innerHTML = 'Привет меня зовут Марат';

const firstLi = ul.firstElementChild;

firstLi.setAttribute(['data-my-name'], 'Марат');


console.log(lastLi);
console.log(firstLi);




ul.removeAttribute(['data-dog-tail']);

console.log(ul);