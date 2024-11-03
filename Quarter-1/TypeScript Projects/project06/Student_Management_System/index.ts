import inquirer from "inquirer";
import chalk from "chalk" ;


interface loginInfo{
  id: number;
  password: string;
}

const student1LoginInfo:loginInfo = {
  id: 64493,
  password: '@1234@543',
   
}

interface StudentProfile{
  profilePicture: string;
  name: string;
  fatherName: string;
  CNIC: number;
  Contact: number;
  email: string;
  ResidentialAddress: string;
  
}
interface Curriculum{
  department: string,
  program: string,
  degree: string,
  RegID: number,
  TotalSemesters: number,
  CurrentSemester: number,
  totalCredithours: number,
  CreditHoursCompleted: number,
  CreditHoursRemaining: number,
  Courses:{}
}
interface Results{
  name: string;
  RegID: number;
  semester: number;
  grades: {
    courses: [string?,string?,string?,string?,string?,string?,string?,string?,];
    Grades: [string?,string?,string?,string?,string?,string?,string?,string?,];
  },
  GPA: number;
  CGPA: number;
  

}
async function studentDetail() {
const inputStudentName = await inquirer.prompt([
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
 
]);
var selectPortions;
switch(inputStudentName.name && inputStudentName.password){
  case student1LoginInfo.id && student1LoginInfo.password: {
   console.log('Login successfully')
   selectPortions = await inquirer.prompt([
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
    ])
   break;
  }
  default: {
   console.log('Not Found!')
  }
}

const student1Profile:StudentProfile = {
  profilePicture: 'Profile picture',
  name: 'M H',
  fatherName: 'G H',
  CNIC: 6746565354,
  Contact: 66466389,
  email: 'mmgf@gfgf56',
  ResidentialAddress: 'fgfggfdg',
}
const curriculum:Curriculum ={
  department: 'Computer Science',
  program: 'Cyber Security',
  degree: 'Bachelor',
  RegID: 6745,
  TotalSemesters: 8,
  CurrentSemester: 4,
  totalCredithours: 137,
  CreditHoursCompleted: 48,
  CreditHoursRemaining: 189,
  Courses:{
    firstSemester:[
      'ICT', 'ICT Lab'
    ],
    secondSemester:[
      'ICT', 'ICT Lab'
    ],
    thirdSemester:[
      'ICT', 'ICT Lab'
    ],
    fourthSemester:[
      'ICT', 'ICT Lab'
    ],
    fifthSemester:[
      'ICT', 'ICT Lab'
    ],
    sixthSemester:[
      'ICT', 'ICT Lab'
    ],
    seventhSemester:[
      'ICT', 'ICT Lab'
    ],
    eightSemester:[
      'ICT', 'ICT Lab'
    ],
    
  },
}
const results:Results={
  name: 'M H',
  RegID: 6547,
  semester: 2,
  grades: 
  {
    courses: ['ICT', 'ICT LAB'],
    Grades: ['B+', 'B'],
  },
  GPA: 3.5,
  CGPA: 3.4,
  

}
if(selectPortions.portions === 'Profile'){
  console.log(student1Profile);
}
else if(selectPortions.portions === 'Curriculum'){
  console.log(curriculum);
}
else if(selectPortions.portions === 'Results'){
  console.log(results);
}
else{
  console.log('error');
}

}

studentDetail();
