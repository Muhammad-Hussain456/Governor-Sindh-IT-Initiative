#! /usr/bin/env node
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(pName, fName, pAge) {
        this.fullName = pName;
        this.fatherName = fName;
        this.age = pAge;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullName, fatherName, age, rYear, rID, departm, programEn, semest) {
        var _this = _super.call(this, fullName, fatherName, age) || this;
        _this.coursesEnrolled = [];
        _this.regYear = rYear;
        _this.regID = rID;
        _this.department = departm;
        _this.programEnrolled = programEn;
        _this.semester = semest;
        return _this;
    }
    Student.prototype.registerNewCourse = function (course) {
        this.coursesEnrolled.push(course.name);
    };
    Student.prototype.getListOfCourses = function () {
        console.log(this.fullName + " Courses: ");
        this.coursesEnrolled.forEach(function (element) {
            console.log(element);
        });
    };
    return Student;
}(Person));
var Course = /** @class */ (function () {
    function Course(cCode, cName) {
        this.students = [];
        this.instructors = [];
        this.name = cName;
        this.CourseCode = cCode;
        Course.allCourses.push(cName);
    }
    Course.prototype.addStudents = function (std) {
        this.students.push(std);
    };
    Course.prototype.setInstructor = function (inst) {
        this.instructors.push(inst);
    };
    Course.prototype.getListOfStudents = function () {
        console.log(this.name + "Students Names: ");
        this.students.forEach(function (element) {
            console.log(element.fullName);
        });
    };
    Course.prototype.getListOfInstructors = function () {
        console.log(this.name + " Instructor Name: ");
        this.instructors.forEach(function (element) {
            console.log(element.fullName);
        });
    };
    Course.displayAllCourses = function () {
        console.log("\nAvailable Courses: ");
        Course.allCourses.forEach(function (element) {
            console.log(element);
        });
    };
    Course.allCourses = [];
    return Course;
}());
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(fullName, fatherName, age, experience, salary) {
        var _this = _super.call(this, fullName, fatherName, age) || this;
        _this.courses = [];
        _this.teachingExperience = experience;
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourses = function (course) {
        this.courses.push(course.name);
    };
    return Instructor;
}(Person));
var c1 = new Course(1, "Software Engineering");
var c2 = new Course(2, "Civil Engineering");
var c3 = new Course(3, "Mechanical Engineering");
"";
var c4 = new Course(4, "Electrical Engineering");
var c5 = new Course(5, "Automobile Engineering");
console.log(c1);
var std1 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std2 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std3 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std4 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std5 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std6 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std7 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std8 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std9 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
var std10 = new Student("Eshal Noman", "Salman Ali", 33, 2024, 34345, "c", "cb", 3);
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
var inst1 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6 + "Years", 5800 + "Dollars");
var inst2 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6 + "Years", 5800 + "Dollars");
var inst3 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6 + "Years", 5800 + "Dollars");
var inst4 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6 + "Years", 5800 + "Dollars");
var inst5 = new Instructor("Ali Abbas", "Ghulam Hasan", 20, 6 + "Years", 5800 + "Dollars");
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
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
        Department.allDepartments.push(this.name);
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course.name);
    };
    Department.prototype.getCourses = function () {
        this.courses.forEach(function (element) {
            console.log(element);
        });
    };
    Department.displayAllDepartments = function () {
        console.log("\nAll Departments: ");
        Department.allDepartments.forEach(function (element) {
            console.log(element);
        });
    };
    Department.allDepartments = [];
    return Department;
}());
var d1 = new Department("SE");
var d2 = new Department("CE");
var d3 = new Department("ME");
var d4 = new Department("EE");
var d5 = new Department("AE");
Department.displayAllDepartments();
d1.addCourse(c1);
d2.addCourse(c2);
d3.addCourse(c3);
d4.addCourse(c4);
d5.addCourse(c5);
