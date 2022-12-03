// Task #1

let obj = {};

obj.name = 'John';
obj.surname = 'Smith';
obj.name = 'Pete';
delete obj.name;


// Task #2
const user = {
  name: 'John'
};

// это будет работать?

user.name = 'Pete';

// Все сработает т.к мы изменям сам обьект а не константу 


// Task #3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


let sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);