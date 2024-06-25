// Event listener for form submission
document.getElementById('contact-button').addEventListener('click', function() {
    // Collect form data
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Regular expressions for validation
    let nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces  \s → Whitespace character
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    // Validation functions
    function validateFirstName() {
        if (firstName === "") {
            alert("Please enter your First Name.");
            return false;
        }
        if (!nameRegex.test(firstName)) {
            alert("First Name should only contain letters and spaces.");
            return false;
        }
        return true;
    }

    function validateLastName() {
        if (lastName === "") {
            alert("Please enter your Last Name.");
            return false;
        }
        if (!nameRegex.test(lastName)) {
            alert("Last Name should only contain letters and spaces.");
            return false;
        }
        return true;
    }

    function validateEmail() {
        if (email === "") {
            alert("Please enter your email.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    function validateMessage() {
        if (message === "") {
            alert("Please enter your message.");
            return false;
        }
        return true;
    }

    // Perform validation
    if (validateFirstName() && validateLastName() && validateEmail() && validateMessage()) {
        // Call the submitForm function from localStorageData
        setFeedback(firstName, lastName, email, message);
    }
});


function setFeedback(firstName, lastName, email, message) {
    // Create object for the current form submission
    let contactMessage = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        timestamp: new Date().toISOString() // Example timestamp
    };

    // Retrieve existing data from localStorage or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem("contactMessages")) || []; // تحويل من json الى object 

    // Add the new form data to the existing array
    existingData.push(contactMessage);

    // Store the updated array back in localStorage
    localStorage.setItem("contactMessages", JSON.stringify(existingData));//تحويل ال object ل JSON

    // Optionally, log the form data to console
    console.log("contactMessage:", contactMessage);

    // Clear the form fields after storing data
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Form submitted successfully!");
}