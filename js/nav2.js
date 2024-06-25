document.addEventListener("DOMContentLoaded", function() {
    checkLoginStatus();
  });
  
  function checkLoginStatus() {
    let sessionData = JSON.parse(sessionStorage.getItem('logged-in-user'));
    if (sessionData && sessionData.username) {
        generateLoggedInNavbar(sessionData.username);
    } else {
        generateLoggedOutNavbar();
    }
  }
  
  function generateLoggedOutNavbar() {
    const navbarHTML = `
    <!-- Navbar for logged out users -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="home.html">
                <h1 class="text-primary fw-bold mb-0">H<span class="text-dark Text-r">R</span></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars text-primary"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link active Active-item" href="home.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="policies.html">Policies</a></li>
                </ul>
                <div class="d-flex align-items-center">
                    <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
                        <i class="fas fa-sun SunAndMoon"></i>
                        <span class="toggle-text">Mode</span> 
                        <i class="fas fa-moon SunAndMoon"></i>
                    </button>
                    <a href="login.html" class="btn btn-primary ms-3">Login</a>
                    <a href="register.html" class="btn btn-secondary ms-2">Register</a>
                </div>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }
  
  function generateLoggedInNavbar(username) {
    const navbarHTML = `
    <!-- Navbar for logged in users -->
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="home.html">
                <h1 class="text-primary fw-bold mb-0">H<span class="text-dark Text-r">R</span></h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars text-primary"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link active Active-item" href="home.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu  dropdownul" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="service.html">Dashboard</a></li>
                            <li><a class="dropdown-item" href="leaveApplication.html">Leave Application</a></li>
                            <li><a class="dropdown-item" href="employees-information.html">View Employees Information</a></li>
                            <li><a class="dropdown-item" href="taskManagement.html">Task Management</a></li>
                            <li><a class="dropdown-item" href="feedback.html">Feedback System</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex align-items-center">
                    <button class="btn btn-toggle Mode" onclick="toggleDarkMode()">
                        <i class="fas fa-sun SunAndMoon"></i>
                        <span class="toggle-text">Mode</span> 
                        <i class="fas fa-moon SunAndMoon"></i>
                    </button>
                    <div class="user-info ms-3" id="user-info">
                        <a id="profile-button" href="profile.html">
                            <i class="fas fa-user"></i> <span>${username}</span>
                        </a>
                    <button class="btn btn-logout" onclick="logout()">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
            </div>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  }
  
  function toggleDarkMode() {
    // Your dark mode toggling code here
  }
  
  function logout() {
    sessionStorage.clear();
    window.location.href = 'home.html'; // Redirect to home page or login page
  }
  
