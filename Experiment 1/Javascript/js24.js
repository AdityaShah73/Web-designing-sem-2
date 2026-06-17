function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

const students = [
    { name: "Aditya", marks: 85 },
    { name: "Rahul", marks: 92 }
];

students.forEach(student => {
    console.log(student.name, getGrade(student.marks));
});