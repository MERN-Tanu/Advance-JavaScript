const student = {
  sworkshop: "ethical hacking",
  srollno: 78,
  branch: [],
  enrollment(enrollmentno, name, branch) {
    console.log(
      `${enrollmentno} ${name} is enrolled for ${this.sworkshop} and their rollno is ${this.srollno}`
    );
    this.branch.push({
      stu: `${this.sworkshop} ${name}`,
      branch,
      enrollmentno,
    });
  },
};

// student.enrollment(125425243, "Priya", "Computer Science");

const newstudent = {
  sworkshop: "Machine Learning",
  srollno: 12,
  branch: [],
};

const selectedstudent = {
  sworkshop: "blockchain",
  srollno: 90,
  branch: [],
};

const enrollment = student.enrollment;

// call function

enrollment.call(newstudent, 3546477, "Kajal", "Information Technology");
console.log(newstudent);
enrollment.call(student, 1247487, "Priya", "Mechnical");
console.log(student);
enrollment.call(selectedstudent, 12453657, "Rishi", "Civil");
console.log(selectedstudent);

// apply function

enrollment.apply(newstudent, [2435368, "Jake", "Information technology"]);
console.log(newstudent);
enrollment.apply(student, [1254674, "Richeal", "Cs"]);
console.log(student);
enrollment.apply(selectedstudent, [5467748, "Patel", "ME"]);
console.log(selectedstudent);

//  Bind function

const enrollnewstudent = enrollment.bind(newstudent);
const enrollstudent = enrollment.bind(student);
const enrollselectedstudent = enrollment.bind(selectedstudent);

enrollnewstudent(3647467, "Olga", "IT");
enrollstudent(4758859, "Shradha", "CS");
enrollselectedstudent(567889, "Shreya", "CS");
