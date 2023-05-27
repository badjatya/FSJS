// Remove the languages that have 2.0 in their name(Every alternative language)

const links = document.querySelectorAll(".main__languages a");
for (let i = 0; i < links.length; i++) {
  const element = links[i];
  if (element.innerText.includes(2.0)) {
    document.querySelector(".main__languages").removeChild(element);
  }
}

// Assignment 2
const inputForm = document.querySelector(".main__form-input");
const submitButton = document.querySelector(".main__form-btn");

inputForm.removeAttribute("disabled");
inputForm.value = "ineuron";
submitButton.removeAttribute("disabled");
