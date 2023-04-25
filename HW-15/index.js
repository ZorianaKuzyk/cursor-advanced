import { maxNumber } from "./mvc/hw01.js";
import { getMaxDigit } from "./mvc/hw03.js";
import { getPairs } from "./mvc/hw04.js";
import { getRandomArray } from "./mvc/hw05.js";
import { getStudentsNames } from "./mvc/hw06.js";
import { getMyTaxes } from "./mvc/hw07.js";
import { BudgetStudent } from "./mvc/hw08.js";
import { getRandomChinese } from "./mvc/hw11.js";
import { newFontGenerator } from "./mvc/hw13.js";

const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

console.log(`HW01: Максимальна ціна: = ${maxNumber} грн.`);
console.log(
  `HW03: Отримати число та вивести найбільшу цифру в цьому числі (15127)  = ${getMaxDigit(
    15127
  )} `
);
console.log(
  `HW04: Розділіть студентів на пари(хлопець + дівчина) для работи над
  проєктом = ${getPairs([
    "Олександр",
    "Ігор",
    "Олена",
    "Іра",
    "Олексій",
    "Світлана",
  ])}`
);
console.log(
  `HW05: Рандомний масив цілих чисел: = ${getRandomArray(15, 1, 100)}`
);
console.log(
  `HW06: Функція яка повертає імена студентів у алфавітному порядку = ${getStudentsNames(
    students
  )} `
);
console.log(
  `HW07: Функція, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. = ${getMyTaxes.call(
    ukraine,
    1000
  )} грн`
);
const studentKyiv = new BudgetStudent(
  1400,
  "Київський політехнічний інститут",
  3,
  "Федорчук Михайло Володимирович"
);
console.log(`HW08: Cтипендія студента = ${studentKyiv.fullName} грн `);
console.log(`HW11: = ${getRandomChinese(4)} `);
console.log(`HW13: = ${newFontGenerator(14)} `);
