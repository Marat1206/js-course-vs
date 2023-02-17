"use strict";

function numberGenerator(size = 100) {
  let usedNumbers = [];

  const randomNumber = () => {

    try {
      let numberGenerator = Math.floor(Math.random() * size) + 1;

      if (usedNumbers.includes(numberGenerator)) {
        return randomNumber();
      }

      usedNumbers.push(numberGenerator);
      return numberGenerator;

    } catch {
      return null;
    }
  }

  return randomNumber;
}

const numGen = numberGenerator();

for (let i = 0; i <= 100; i++) {
  if (numGen === null) {
    break;
  }
  console.log(numGen());

}