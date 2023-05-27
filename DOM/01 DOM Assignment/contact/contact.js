let leftForm = document.querySelector(".mainLeft form");
let rightForm = document.querySelector(".mainRight form");

rightForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const { name, email, message } = event.target.value;
});
