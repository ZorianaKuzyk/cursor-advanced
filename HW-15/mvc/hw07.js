// Створіть 3 об'єкти, що описують країни:
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як
// IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
  return this.tax * salary;
}

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти
// у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти
// у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number }
// кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної
// країни та значення salary.
// profit = salary - taxes;
function getMySalary(country) {
  let result = {};
  result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
  result.tax = country.tax * result.salary;
  result.profit = result.salary - result.tax;
}

export { getMyTaxes, ukraine };
