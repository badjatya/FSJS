// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();

console.log(
    "YYYY-MM-DD HH:mm ",
    date.toISOString().slice(0, 16).replace("T", " ")
);
console.log(
    "DD-MM-YYYY HH:mm ",
    date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
);
console.log(
    "DD/MM/YYYY HH:mm ",
    date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
);
