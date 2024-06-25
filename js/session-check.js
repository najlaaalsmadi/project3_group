document.addEventListener("DOMContentLoaded", function() {
    checkSessionAndRedirect();
});

function checkSessionAndRedirect() {
    let sessionData = JSON.parse(sessionStorage.getItem('logged-in-user'));
    if (!sessionData || !sessionData.username) {
        alert("You must be logged in to access this page.");
        window.location.href = 'login.html'; // Redirect to the login page
    }
}
