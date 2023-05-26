// 17. Write a program which tells the number of days in a month.

function getDaysInMonth(month) {
    var lowercaseMonth = month.toLowerCase();

    if (lowercaseMonth === "february") {
        console.log(28);
    } else if (
        lowercaseMonth === "april" ||
        lowercaseMonth === "june" ||
        lowercaseMonth === "september" ||
        lowercaseMonth === "november"
    ) {
        console.log(30);
    } else {
        console.log(31);
    }
}

getDaysInMonth("January");
