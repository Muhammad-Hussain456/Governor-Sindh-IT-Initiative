"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOnsiteAllowed = exports.IsEntryTestPassed = exports.GetStudentData = exports.GetOnsiteStudents = exports.GetEntryTestPassedStudents = exports.GetAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
function GetAllStudents() {
    return data_1.default;
}
exports.GetAllStudents = GetAllStudents;
function GetEntryTestPassedStudents() {
    return data_1.default.filter((student) => student.entryTest.isPassed === true);
}
exports.GetEntryTestPassedStudents = GetEntryTestPassedStudents;
function GetOnsiteStudents() {
    return data_1.default.filter((student) => student.isOnsiteAllowed === true);
}
exports.GetOnsiteStudents = GetOnsiteStudents;
function GetStudentData(rollNumber) {
    return data_1.default.find((student) => student.rollNo === rollNumber);
}
exports.GetStudentData = GetStudentData;
function IsEntryTestPassed(rollNumber) {
    if (data_1.default.find((student) => student.rollNo === rollNumber && student.entryTest.isPassed === true)) {
        return true;
    }
    else {
        return false;
    }
}
exports.IsEntryTestPassed = IsEntryTestPassed;
function IsOnsiteAllowed(rollNumber) {
    if (data_1.default.find((student) => student.rollNo === rollNumber &&
        student.entryTest.isPassed === true &&
        student.isOnsiteAllowed === true)) {
        return true;
    }
    else {
        return false;
    }
}
exports.IsOnsiteAllowed = IsOnsiteAllowed;
