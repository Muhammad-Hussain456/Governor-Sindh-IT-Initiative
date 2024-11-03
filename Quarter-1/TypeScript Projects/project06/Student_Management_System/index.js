"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

import inquirer_1 from "inquirer";
var student1LoginInfo = {
    id: 64493,
    password: '@1234@543',
};
function studentDetail() {
    return __awaiter(this, void 0, void 0, function () {
        var inputStudentName, selectPortions, _a, student1Profile, curriculum, results;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1.prompt([
                        {
                            name: "name",
                            message: "Enter your Registration ID:",
                            type: "number",
                        },
                        {
                            name: "password",
                            message: "Enter your password:",
                            type: 'password',
                        },
                    ])];
                case 1:
                    inputStudentName = _b.sent();
                    _a = inputStudentName.name && inputStudentName.password;
                    switch (_a) {
                        case student1LoginInfo.id && student1LoginInfo.password: return [3 /*break*/, 2];
                    }
                    return [3 /*break*/, 4];
                case 2:
                    console.log('Login successfully');
                    return [4 /*yield*/, inquirer_1.prompt([
                            {
                                name: "portions",
                                message: "select:",
                                type: 'list',
                                choices: [
                                    'Profile',
                                    'Registeration',
                                    'Results',
                                    'Curriculum',
                                    'SemesterSchedule',
                                    'Attendence',
                                    'Exams',
                                    'Fee Voucher',
                                    'Scholarship',
                                ]
                            },
                        ])];
                case 3:
                    selectPortions = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    {
                        console.log('Not Found!');
                    }
                    _b.label = 5;
                case 5:
                    student1Profile = {
                        profilePicture: 'Profile picture',
                        name: 'M H',
                        fatherName: 'G H',
                        CNIC: 6746565354,
                        Contact: 66466389,
                        email: 'mmgf@gfgf56',
                        ResidentialAddress: 'fgfggfdg',
                    };
                    curriculum = {
                        department: 'Computer Science',
                        program: 'Cyber Security',
                        degree: 'Bachelor',
                        RegID: 6745,
                        TotalSemesters: 8,
                        CurrentSemester: 4,
                        totalCredithours: 137,
                        CreditHoursCompleted: 48,
                        CreditHoursRemaining: 189,
                        Courses: {
                            firstSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            secondSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            thirdSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            fourthSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            fifthSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            sixthSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            seventhSemester: [
                                'ICT', 'ICT Lab'
                            ],
                            eightSemester: [
                                'ICT', 'ICT Lab'
                            ],
                        },
                    };
                    results = {
                        name: 'M H',
                        RegID: 6547,
                        semester: 2,
                        grades: {
                            courses: ['ICT', 'ICT LAB'],
                            Grades: ['B+', 'B'],
                        },
                        GPA: 3.5,
                        CGPA: 3.4,
                    };
                    if (selectPortions.portions === 'Profile') {
                        console.log(student1Profile);
                    }
                    else if (selectPortions.portions === 'Curriculum') {
                        console.log(curriculum);
                    }
                    else if (selectPortions.portions === 'Results') {
                        console.log(results);
                    }
                    else {
                        console.log('error');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
studentDetail();
