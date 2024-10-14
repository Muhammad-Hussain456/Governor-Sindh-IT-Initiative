import students from "./data";
export function GetAllStudents() {
  return students;
}
export function GetEntryTestPassedStudents() {
  return students.filter((student) => student.entryTest.isPassed === true);
}
export function GetOnsiteStudents() {
  return students.filter((student) => student.isOnsiteAllowed === true);
}
export function GetStudentData(rollNumber: number) {
  return students.find((student) => student.rollNo === rollNumber);
}
export function IsEntryTestPassed(rollNumber: number) {
  if (
    students.find(
      (student) =>
        student.rollNo === rollNumber && student.entryTest.isPassed === true
    )
  ) {
    return true;
  } else {
    return false;
  }
}
export function IsOnsiteAllowed(rollNumber: number) {
  if (
    students.find(
      (student) =>
        student.rollNo === rollNumber &&
        student.entryTest.isPassed === true &&
        student.isOnsiteAllowed === true
    )
  ) {
    return true;
  } else {
    return false;
  }
}
