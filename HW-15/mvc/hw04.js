const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function add(...args) {
  return [...args];
}

function getPairs(param) {
  let newArr = [];
  newArr.push(add(param[0], param[2]));
  newArr.push(add(param[1], param[3]));
  newArr.push(add(param[4], param[5]));
  return newArr;
}

function getThemes(param1, param2) {
  let newArr = [];
  for (let i = 0; i < param1.length; i++) {
    newArr[i] = add(param1[i].join(" і "), param2[i]);
  }
  return newArr;
}

function getMarks(param1, param2) {
  let newArr = [];
  for (let i = 0; i < param1.length; i++) {
    newArr[i] = add(param1[i], param2[i]);
  }
  return newArr;
}

function getPairsMarks(param1, param2) {
  let newArr = [];
  for (let i = 0; i < param1.length; i++) {
    newArr[i] = add(
      param1[i].join(" і "),
      param2[i],
      Math.floor(Math.random() * 5 + 1)
    );
  }
  return newArr;
}

const pairs = getPairs(students);
const pairsTheme = getThemes(pairs, themes);
const studentMarks = getMarks(students, marks);
const pairsMarks = getPairsMarks(pairs, themes);

export { getPairs };
