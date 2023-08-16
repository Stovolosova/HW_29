function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25);
    this.attendance.fill(undefined, 0, 25);
  }
  
  Student.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  
  Student.prototype.getAverageGrade = function() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };
  
  Student.prototype.present = function() {
    const index = this.attendance.indexOf(undefined);
    if (index !== -1) {
      if (index < 25) {
        this.attendance[index] = true;
        console.log(`${this.firstName} ${this.lastName} Присутній!`);
      } else {
        console.log("Максимальна кількість записів досягнута!");
      }
    } else {
      console.log('Вже проставлено всі відвідуваності.');
    }
  };
  
  Student.prototype.absent = function() {
    const index = this.attendance.indexOf(undefined);
    if (index !== -1) {
      if (index < 25) {
        this.attendance[index] = false;
        console.log(`${this.firstName} ${this.lastName} Відсутній!`);
      } else {
        console.log("Максимальна кількість записів досягнута!");
      }
    } else {
      console.log("Вже проставлено всі відвідуваності.");
    }
  };
  
  Student.prototype.summary = function() {
    const averageGrade = this.getAverageGrade();
    const attendanceCount = this.attendance.filter(item => item !== null).length;
    const attendancePercentage = attendanceCount / this.attendance.length;
  
    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
 
const student1 = new Student('Олена', 'Стоволосова', 1984, [89, 92, 88, 95]);
const student2 = new Student('Ірина', 'Сергієнко', 1999, [90, 91, 87, 94]);
const student3 = new Student('Світлана', 'Василенко', 2000, [70, 85, 90, 74]);
  
  student1.present();
  student2.absent();
 
  console.log(student1.getAge());
  console.log(student1.getAverageGrade());
  console.log(student2.summary());