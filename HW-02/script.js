let numberUserN;
let numberUserM;
let sum = 0;

while (!Number.isInteger(numberUserN) || numberUserN < 0) {
  numberUserN = +prompt("Введіть число  N");
}

while (!Number.isInteger(numberUserM) || numberUserN >= numberUserM) {
  numberUserM = +prompt("Введіть число  M (більше ніж число N");
}

const message = confirm("Включати парні? (OK - ТАК; Cкасувати - НІ)");

for (let counter = numberUserN; counter <= numberUserM; counter++) {
  if (message === true) {
    sum += counter;
  } else {
    if (counter % 2 === 0) continue;
    sum += counter;
  }
}
const result =
  "Число (N) користувача  = " +
  numberUserN +
  "<br />Число (M) користувача = " +
  numberUserM +
  "<br />Чи були включенні парні числа = " +
  message +
  "<br />Результат = " +
  sum;

document.writeln(result);
