// Task 1
const aside = document.querySelector("aside");
aside.addEventListener("mouseover", () => {
  aside.style.transform = "scale(1.1)";
  aside.style.transition = "ease-in-out .5s";
});
aside.addEventListener("mouseleave", () => {
  aside.style.transform = "scale(1)";
  aside.style.transition = "ease-in-out .5s";
});

// Task 2

const documentBody = document.querySelector("body");
documentBody.style.backgroundImage = "none";

// Task 3 Navbar Button

const navbarButton = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
navbarButton.addEventListener("click", () => {
  // method 1
  if (navbarCollapse.classList.contains("collapse")) {
    navbarCollapse.classList.remove("collapse");
  } else {
    navbarCollapse.classList.add("collapse");
  }

  //   method 2

  //   if (navbarCollapse.style.display == "none") {
  //     navbarCollapse.style.display = "block";
  //   } else {
  //     navbarCollapse.style.display = "none";
  //   }
});
