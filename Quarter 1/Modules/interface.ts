
interface EntryTest {
  isPassed: boolean;
  ObtainedMarks: number;
  totalMarks: number;
}
interface Student {
  id: number;
  firstName: string;
  lastName: string;
  rollNo: number;
  isOnsiteAllowed: boolean;
  entryTest: EntryTest;
}
export default Student;