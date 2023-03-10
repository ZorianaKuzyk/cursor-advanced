// Завдання №1
let getMaxDigit = function (number) {
  let str = number.toString();
  let result;
  let i = 9;

  while (i >= 0) {
    if (str.indexOf(i.toString()) >= 0) {
      result = i.toString();
      break;
    }
    i--;
  }
  return result;
};

// Завдання №2
const getDegreeNumber = (number, degree) => {
  let result = 1;

  while (degree) {
    result = number * result;
    degree = degree - 1;
  }

  return result;
};

// Завдання №3
const formattingName = function (name) {
  const str = name.trim().toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Завдання №4
const getSalary = (salary) => salary - salary * 0.195 + "грн";

// Завдання №5
let getRandomNumber = (N, M) => Math.round(Math.random() * (M - N + N));

// Завдання №6
function repetitionLetters(str, letter) {
  let letter_Count = 0;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

// Завдання №9
function getRandomPassword(number = 8) {
  let randomPass = "";
  for (i = 1; i <= number; i++) {
    randomPass = randomPass + String(Math.floor(Math.random() * 10));
  }
  return randomPass;
}

// Завдання №10
const deleteLetters = (letter, word) => word.replaceAll(letter, "");

// Завдання №11
function getPalindrome(str) {
  return str.split("").reverse().join("") == str;
}

// Завдання №12
function deleteDuplicateLetter(words) {
  wordVariable = words.trim().toLowerCase();
  let letterCheck;
  let oneLetter = "";
  let i = 0;

  do {
    letterCheck = wordVariable[i];
    if (
      wordVariable.indexOf(letterCheck) ===
      wordVariable.lastIndexOf(letterCheck)
    )
      oneLetter += letterCheck;
  } while (wordVariable.length - 1 >= ++i);
  return oneLetter;
}

document.writeln(
  "Завдання №1. Отримати число та вивести найбільшу цифру в цьому числі." +
    "<br>"
);
document.writeln("15127 -> " + getMaxDigit(15127) + "<br><br>");

document.writeln(
  "Завдання №2. Визначити ступінь (за приклад взято число 5 в 3-му ступені)" +
    "<br>"
);
document.writeln(getDegreeNumber(5, 3) + "<br><br>");

document.writeln(
  "Завдання №3. Форматування імені, роблячи першу букву великою." + "<br>"
);
document.writeln(
  '(" оЛекСаНдР  ") -> ' + formattingName("  оЛекСаНдР ") + "<br><br>"
);

document.writeln(
  "Завдання №4. Вираховує суму, що залишається після оплати податку 19,5% від заробітньої плати у 1000 грн." +
    "<br>"
);
document.writeln(
  "Чиста сума після вирахування податку становить: " +
    getSalary(1000) +
    "<br><br>"
);

document.writeln(
  "Завдання №5. Повернути випадкове ціле число в діапазоні від N до M." + "<br>"
);
document.writeln("Приклад: (1, 10) -> " + getRandomNumber(1, 10) + "<br><br>");

document.writeln(
  "Завдання №6. Рахує скільки разів певна буква повторюється в слові." + "<br>"
);
document.writeln(
  "Приклад: к-сть букв 'r' у слові 'cursor' =" +
    repetitionLetters("cursor", "r") +
    "<br><br>"
);

document.writeln("Завдання №9. Функція генерації випадкового паролю." + "<br>");
document.writeln("Випадковий пароль:  -> " + getRandomPassword(8) + "<br><br>");

document.writeln("Завдання №10. Видаляє всі букви з речення." + "<br>");
document.writeln(
  'Результат: ("a", "blablabla") -> ' +
    deleteLetters("a", "blablabla") +
    "<br><br>"
);

document.writeln("Завдання №11. Перевірка речення на паліндром." + "<br>");
document.writeln("Приклад: (мадам) -> " + getPalindrome("мадам") + "<br><br>");

document.writeln(
  "Завдання №12. Видаляє з речення  букви, які зустрічаються більше 1 разу." +
    "<br>"
);
document.writeln(
  "Приклад: (Бісквіт був дуже ніжним) -> " +
    deleteDuplicateLetter("Бісквіт був дуже ніжним") +
    "<br><br>"
);
