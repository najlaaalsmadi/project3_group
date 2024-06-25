// Function to save profile data to sessionStorage and localStorage
function saveProfileData() {
    let sessionUser = JSON.parse(sessionStorage.getItem('logged-in-user'));

    let userData = {
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        about: document.getElementById('about').value,
        firstName: sessionUser.firstName,
        lastName: sessionUser.lastName,
        id: sessionUser.id,
        username: sessionUser.username ,
        img : sessionUser.img
    };

    sessionStorage.setItem('logged-in-user', JSON.stringify(userData));
    updateLocalStorageUserData(userData);
    console.log(userData);

    // Redirect to profile page
    window.location.href = "../pages/profile.html";
}

// Function to update user data in localStorage
function updateLocalStorageUserData(updatedUserData) {
    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    let userIndex = storedUserData.users.findIndex(user => user.username === updatedUserData.username);
    if (userIndex !== -1) {
        storedUserData.users[userIndex].role = updatedUserData.role;
        storedUserData.users[userIndex].email = updatedUserData.email;
        storedUserData.users[userIndex].phone = updatedUserData.phone;
        storedUserData.users[userIndex].location = updatedUserData.location;
        storedUserData.users[userIndex].about = updatedUserData.about;
        storedUserData.users[userIndex].img = updatedUserData.img;

        localStorage.setItem('userData', JSON.stringify(storedUserData));
    }
}

// Attach event listener to update-profile button
document.getElementById('update-profile').addEventListener('click', saveProfileData);

// Handle profile picture upload لحتى ارفع صوره 
document.getElementById('profile-pic-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    //هذا السطر يُستخدم لاسترجاع أول ملف تم اختياره من قبل المستخدم عبر حقل الإدخال input[type="file"].
    // عندما يختار المستخدم ملفًا باستخدام هذا الحقل، يتم تشغيل حدث change، وتحتوي event.target.files
     // على مصفوفة من الملفات التي تم اختيارها. 
   // في هذا السطر، event.target.files[0] يُحصل على أول ملف من هذه المصفوفة.
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('profile-pic').src = e.target.result;

        let sessionUser = JSON.parse(sessionStorage.getItem('logged-in-user'));
        let storedUserData = JSON.parse(localStorage.getItem('userData'));//اشاره الى الاشياء يلي تم تغيير عليه 

        let userIndex = storedUserData.users.findIndex(user => user.username === sessionUser.username);
        if (userIndex !== -1) {
            storedUserData.users[userIndex].img = e.target.result;
            sessionUser['img']=e.target.result;
            localStorage.setItem('userData', JSON.stringify(storedUserData));
            sessionStorage.setItem('logged-in-user', JSON.stringify(sessionUser));
        }
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});
