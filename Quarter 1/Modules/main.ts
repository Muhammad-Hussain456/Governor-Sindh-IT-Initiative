import {
  GetAllStudents,
  GetEntryTestPassedStudents,
  GetOnsiteStudents,
  GetStudentData,
  IsEntryTestPassed,
  IsOnsiteAllowed,
} from "./student";
const getAllStudents = GetAllStudents();
console.log(getAllStudents);
const getEntryTestPassedStudents = GetEntryTestPassedStudents();
// console.log(getEntryTestPassedStudents);
const getOnsiteStudents = GetOnsiteStudents();
// console.log(getOnsiteStudents);
const getStudentData = GetStudentData(103);
// console.log(getStudentData);
const isEntryTestPassed = IsEntryTestPassed(106);
// console.log(isEntryTestPassed);
const isOnsiteAllowed = IsOnsiteAllowed(105);
// console.log(isOnsiteAllowed);
