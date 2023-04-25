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

export { getMaxDigit };
