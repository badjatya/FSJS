// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (filename) => {
    const parts = filename.split(".");
    console.log(parts[parts.length - 1]);
};
getFileExtension("Hello.js");
