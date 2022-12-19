// "use strict";

// let a = 0;

// let comparison = a === 0 ? "Верно" : "Не верно";

// console.log(comparison);

// // ========================

// a = 1;

// let comparison2 = a > 0 ? "Верно" : "Не верно";

// console.log(comparison2);

// // ========================

// a = -1;

// let comparison3 = a < 0 ? "Верно" : "Не верно";

// console.log(comparison3);

// // =========================

// a = 5;

// let comparison4 = a >= 0 ? "Верно" : "Не верно";

// console.log(comparison4);

// // =========================

// a = 0;

// let comparison5 = a >= 0 ? "Верно" : "Не верно";

// console.log(comparison5);

// // =========================

// a = 20;

// let comparison6 = a != 0 ? "Верно" : "Не верно";

// console.log(comparison6);

// // =========================

// a = "test";

// let comparison7 = a === "test" ? "Верно" : "Не верно";

// console.log(comparison7);

// a = "1";

// let comparison8 = a === "1" ? "Верно" : "Не верно";

// console.log(comparison8);

// // =========================

// a = 4;

// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }

// a = 5;

// if (a === 0 || a === 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

// a = 1;
// let b = 5;

// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// a = 0;
// b = 7;

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("Верно");
// } else {
//   console.log("Не верно");
// }


let num = +prompt('Введите число от 1 до 4', '');

switch(num){
  case 1:
    alert('Зима');
    break;
    case 2:
      alert('Весна');
      break;
      case 3:
        alert('Лето');
        break;
        case 4:
          alert('Осень');
          break;
          default:
            alert('Что то пошло не так, попробуйте снова');
}