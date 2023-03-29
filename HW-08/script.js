class Student {
  constructor(fullName, university, course) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksArray = [5, 4, 4, 5];
    this.studying = true;
  }

  getInfo() {
    return (
      "Студент " +
      this.course +
      "го курсу " +
      this.university +
      ", " +
      this.fullName
    );
  }
  getAverageMark() {
    if (this.studying === true) {
      let amount = 0;
      for (let i = 0; i < this.marksArray.length; i++) {
        amount += this.marksArray[i];
      }
      return amount / this.marksArray.length;
    }
  }

  dismiss() {
    this.studying = false;
    let markNull = this.marksArray;
    markNull = null;
    console.log(`Студент виключений: ${markNull}`);
  }
  recover() {
    this.studying = true;
    this.marksArray;
    console.log(`Студент поновлений: ${student1.marksArray}`);
  }

  get marks() {
    if (this.studying) {
      return this.marksArray;
    } else {
      return null;
    }
  }

  set marks(value) {
    if (this.studying) {
      return (this.marksArray = this.marksArray.concat(value));
    }
  }
}
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);

    setInterval(() => {
      this.getScholarship();
    }, 30000);
  }

  getScholarship() {
    if (this.getAverageMark() >= 4 && this.studying === true) {
      console.log("Ви отримали 1400 грн. стипендії");
    } else if (this.getAverageMark() < 4 && this.studying === true) {
      console.log("Ваш середній бал занизький для отримання стипендії");
    } else if (this.studying === false) {
      console.log(`Студента ${this.fullName} виключено з навчального закладу`);
    }
  }
}
let student1 = new Student(
  "Остап Родоманський Бендер",
  "Вищої Школи Психотерапії м.Одеса",
  "1"
);

console.log(student1.getInfo());

console.log(`Гетер оцінок: ${student1.marks}`);
student1.marks = 5;
console.log(`Сетер оцінок: ${student1.marks}`);

console.log(`Середня оцінка:  ${student1.getAverageMark()}`);
student1.dismiss();
student1.recover();
const student2 = new BudgetStudent("Роман Родоманський ", "ЛНУ м.Львів", "1");
student2.getScholarship();
