let sum = 0;
let i = 0;
let j = 0;

let userNumberN = +prompt("Введіть перше число N");

while (i < 1) {
  if (Number.isInteger(userNumberN) && !Number.isNaN(userNumberN)) {
    +userNumberN;
    i++;
  } else {
    alert("Введені дані не є числом (N).");
  }
}

let userNumberM = +prompt(
  "Введіть друге число M, щоб було більше за попереднє число N"
);

while (j < 1) {
  if (Number.isInteger(userNumberM) && !Number.isNaN(userNumberM)) {
    +userNumberM;
    j++;
  } else {
    alert("Введені дані не є числом (M).");
  }
}

let message = confirm("Включати парні числа у додаванні?");

for (let counter = userNumberN; counter <= userNumberM; counter++) {
  if (message && counter % 2 === 0) continue;
  sum += counter;
}

if (message == true) {
  alert("Сума всіх чисел дорівнює: " + sum);
} else {
  alert("Сума всіх непарних чисел дорівнює: " + sum);
}
