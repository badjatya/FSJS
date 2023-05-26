// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const values = ["lco", "pw skills", "learncodeonline", "pw skills", "ineuron"];

console.log(
    "First occurrence of word pw skills: ",
    values.indexOf("pw skills")
);
console.log(
    "Last occurrence of word pw skills: ",
    values.lastIndexOf("pw skills")
);
