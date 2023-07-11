const modal = document.getElementById("myModal");

// Get the button that opens the modal
const button = document.querySelector(".button");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
