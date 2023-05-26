// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

// 28 A
console.log("28 A");
const printTrianglePattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
};
printTrianglePattern(3);

// 28 B
console.log("28 B");
const printSquarePattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= rows; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
};
printSquarePattern(3);

// 28 C
console.log("28 C");
const printPyramidPattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= rows - i; j++) {
            pattern += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += "*";
        }
        console.log(pattern);
    }
};
printPyramidPattern(3);
