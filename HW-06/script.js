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

// Завдання №1
function getSubjects(student) {
  const array = Object.keys(student.subjects);
  const result = array.map((item) => {
    return item.slice(0, 1).toUpperCase() + item.slice(1).replaceAll("_", " ");
  });
  return result;
}
console.log(getSubjects(students[0]));

// Завдання №2
function getAverageMark(student) {
  let result = 0;
  const array = student.subjects;
  const subj = Object.keys(student.subjects);
  const marksSubject = subj.map((item) => {
    return array[item];
  });
  let studentMarksArray = [];
  for (i = 0; i < marksSubject.length; i++) {
    studentMarksArray = studentMarksArray.concat(marksSubject[i]);
  }
  for (i = 0; i < studentMarksArray.length; i++) {
    result = result + studentMarksArray[i];
  }
  return Math.round((result / studentMarksArray.length) * 100) / 100;
}
console.log(getAverageMark(students[0]));

// Завдання №3
function getStudentInfo(student) {
  const obj = {
    name: student.name,
    course: student.course,
    average: getAverageMark(student),
  };
  return obj;
}
console.log(getStudentInfo(students[0]));

// Завдання №4
function getStudentsNames(student) {
  let arrayNames = [];
  for (let item in student) arrayNames.push(student[item].name);
  return arrayNames.sort();
}
console.log(getStudentsNames(students));

// Завдання №5
function getBestStudent(arrayStud) {
  let studentName = "";
  let bestMark = 0;
  for (let item in arrayStud) {
    if (bestMark < getAverageMark(arrayStud[item])) {
      studentName = arrayStud[item].name;
    }
  }
  return studentName;
}
console.log(getBestStudent(students));

// Завдання №6
function calculateWordLetters(item) {
  const text = item.toLowerCase().split("");
  let result = {};
  text.forEach(function (item) {
    result[item] = result[item] ? result[item] + 1 : 1;
  });
  return result;
}
console.log(calculateWordLetters("test"));
