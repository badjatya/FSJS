function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById("myForm");

    // Reset errors
    const errorElements = form.getElementsByClassName("error");
    Array.from(errorElements).forEach((errorElement) => {
        errorElement.textContent = "";
    });

    // Name validation
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!nameInput.value.trim()) {
        nameError.textContent = "Name is required";
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.value.trim()) {
        emailError.textContent = "Email is required";
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
    }

    // Phone validation
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (!phoneInput.value.trim()) {
        phoneError.textContent = "Phone number is required";
    } else if (!isValidPhone(phoneInput.value)) {
        phoneError.textContent = "Invalid phone number format";
    }

    // Password validation
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (!passwordInput.value.trim()) {
        passwordError.textContent = "Password is required";
    }

    // Age validation
    const ageInput = document.getElementById("age");
    const ageError = document.getElementById("ageError");
    if (!ageInput.value.trim()) {
        ageError.textContent = "Age is required";
    } else if (isNaN(ageInput.value) || ageInput.value < 1) {
        ageError.textContent = "Invalid age";
    }

    // Gender validation
    const genderInput = document.getElementById("gender");
    const genderError = document.getElementById("genderError");
    if (!genderInput.value.trim()) {
        genderError.textContent = "Gender is required";
    }

    // Date validation
    const dateInput = document.getElementById("date");
    const dateError = document.getElementById("dateError");
    if (!dateInput.value.trim()) {
        dateError.textContent = "Date is required";
    }

    // Color validation
    const colorInput = document.getElementById("color");
    const colorError = document.getElementById("colorError");
    if (!colorInput.value.trim()) {
        colorError.textContent = "Color is required";
    }

    // If no errors, submit the form
    if (!form.getElementsByClassName("error").length) {
        form.submit();
    }
}

function isValidEmail(email) {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Regular expression pattern for phone number validation
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
