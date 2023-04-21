'use strict';

function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.attendance = new Array(10);
  this.grades = new Array(10);
  this.attendanceCount = 0;
  this.gradesCount = 0;


  // Возвраст
  this.getAge = function () {
    const now = new Date();
    const year = now.getFullYear();
    return year - this.birthYear;
  }

  // Средний бал 
  this.getAverageGrade = function () {
    if (this.gradesCount === 0) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < this.gradesCount; i++) {
      sum += this.grades[i];
    }
    return sum / this.gradesCount;
  }

  // Средняя посещаемость
  this.getAttendanceAverage = function () {
    if (this.attendanceCount === 0) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < this.attendanceCount; i++) {
      if (this.attendance[i]) {
        sum++
      }
    }
    return sum / this.attendanceCount;
  };

  // Посещаемось
  this.present = function () {
    if (this.attendanceCount >= 10) {
      console.error('Array is full');
    }
    this.attendance[this.attendanceCount] = true;
    this.attendanceCount++
  }

  // Отсутсвие
  this.absent = function () {
    if (this.attendanceCount >= 10) {
      console.error('Array is full');
    }
    this.attendance[this.attendanceCount] = false;
    this.attendanceCount++
  }


  this.mark = function (grade) {
    if (this.gradesCount >= 10) {
      console.error('Array is full');
    }
    this.grades[this.gradesCount] = grade;
    this.gradesCount++
  }



  this.summary = function () {
    const attendanceAverage = this.getAttendanceAverage();
    const gradesAverage = this.getAverageGrade();

    if (attendanceAverage > 0.9 && gradesAverage > 9) {
      return "Ути какой молодчинка!";
    } else if (attendanceAverage < 0.9 || gradesAverage < 9) {
      return "Норм, но можно лучше";
    } else {
      return "Редиска!";
    }
  };
}


const marat = new Student('Marat', 'Zhekov', 1995);

marat.present();
marat.present();
marat.present();
marat.present();
marat.absent();
marat.mark(10);
marat.mark(10);
marat.mark(10);
marat.mark(2);


console.log(marat);
console.log(marat.getAge());
console.log(marat.getAverageGrade());
console.log(marat.getAttendanceAverage());
console.log(marat.summary());


