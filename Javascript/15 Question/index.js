// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const gradeToStudent = (marks) => {
    if (marks >= 80 && marks <= 100) {
        console.log("Grade A");
    } else if (marks >= 70 && marks <= 89) {
        console.log("Grade B");
    } else if (marks >= 60 && marks <= 69) {
        console.log("Grade C");
    } else if (marks >= 50 && marks <= 59) {
        console.log("Grade D");
    } else if (marks >= 0 && marks <= 49) {
        console.log("Grade F");
    }
};

gradeToStudent(85);
gradeToStudent(72);
gradeToStudent(66);
gradeToStudent(54);
gradeToStudent(5);
