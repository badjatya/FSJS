// creating a new accordion
let accordianWrapper = document.querySelector(".accordian-wrapper");
let accordionElement = document.createElement("div");
accordionElement.innerHTML = ` 
<h3>Skills</h3>
<p>I possess a very good command over Full Stack Development technologies like MERN which can be seen im my work over the github</p>
`;
accordionElement.classList.add("accordian");
accordianWrapper.appendChild(accordionElement);
console.log(accordionElement);

// adding click event to all the accordion and changing background color
let accordion = document.querySelectorAll(".accordian h3");
accordion.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;

    // change accordion paragraph background color
    para.style.backgroundColor = "#ececfe";

    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
  // change accordion heading background color
  element.style.backgroundColor = "#d6d6f6";
});
