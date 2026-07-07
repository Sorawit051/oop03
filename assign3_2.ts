
enum CourseStatus {
  Open = "Open",
  Closed = "Closed",
  Full = "Full"
}


interface Student {
  name: string;
  id: string; 
}


interface Course {
  title: string;
  code: string;
  status: CourseStatus;
  students: Student[]; 
}

function enroll(student: Student, course: Course): void {

  if (course.status === CourseStatus.Open) {
    course.students.push(student);
    console.log(`Success: Enrolled ${student.name} into ${course.title}.`);
  } else {

    console.log(`Failed: Cannot enroll ${student.name}. The course ${course.title} is currently ${course.status}.`);
  }
}

const student1: Student = { name: "Alice", id: "S001" };
const student2: Student = { name: "Bob", id: "S002" };


const courseA: Course = { 
  title: "Introduction to TypeScript", 
  code: "CS101", 
  status: CourseStatus.Open, 
  students: [] 
};

const courseB: Course = { 
  title: "Advanced JavaScript", 
  code: "CS201", 
  status: CourseStatus.Full, 
  students: [] 
};

console.log("--- ทดสอบลงทะเบียนวิชาที่สถานะ Open ---");
enroll(student1, courseA);


console.log("\n--- ทดสอบลงทะเบียนวิชาที่สถานะ Full ---");
enroll(student2, courseB);


console.log("\nStudents in courseA:", courseA.students);