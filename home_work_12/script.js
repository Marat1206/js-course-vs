"use strict";

let answer;

const yearOfBirth = prompt("Введите год рождения!");

if (yearOfBirth !== null && !isNaN(+yearOfBirth)) {
  answer = `\n\nВаш возраст: ${new Date().getFullYear() - yearOfBirth}!`;

  const city = prompt("В каком городе живете?");

  if (city !== null && city.trim().length) {
    switch (city) {
      case "Киев":
        answer += "\nВы живете в столице Украины!";
        break;
      case "Минск":
        answer += "\nВы живете в столице Бульбы!";
        break;
      case "Москва":
        answer += "\nВаша столица БОЛОТО!";
        break;
      default:
        answer += `\nВы живете в столице какой-то страны :)`;
        break;
    }
    const sport = prompt("Какой любимый вид спорта у вас?");

    if (sport !== null && city.trim().length) {
      switch (sport) {
        case "Бокс":
          answer += "\nКруто! Хочешь стать Майком Тайсоном!";
          break;
        case "Футбол":
          answer += "\nКруто! Хочешь стать Леонелем Месси!";
          break;
        case "Баскетбол":
          answer += "\nКруто! Хочешь стать Майклом Джордоном!";
          break;
        default:
          answer += `\nУх ты! Хочешь стать крутым спортсеном!`;
      }
    } else {
      alert("Жаль, что Вы не захотели ввести свой любимый вид спорта!");
    }
  } else {
    alert("Жаль, что Вы не захотели ввести свой город!");
  }
} else {
  alert("Жаль, что Вы не захотели ввести свой год рождения!");
}

alert(answer);
