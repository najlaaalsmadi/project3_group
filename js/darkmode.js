  // Function to toggle dark mode
  function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', true);
    } else {
        localStorage.removeItem('darkMode');
    }
}

window.onload = function() {
    let isDarkMode = localStorage.getItem('darkMode');
    console.log(isDarkMode);
    if (isDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
};