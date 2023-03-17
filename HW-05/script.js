const array = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

// Завдання №1
function getRandomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (max - min) + min);
    arr.push(randomNumber);
  }
  return arr;
}

console.log("Рандомний масив цілих чисел: " + getRandomArray(15, 1, 100));

// Завдання №2
const getModa = array.reduce(function (item, i) {
  if (item.hasOwnProperty(i)) {
    item[i] += 1;
  } else {
    item[i] = 1;
  }
  return item;
}, {});
const duplicateCount = Object.values(getModa).filter((i) => i > 1).length;
console.log("Мода: " + duplicateCount);

// Завдання №3
function getAverage(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum / number.length;
}

console.log("Середнє арифметичне: " + getAverage(array));

// Завдання №4
function getMedian(item) {
  item.sort((a, b) => a - b);
  if (item.length % 2) {
    return item[Math.floor(item.length / 2)];
  } else {
    return (item[item.length / 2] + item[item.length / 2 - 1]) / 2;
  }
}

console.log("Медіана: " + getMedian(array));

// Завдання №5
const filterEvenNumbers = (arr) => {
  const checkArray = arr.filter((item) => item % 2);
  return checkArray;
};
console.log("Фільтр парних чисел: " + filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Завдання №6
function countPositiveNumbers(arr) {
  const checkArray = arr.filter((item) => {
    return item > 0;
  });
  return checkArray.length;
}
console.log(
  "Кількість більших чисел: " + countPositiveNumbers([1, -2, 3, -4, -5, 6])
);

// Завдання №7
const getDividedByFive = (arr) => {
  const checkArray = arr.filter((item) => item % 5 === 0);
  return checkArray;
};
console.log("Числа, які діляться  на 5: " + getDividedByFive(array));
// Завдання №8
const badWords = ["fuck", "shit"];
function replaceBadWords(str) {
  const strArray = str.split(" ");
  const result = strArray.map(function (word) {
    for (i = 0; i < badWords.length; i++) {
      if (word.toLowerCase().includes(badWords[i])) {
        word = word
          .toLowerCase()
          .replaceAll(badWords[i], "*".repeat(badWords[i].length));
      }
    }
    return word;
  });
  return result.join(" ");
}
const phrase = "Are you fucking kidding?";
console.log("Початкова фраза: " + phrase);
console.log("Фраза з цензурою: " + replaceBadWords(phrase));

// Завдання №9
const divideByThree = function (word) {
  let arr = word.concat().toLowerCase();
  let arrOut = "";
  let k = 0;
  while (arr.length > 0) {
    arrOut += [arr.slice(0, 3)] + ";";
    arr = arr.slice(3);
  }
  return arrOut.slice(0, arrOut.length - 1).split(";");
};
const dividedWord = "Commander";
console.log(
  "Слово: " +
    dividedWord +
    ", яке розділено у масив по складам з 3-х букв: " +
    divideByThree(dividedWord).join("; ") +
    "\n\n"
);

//  Завдання №10
function generateCombinations(word) {
  if (word.length < 2) {
    return word;
  } else if (word.length > 10) {
    console.log("Your word is too long");
  } else {
    let result = [];
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let partOfWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      let partOfWordArray = generateCombinations(partOfWord);
      for (j = 0; j < partOfWordArray.length; j++) {
        result.push(letter + partOfWordArray[j]);
      }
    }
    return result;
  }
}
const checkedWord = "man";
console.log(
  "Зі слова '" +
    checkedWord +
    "' можливі комбінації з букв: " +
    generateCombinations("man").join("; ")
);
