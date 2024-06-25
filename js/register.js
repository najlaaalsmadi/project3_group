

  
  let regName = /^[a-zA-Z]+$/; 
  let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let regUsername = /^[a-zA-Z0-9_]+$/; 
  
  let firstNameField = document.getElementById("first-name");
  let lastNameField = document.getElementById ("last-name")
  let emailField = document.getElementById("email");
  let usernameField = document.getElementById("user-name");
  let passwordField = document.getElementById("password");
  let repeatPassField = document.getElementById("pssword-repeat");
  
  let firstNameError = document.getElementById('firstNameError');
  let lastNameError = document.getElementById('lastNameError');
  let emailError = document.getElementById("emailError");
  let usernameError = document.getElementById("username-error");
  let passError = document.getElementById("passError");
  let repeatPassError = document.getElementById("repeatpassdError");


// Name validation
firstNameField.addEventListener('keyup', function () {
  var firstNameInput = firstNameField.value.trim();
  if (regName.test(firstNameInput) == false && firstNameInput !== '') {
      firstNameError.innerHTML = 'Numbers are not allowed';
  } else {
      firstNameError.innerHTML = '';
  }
});

lastNameField.addEventListener('keyup', function () {
  var lastNameInput = lastNameField.value.trim();
  if (regName.test(lastNameInput) == false && lastNameInput !== '') {
      lastNameError.innerHTML = 'Numbers are not allowed';
  } else {
      lastNameError.innerHTML = '';
  }
});
  // Email validation
emailField.addEventListener('change', function () {
  var emailInput = emailField.value.trim();
  if (regEmail.test(emailInput) == false && emailInput !== '') {
      emailError.innerHTML = 'Invalid Email';
  } else {
      emailError.innerHTML = '';
  }
});

// Function to validate username
function validateUsername(username) {
  return regUsername.test(username);
}


// Username validation
usernameField.addEventListener('keyup', function () {
    var usernameInput = usernameField.value.trim();
    if (validateUsername(usernameInput) === false && usernameInput !== '') {
        usernameError.innerHTML = 'Username can only contain letters, numbers, and underscore';
        console.log("username erroe");
    } else {
        usernameError.innerHTML = '';
    }
});


// Password Length Validation
passwordField.addEventListener ('input', function () {
  const passInput = passwordField.value.trim();
  if  (passInput.length > 20) {
      passError.innerHTML = "Password Should be less than 20 chars"
  }


  else {
      passError.innerHTML = ""
  }
})


// Password match validation
repeatPassField.addEventListener ('change', function () {
  var passInput = passwordField.value.trim();
  var repeatPassInput = repeatPassField.value.trim();
  if (passInput !== repeatPassInput && repeatPassInput !== '') {
      repeatPassError.innerHTML = "Passwords don't match";
  } else {
      repeatPassError.innerHTML = "";
  }
});



// this is when you click : 


document.getElementById('register-button').addEventListener('click', function(event) {
   
   
   
    event.preventDefault(); // Prevent form from submitting normally
   
    // Capture form data
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const userName = document.getElementById('user-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const password_repeat = document.getElementById('pssword-repeat').value.trim();
   
     
    var valid = true;

    if (regName.test(firstName) == false || firstName === '') {
         
        alert('Please enter a valid first name');
        valid = false;
    }

    if (regName.test(lastName) == false || lastName === '') {
         
        alert('Please enter a valid last name');
        valid = false;
    }

    if (regEmail.test(email) == false || email === '') {
      alert('Please enter a valid email');
        valid = false;
    }

    if (password === '') {
      alert('Please enter a password');
        valid = false;
    } else if (password !== password_repeat) {
        repeatPassError.innerHTML = "Passwords don't match";
        valid = false;
    }

    else if (password.length >= 20) {
         
        alert('Enter a password less than 20 chars');
        valid = false;
    }

    if (password_repeat === '') {
      alert('please repeat your password');
        valid = false;
    }


    if(valid){

       // Retrieve existing local storage data
    let user_Data = JSON.parse(localStorage.getItem('userData'));
    console.log("button clicked ");


    if (!user_Data) {
      // Initialize localStorageData if it doesn't exist
      user_Data = {
        users: [
            {
                id: 1,
                username: "john_doe",
                password: "hashedPassword1",
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                location : "" ,
                role : "" ,
                phone : "" , 
                about : ""
            },
            {
                id: 2,
                username: "jane_smith",
                password: "hashedPassword2",
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                location : "" ,
                role : "" ,
                phone : "" , 
                about : ""
            }
        ],
        loggedInUser: null
    };
    }


      // Create new user object
    const newUser = {
      id: user_Data.users.length + 1, // Generate a new ID
      username: userName,
      password: password, // Ideally, hash the password before storing
      firstName: firstName,
      lastName: lastName,
      email: email ,
      location : "" ,
      role : "" ,
      phone : "" , 
      about : "" ,
      img : ""
    };
  
    // Add new user to users array
    user_Data.users.push(newUser);
    // Update local storage
    localStorage.setItem('userData', JSON.stringify(user_Data));
  
    // Optionally, you can log the data to verify
    console.log(user_Data);
    alert('Successful Registration');
    window.location.href = "../pages/login.html" ;
    // Clear the form
    // event.target.reset();
    }
  });
  


