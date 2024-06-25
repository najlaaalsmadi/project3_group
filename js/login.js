document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form from submitting normally
      console.log("Login form submitted");
  
      // Capture form data
      const userName = document.getElementById('user-name').value;
      const password = document.getElementById('password').value;
  
      // Clear any previous error messages
      document.getElementById('usernameError').textContent = '';
      document.getElementById('passwordError').textContent = '';
  
      // Retrieve existing local storage data
      let user_data = JSON.parse(localStorage.getItem('userData'));
      
      if (!user_data || !user_data.users) {
        alert("No users registered. Please register first.");
        return;
      }
  
      // Find the user with the provided username
      const user = user_data.users.find(u => u.username === userName);
  
      if (!user) {
        document.getElementById('usernameError').textContent = 'Username not found.';
        return;
      }
  
      // Check if the password matches
      if (user.password !== password) {
        document.getElementById('passwordError').textContent = 'Incorrect password.';
        return;
      }
  
      // Login successful
       
      console.log("Logged in user:", user);
  
      // Optionally, set the logged-in user in local storage
      user_data.loggedInUser = user.id;
      sessionStorage.setItem('logged-in-user',JSON.stringify(user));
      sessionStorage.setItem('is-logged-in',JSON.stringify(true));
      localStorage.setItem('userData', JSON.stringify(user_data));
  
      // Redirect or perform any other actions after successful login
      // window.location.href = 'dashboard.html'; // Example redirect

      alert('Welcome '+user.firstName);
      window.location.href = "../pages/service.html" ;
    });
  });
  