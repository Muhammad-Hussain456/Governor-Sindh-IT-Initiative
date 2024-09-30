#! /usr/bin/env node
class Person {
  fullName: string;
  fatherName: string;
  age: number;
  constructor(pName: string, fName: string, pAge: number) {
    this.fullName = pName;
    this.fatherName = fName;
    this.age = pAge;
  }
}

class Student extends Person {
  regYear: number;
  regID: number;
  department: string;
  programEnrolled: string;
  semester: number;
  courses: string[] = [];
  constructor(
    fullName: string,
    fatherName: string,
    age: number,
    rYear: number,
    rID: number,
    departm: string,
    programEn: string,
    semest: number,
  ) {
    super(fullName, fatherName, age);
    this.regYear = rYear;
    this.regID = rID;
    this.department = departm;
    this.programEnrolled = programEn;
    this.semester = semest;
  }
  registerNewCourse(course: Course) {
    this.courses.push(course.name);
  }
  getListOfCourses() {
    console.log(this.fullName + " Courses: ");
    this.courses.forEach((element) => {
      console.log(element);
    });
  }
}

class Course {
CourseCode: number;
  name: string;
  students: Student[] = [];
  instructors: Instructor[] = [];
  static allCourses: string[] = [];
  constructor(cCode: number, cName: string) {
    this.name = cName;
    this.CourseCode = cCode;
     Course.allCourses.push(cName);
  }
  addStudents(std: Student) {
    this.students.push(std);
  }
setInstructor(inst: Instructor){
    this.instructors.push(inst);

}
getListOfStudents(){
    console.log(this.name + "Students Names: ");
    this.students.forEach(element => {
        console.log(element.fullName);
    })
}
getListOfInstructors(){
console.log(this.name + " Instructor Name: ");
this.instructors.forEach(element => {
    console.log(element.fullName);
})
}
static displayAllCourses(){
console.log("\nAvailable Courses: ");
Course.allCourses.forEach(element => {
    console.log(element);
})
}
}
class Instructor extends Person {
  teachingExperience: number | string;
  courses: string[] = [];
  salary: number | string;

  constructor(
    fullName: string,
    fatherName: string,
    age: number,
    experience: number | string,
    salary: number | string
  ) {
    super(fullName, fatherName, age);
    this.teachingExperience = experience;
    this.salary = salary;
  }
  assignCourses(course: Course) {
    this.courses.push(course.name);
  }
}
let c1 = new Course(1, "Software Engineering");
let c2 = new Course(2, "Civil Engineering");
let c3 = new Course(3, "Mechanical Engineering");``
let c4 = new Course(4, "Electrical Engineering");
let c5 = new Course(5, "Automobile Engineering");
console.log(c1);
let std1 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std2 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std3 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std4 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std5 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std6 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std7 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std8 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std9 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
let std10 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);

c1.addStudents(std1);
std1.registerNewCourse(c1);
std1.getListOfCourses();

c1.addStudents(std2);
std2.registerNewCourse(c1);
std2.getListOfCourses();


c2.addStudents(std3);
std3.registerNewCourse(c2);
std3.getListOfCourses();

c2.addStudents(std4);
std4.registerNewCourse(c2);
std4.getListOfCourses();


c3.addStudents(std5);
std5.registerNewCourse(c3);
std5.getListOfCourses();

c3.addStudents(std6);
std6.registerNewCourse(c3);
std6.getListOfCourses();

Course.displayAllCourses();

let inst1 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6+"Years",5800+"Dollars");
let inst2 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6+"Years",5800+"Dollars");
let inst3 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6+"Years",5800+"Dollars");
let inst4 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6+"Years",5800+"Dollars");
let inst5 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6+"Years",5800+"Dollars");

c1.setInstructor(inst1);
inst1.assignCourses(c1);

c2.setInstructor(inst2);
inst2.assignCourses(c2);

c3.setInstructor(inst3);
inst3.assignCourses(c3);

c4.setInstructor(inst4);
inst4.assignCourses(c4);

c5.setInstructor(inst5);
inst5.assignCourses(c5);


c1.getListOfStudents();
c2.getListOfStudents();
c3.getListOfStudents();
c4.getListOfStudents();
c5.getListOfStudents();

c1.getListOfInstructors();
c2.getListOfInstructors();
c3.getListOfInstructors();
c4.getListOfInstructors();
c5.getListOfInstructors();


class Department{
  name: string;
  courses: string[] = [];
  static allDepartments: string[] = [];

  constructor(name: string){
      this.name = name;
      Department.allDepartments.push(this.name);
  }
  addCourse(course: Course){
      this.courses.push(course.name);
  }
  getCourses(){
      this.courses.forEach(element => {
          console.log(element);
  })
  }
  static displayAllDepartments(){
      console.log("\nAll Departments: ")
      Department.allDepartments.forEach(element => {
          console.log(element);
  }) 
  }
}
let d1 = new Department("SE");
let d2 = new Department("CE");
let d3 = new Department("ME");
let d4 = new Department("EE");
let d5 = new Department("AE");


Department.displayAllDepartments();


d1.addCourse(c1);
d2.addCourse(c2);
d3.addCourse(c3);
d4.addCourse(c4);
d5.addCourse(c5);