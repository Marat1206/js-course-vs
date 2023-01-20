"use strict";

const countPotatoes = (borch = 48, potato = 75, priceOfOnePotato = 13) => {
  const potatoesForLitr = potato * 4;

  let numberOfPotatoes = (potatoesForLitr * borch) / 1000;

  const potatoesTotalPrice = Math.ceil(numberOfPotatoes * priceOfOnePotato);

  return `Количество Картошек на ${borch} литров борща: ${numberOfPotatoes} \n\n Цена за ${numberOfPotatoes} картошек составляет: ${potatoesTotalPrice} `;
};

console.log(countPotatoes());
