const getRandomColor = () => {
    let symbols = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += symbols[Math.floor(Math.random() * 16)];
    }
    return hexColor;
};

const createElement = () => {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.left = event.clientX + "px";
    element.style.top = event.clientY + "px";
    element.style.backgroundColor = getRandomColor();

    return element;
};

const body = document.querySelector("body");
const showElement = () => {
    body.appendChild(createElement());
};

body.addEventListener("click", showElement);
