// 18. Write a program which tells the number of days in a month, now consider leap year.

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

const getDaysInMonth = (month, year) => {
    const lowercaseMonth = month.toLowerCase();

    if (lowercaseMonth === "february") {
        if (isLeapYear(year)) {
            console.log(29);
        } else {
            console.log(28);
        }
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
};

getDaysInMonth("January", 2023);
