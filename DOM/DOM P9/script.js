// Task 1 - change title color
document.querySelector(".caption .title").style.color = "#d51139";

// Task 2 - change button background color
const button = document.querySelector(".add-to-cart");
console.log(button);
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#d61139";
});
