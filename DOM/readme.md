## DOM Assignment 1
### Task 1
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)
```javascript
// removing Contact from navItems
let navItems = document.querySelector("nav ul");
navItems.removeChild(navItems.lastElementChild);

// Adding Projects and HireMe to navItem

function appendNewNavLink(link, name) {
    let element = document.createElement("li");
    element.innerHTML = `<li><a href="${link}">${name}</a></li>`;
    let navItems = document.querySelector("nav ul");
    navItems.appendChild(element);
}
appendNewNavLink("#", "Projects");
appendNewNavLink("#", "Hire Me");
```

### Task 2
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

```javascript
// remove HireMe
let navItems2 = document.querySelector("nav ul");
navItems.removeChild(navItems.lastElementChild);

// change search placeholder
let searchElement = document.querySelector(".search-field input");
searchElement.placeholder = "Search My Projects";
```

### Task 3
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

```javascript
// change in role and company
let aboutDeveloper = document.querySelectorAll(
".hero-left-section p span"
);

aboutDeveloper[1].innerText = "an Employee";
aboutDeveloper[2].innerText = "iNeuron intelligence Pvt Ltd";
```

### Task 4
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

```javascript
// change image source

let imgElement = document.querySelector(".hero-right-section img");
imgElement.src =
"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

### Task 5
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

```javascript
// Create Support Me button

let btnDivElement = document.querySelector(".hero-right-section-btns");
let btnElement = document.createElement("button");
btnElement.innerText = "Support Me";
btnDivElement.appendChild(btnElement);
```
## DOM Assignment 02
### Task 1
*change background color of accordion heading and paragraph*

![](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)
```javascript

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
```
### Task 2
*Adding new accordion*

![](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)
```javascript
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
```
## DOM Assignment 03
### Task 01
![](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)
```javascript
// grabbing the buttons
const submitBtn = document.querySelector(".mainRight form button");
const resetBtn = document.querySelector(".mainLeft form button");

// function to take input from user input board
function onSubmit() {
  event.preventDefault();
  const username = document.querySelector(".userName");
  const email = document.querySelector(".userEmail");
  const message = document.querySelector(".userMessage");

  userOutput(username.value, email.value, message.value);

  username.value = "";
  email.value = "";
  message.value = "";
}

// function to display the output in user Output board
function userOutput(username, email, message) {
  document.querySelector(".enterName").value = username;
  document.querySelector(".enterMail").value = email;
  document.querySelector(".enterMessage").value = message;
}

// function to reset the user output board
function reset() {
  document.querySelector(".enterName").value = "";
  document.querySelector(".enterMail").value = "";
  document.querySelector(".enterMessage").value = "";
}
// adding event listener to button
submitBtn.addEventListener("click", onSubmit);
resetBtn.addEventListener("click", reset);
```

### DOM Assignment 04
*changing background color of card stats and changing card title*
![](04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

```javascript
const colors = ["#e8913d", "#ea4b7e", "#f38628", "#7ab334", "#4ca5fc"];
const cardStats = document.querySelectorAll(".clash-card__unit-stats");

for (i = 0; i < cardStats.length; i++) {
  cardStats[i].style.backgroundColor = colors[i];
  cardStats[i].style.color = "#fff";

  // changing color of cost
  cardStats[i].lastElementChild.style.color = "#fff";
}

// changing title of 2nd and 4th card
const clashLevel = document.querySelectorAll(".clash-card__level");
for (i = 0; i < clashLevel.length; i++) {
  if (i === 1) {
    clashLevel[i].nextElementSibling.textContent = "The Archer";
  }
  if (i === 3) {
    clashLevel[i].nextElementSibling.textContent = "The Goblin";
  }
}
```

## DOM Assignment 05
*Add pro subscription button in navbar and add a new recipe card*

![](05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

```javascript
// adding pro subscription button
const navLink = document.querySelector(".nav-links").nextElementSibling;
const subscriptionBtn = document.createElement("a");
subscriptionBtn.innerText = "Pro Subscription";
subscriptionBtn.classList.add("btn");
subscriptionBtn.href = "./index.html";
navLink.appendChild(subscriptionBtn);

// adding 6th card
function createCard(title, imageLink, prepTime, cookTime) {
  const card = document.createElement("div");
  const gallery = document.querySelector(".recipe-gallery");
  card.classList.add("card");
  card.innerHTML = `
      <a href="#" class="recipe-text">
        <img src="${imageLink}" class="recipe-img" />
        <h5 class="recipe-name">${title}</h5>
        <p class="recipe-disp">Prep : ${prepTime}min | Cook : ${cookTime}min</p>
      </a>
      `;
  gallery.appendChild(card);
}
createCard("New Recipe", "./img/recipe-1.jpeg", "20", "40");
```


## DOM Assignment 06
*Change logo and price*
### Task 01
![](06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

```javascript
// changing the logo
const logo = document.querySelector(".logo");
logo.src = "./assets/ineuron-logo.png";
```

### Task 02
![](06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

```javascript
// changing the price
const appPrice = document.querySelector(".app_price span");
appPrice.innerText = "$10";
```

## DOM Assignment 07
### Task 01
*Remove the languages that have 2.0 in their name(Every alternative language)*

![](DOM%20P7/DOM%20P7/ass7.1-after.png)

```javascript
const links = document.querySelectorAll(".main__languages a");
for (let i = 0; i < links.length; i++) {
  const element = links[i];
  if (element.innerText.includes(2.0)) {
    document.querySelector(".main__languages").removeChild(element);
  }
}
```

### Task 01
*Remove the languages that have 2.0 in their name(Every alternative language)*

![](DOM%20P7/DOM%20P7/ass7.2-after.png)

```javascript
const inputForm = document.querySelector(".main__form-input");
const submitButton = document.querySelector(".main__form-btn");

inputForm.removeAttribute("disabled");
inputForm.value = "ineuron";
submitButton.removeAttribute("disabled");
```

## DOM Assignment 06

### Task 01

![](DOM%20P8/DOM%20P8/ass8.1-after.png)

```javascript
const aside = document.querySelector("aside");
aside.addEventListener("mouseover", () => {
  aside.style.transform = "scale(1.1)";
  aside.style.transition = "ease-in-out .5s";
});
aside.addEventListener("mouseleave", () => {
  aside.style.transform = "scale(1)";
  aside.style.transition = "ease-in-out .5s";
});
```

### Task 02
![](DOM%20P8/DOM%20P8/ass8.2-after.png)

```javascript
const documentBody = document.querySelector("body");
documentBody.style.backgroundImage = "none";
```

### Task 03
![](DOM%20P8/DOM%20P8/ass8.3-after.png)

```javascript
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
```

## DOM Assignment 09

### Task 01
![](DOM%20P9/DOM%20P9/ass9.1-after.png)

```javascript
document.querySelector(".caption .title").style.color = "#d51139";
```

### Task 02
![](DOM%20P9/DOM%20P9/ass9.2-after.png)

```javascript
const button = document.querySelector(".add-to-cart");
console.log(button);
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#d61139";
});
```

